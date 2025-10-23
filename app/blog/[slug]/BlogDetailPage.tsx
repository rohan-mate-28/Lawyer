"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";

// Types
interface BlogSection {
  type: "paragraph" | "heading" | "list";
  text?: string;
  items?: string[];
}

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: BlogSection[];
}

interface BlogDetailProps {
  blogPosts: BlogPost[];
}

// Client Component
export default function BlogDetailPage({ blogPosts }: BlogDetailProps) {
  const { slug } = useParams();

  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <section className="px-6 md:px-16 py-20 bg-gray-50 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-8">{post.date}</p>

      <article className="prose prose-lg max-w-3xl text-gray-700 mx-auto">
        {post.content.map((block, idx) => {
          switch (block.type) {
            case "paragraph":
              return <p key={idx}>{block.text}</p>;
            case "heading":
              return <h2 key={idx}>{block.text}</h2>;
            case "list":
              return (
                <ul key={idx} className="list-disc pl-6">
                  {block.items?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
            default:
              return null;
          }
        })}
      </article>
    </section>
  );
}
