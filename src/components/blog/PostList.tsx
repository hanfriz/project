

'use client';

import Link from 'next/link';

type Post = {
  fields: {
    title: string;
    slug: string;
    excerpt: string;
    category?: {
      fields: {
        name: string;
      };
    };
  };
};

type Props = {
  posts: Post[];
};

export default function PostList({ posts }: Props) {
  if (!posts || posts.length === 0) {
    return <p>No blog posts found.</p>;
  }

  return (
    <div className="grid gap-6">
      {posts.map((post) => (
        <div key={post.fields.slug} className="p-4 border rounded shadow-sm">
          <h2 className="text-2xl font-semibold">
            <Link href={`/blog/post/${post.fields.slug}`} className="text-blue-600 hover:underline">
              {post.fields.title}
            </Link>
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            {post.fields.category?.fields?.name && (
              <span>📂 <strong>Category:</strong> {post.fields.category.fields.name}</span>
            )}
          </p>

          <p className="mt-2 text-gray-700">{post.fields.excerpt}</p>
        </div>
      ))}
    </div>
  );
}