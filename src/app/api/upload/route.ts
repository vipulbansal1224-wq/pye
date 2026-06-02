import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const file = data.get('file') as File;
    
    if (!file) {
      return NextResponse.json({ success: false, error: 'No file uploaded' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename to prevent overwrites
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const originalName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, ''); // Sanitize filename
    const filename = `${uniqueSuffix}-${originalName}`;
    
    const githubToken = process.env.GITHUB_TOKEN;
    if (githubToken) {
      // Upload to GitHub
      const repoOwner = 'vipulbansal1224-wq';
      const repoName = 'pye';
      const githubPath = `public/images/uploads/${filename}`;
      
      const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${githubPath}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${githubToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `Upload image: ${filename} via Admin Panel`,
          content: buffer.toString('base64'),
          branch: 'main'
        })
      });

      if (!response.ok) {
        const err = await response.text();
        console.error('GitHub Upload Error:', err);
        return NextResponse.json({ success: false, error: 'Failed to upload to GitHub' }, { status: 500 });
      }
    } else {
      // Local fallback
      const uploadsDir = join(process.cwd(), 'public', 'images', 'uploads');
      if (!existsSync(uploadsDir)) {
        await mkdir(uploadsDir, { recursive: true });
      }
      const path = join(uploadsDir, filename);
      await writeFile(path, buffer);
    }

    return NextResponse.json({ success: true, url: `/images/uploads/${filename}` });
  } catch (error) {
    console.error('Upload Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to upload file' }, { status: 500 });
  }
}
