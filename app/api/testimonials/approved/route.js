import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'approved-testimonials.json');
    const data = await readFile(filePath, 'utf-8');
    const approved = JSON.parse(data);
    return NextResponse.json(Array.isArray(approved) ? approved : []);
  } catch (err) {
    if (err.code === 'ENOENT') return NextResponse.json([]);
    console.error('Error reading approved testimonials:', err);
    return NextResponse.json([], { status: 200 });
  }
}
