// src/app/api/authors/route.ts
import { NextResponse } from 'next/server';
import { getAllAuthors } from '../../../lib/contentful';

export async function GET() {
  try {
    const authors = await getAllAuthors();
    return NextResponse.json({ authors });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch authors' }, { status: 500 });
  }
}
