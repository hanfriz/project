
'use client';

import Link from 'next/link';

export default function PostList({ posts }: { posts: any[] }) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {posts.map((post) => (
        <div key={post.sys.id} className="border p-4 rounded shadow bg-white dark:bg-white-800">
          {post.fields.coverImage?.fields?.file?.url && (
            <img
              src={post.fields.coverImage.fields.file.url}
              alt={post.fields.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
          )}
          <h2 className="text-xl font-bold mb-2">{post.fields.title}</h2>
          <Link
            href={`/blog/${post.fields.slug}`}
            className="text-blue-600 hover:underline"
          >
            Read More →
          </Link>
        </div>
      ))}
    </div>
  );
}

