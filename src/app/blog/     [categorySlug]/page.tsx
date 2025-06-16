import { getAllPostsByCategory, getAllCategories } from '../../../lib/contentful';
import BlogClient from '../../../components/BlogClient';
import { notFound } from 'next/navigation';

// ✅ Ganti tipe CategoryPage jadi sesuai App Router
export default async function CategoryPage({ params }: { params: { categorySlug: string } }) {
  const posts = await getAllPostsByCategory(params.categorySlug);

  if (!posts || posts.length === 0) {
    notFound();
  }

  return <BlogClient initialPosts={posts} />;
}

// ✅ generateStaticParams WAJIB dan pastikan sesuai format
export async function generateStaticParams() {
  const categories = await getAllCategories();

  return categories.map((category: any) => ({
    categorySlug: category.fields.slug,
  }));
}