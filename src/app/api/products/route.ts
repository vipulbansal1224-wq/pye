import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const PRODUCTS_DIR = path.join(process.cwd(), 'src', 'content', 'products');
const REPO_OWNER = 'vipulbansal1224-wq';
const REPO_NAME = 'pye';

// Helper to interact with GitHub API
async function githubRequest(method: string, path: string, body?: any) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return null;

  const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`;
  const res = await fetch(url, {
    method,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github.v3+json'
    },
    body: body ? JSON.stringify(body) : undefined
  });

  if (method === 'GET') {
    if (res.status === 404) return { status: 404 };
    return await res.json();
  }
  
  return res;
}

export async function GET() {
  try {
    if (!fs.existsSync(PRODUCTS_DIR)) {
      return NextResponse.json({ products: [] });
    }
    
    const files = fs.readdirSync(PRODUCTS_DIR);
    const products = files
      .filter(file => file.endsWith('.json'))
      .map(file => {
        const content = fs.readFileSync(path.join(PRODUCTS_DIR, file), 'utf8');
        return JSON.parse(content);
      });
      
    return NextResponse.json({ products });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const product = await request.json();
    if (!product.slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }
    
    const githubToken = process.env.GITHUB_TOKEN;
    const contentString = JSON.stringify(product, null, 2);
    
    if (githubToken) {
      const githubPath = `src/content/products/${product.slug}.json`;
      
      // 1. Get SHA if file exists
      let sha = undefined;
      const getRes = await githubRequest('GET', githubPath);
      if (getRes && getRes.sha) {
        sha = getRes.sha;
      }
      
      // 2. Put file
      const putRes = await githubRequest('PUT', githubPath, {
        message: `Update product: ${product.slug} via Admin Panel`,
        content: Buffer.from(contentString).toString('base64'),
        sha,
        branch: 'main'
      });
      
      if (!putRes || !putRes.ok) {
        return NextResponse.json({ error: 'Failed to push to GitHub' }, { status: 500 });
      }
    } else {
      // Local fallback
      if (!fs.existsSync(PRODUCTS_DIR)) {
        fs.mkdirSync(PRODUCTS_DIR, { recursive: true });
      }
      const filePath = path.join(PRODUCTS_DIR, `${product.slug}.json`);
      fs.writeFileSync(filePath, contentString, 'utf8');
    }
    
    return NextResponse.json({ success: true, product });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to save product' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    
    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }
    
    const githubToken = process.env.GITHUB_TOKEN;
    if (githubToken) {
      const githubPath = `src/content/products/${slug}.json`;
      const getRes = await githubRequest('GET', githubPath);
      
      if (getRes && getRes.sha) {
        const delRes = await githubRequest('DELETE', githubPath, {
          message: `Delete product: ${slug} via Admin Panel`,
          sha: getRes.sha,
          branch: 'main'
        });
        if (!delRes || !delRes.ok) {
          return NextResponse.json({ error: 'Failed to delete on GitHub' }, { status: 500 });
        }
      } else {
        return NextResponse.json({ error: 'Product not found on GitHub' }, { status: 404 });
      }
    } else {
      const filePath = path.join(PRODUCTS_DIR, `${slug}.json`);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      } else {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
      }
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
  }
}
