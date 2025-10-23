// app/blog/page.tsx
import Link from "next/link";
import { Card } from "@/components/ui/card";

// Example blog posts
const blogPosts = [
  {
    slug: "understanding-civil-law",
    title: "Understanding Civil Law in India",
    date: "Oct 15, 2025",
    summary:
      "A complete guide to civil law, dispute resolution, and legal procedures you should know.",
  },
  {
    slug: "property-dispute-tips",
    title: "Top Tips for Property Dispute Resolution",
    date: "Oct 10, 2025",
    summary:
      "Learn the best strategies for resolving property disputes efficiently and legally.",
  },
];

export default function BlogListingPage() {
  return (
    <section className="px-6 md:px-16 py-20 bg-gray-50 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">
        Our Blog
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="p-6 rounded-2xl shadow-md border border-gray-200 bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-primary mb-2">{post.title}</h3>
            <p className="text-gray-500 mb-4">{post.date}</p>
            <p className="text-gray-700 mb-4">{post.summary}</p>
            <Link href={`/blog/${post.slug}`}>
              <button className="bg-accent text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-600 hover:text-white transition-all">
                Read More
              </button>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
