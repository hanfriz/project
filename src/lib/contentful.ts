import { createClient } from 'contentful';

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

// Fungsi: Ambil semua kategori
export async function getAllCategories() {
  try {
    const response = await client.getEntries({
      content_type: 'category',
      order: ['fields.name'],
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

// Fungsi: Ambil semua post berdasarkan kategori (filter manual)
export async function getAllPostsByCategory(slug: string) {
  try {
    // Ambil dulu semua kategori
    const categories = await getAllCategories();
    const matchedCategory = categories.find(
      (cat: any) => cat.fields.slug === slug
    );

    if (!matchedCategory) return [];

    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.category.sys.id': matchedCategory.sys.id, // Ini yang benar
      include: 2,
    });

    return response.items;
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    return [];
  }
}


// Fungsi: Ambil semua post
export async function getAllPosts() {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      order: ['-sys.createdAt'],
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching all posts:', error);
    return [];
  }
}

// Fungsi: Ambil 1 post berdasarkan slug
export async function getPostBySlug(slug: string) {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      include: 2,
    });
    return response.items[0];
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    return null;
  }
}

// Fungsi: Ambil semua penulis
export async function getAllAuthors() {
  try {
    const response = await client.getEntries({
      content_type: 'author',
      select: ['fields.name', 'fields.slug'],
      order: ['fields.name'],
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching authors:', error);
    return [];
  }
}
