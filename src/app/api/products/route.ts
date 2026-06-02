import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const PRODUCTS_DIR = path.join(process.cwd(), 'src', 'content', 'products');

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
    
    if (!fs.existsSync(PRODUCTS_DIR)) {
      fs.mkdirSync(PRODUCTS_DIR, { recursive: true });
    }
    
    const filePath = path.join(PRODUCTS_DIR, `${product.slug}.json`);
    fs.writeFileSync(filePath, JSON.stringify(product, null, 2), 'utf8');
    
    return NextResponse.json({ success: true, product });
  } catch (error) {
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
    
    const filePath = path.join(PRODUCTS_DIR, `${slug}.json`);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      return NextResponse.json({ success: true });
    }
    
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
  }
}
