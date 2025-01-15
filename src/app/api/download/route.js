import { NextResponse } from 'next/server';
import { createReadStream } from 'fs';
import { join } from 'path';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const apiFilePath = searchParams.get('filePath');

  console.log("apiFilePath", apiFilePath);
  
  if (!apiFilePath) {
    return NextResponse.json({ error: 'No file path provided' }, { status: 400 });
  }

  const filePath = join(process.cwd(), 'public', apiFilePath);
  const fileName = apiFilePath.split('/').pop();

  console.log("filePath",filePath);
  console.log("fileName",fileName);

  try {
    const fileStream = createReadStream(filePath);
    
    const headers = new Headers();
    headers.set('Content-Disposition', `attachment; filename=${fileName}`);
    headers.set('Content-Type', 'application/octet-stream');

    return new NextResponse(fileStream, { headers });
  } catch (error) {
    console.error('Error reading file:', error);
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}
