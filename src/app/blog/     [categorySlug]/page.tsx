
import { getAllPostsByCategory, getAllCategories } from '../../../lib/contentful';
import BlogClient from '../../../components/BlogClient';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    categorySlug: string;
  };
};

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((cat: any) => ({
    categorySlug: cat.fields.slug,
  }));
}

export default async function CategoryPage({ params }: Props) {
  const posts = await getAllPostsByCategory(params.categorySlug);

  if (!posts || posts.length === 0) {
    notFound();
  }

  return <BlogClient initialPosts={posts} />;
}