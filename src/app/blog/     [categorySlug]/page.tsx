import { getAllPostsByCategory, getAllCategories } from '../../..//lib/contentful';
import BlogClient from '../../../components/BlogClient';
import { notFound } from 'next/navigation';

type CategoryPageProps = {
  params: {
    categorySlug: string;
  };
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const posts = await getAllPostsByCategory(params.categorySlug);

  if (!posts || posts.length === 0) {
    notFound();
  }

  return <BlogClient initialPosts={posts} />;
}

export async function generateStaticParams() {
  const categories = await getAllCategories();

  return categories.map((category: any) => ({
    categorySlug: category.fields.slug,
  }));
}