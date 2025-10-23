import { Metadata } from "next";
import BlogDetailPage from "./BlogDetailPage";

// Types
type BlogSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  content: BlogSection[];
};

// Example blog posts
const blogPosts: BlogPost[] = [
  {
    slug: "understanding-civil-law",
    title: "Understanding Civil Law in India: Everything You Need to Know",
    date: "Oct 15, 2025",
    content: [
      {
        type: "paragraph",
        text: "Civil law in India governs disputes between individuals, organizations, or government bodies. Unlike criminal law, it focuses on resolving conflicts and compensating affected parties.",
      },
      { type: "heading", text: "Key Areas of Civil Law" },
      {
        type: "list",
        items: [
          "Contracts: Legal agreements must be honored; breaches can lead to compensation.",
          "Property Disputes: Ownership, inheritance, and sale disputes.",
          "Compensation Claims: For damages due to negligence or harm.",
          "Consumer Rights: Protects buyers from unfair trade practices.",
        ],
      },
      { type: "heading", text: "How Civil Law Works" },
      {
        type: "list",
        items: [
          "Filing a civil suit",
          "Mediation and arbitration options",
          "Court procedures and timelines",
        ],
      },
      { type: "heading", text: "Tips for Citizens" },
      {
        type: "list",
        items: [
          "Keep written agreements for every transaction",
          "Consult a lawyer for disputes before escalation",
          "Understand timelines for filing cases",
        ],
      },
      {
        type: "paragraph",
        text: "Civil law ensures justice in personal and business disputes. Expert guidance is crucial to protect your rights efficiently.",
      },
    ],
  },
  {
    slug: "property-dispute-tips",
    title: "Top Tips for Property Dispute Resolution",
    date: "Oct 10, 2025",
    content: [
      {
        type: "paragraph",
        text: "Property disputes are common in India due to unclear ownership, inheritance issues, or contractual misunderstandings. Resolving them requires knowledge of civil law and documentation.",
      },
      { type: "heading", text: "Common Property Disputes" },
      {
        type: "list",
        items: [
          "Boundary disputes",
          "Ownership or title conflicts",
          "Inheritance disagreements",
          "Rental or lease issues",
        ],
      },
      { type: "heading", text: "Resolution Strategies" },
      {
        type: "list",
        items: [
          "Negotiation: Direct discussion with the other party.",
          "Mediation/Arbitration: Legal third-party resolution.",
          "Court Proceedings: Filing a civil suit if disputes remain unresolved.",
        ],
      },
      { type: "heading", text: "Documentation Tips" },
      {
        type: "list",
        items: [
          "Keep all property sale/purchase agreements",
          "Verify titles through official registries",
          "Maintain receipts and communication records",
        ],
      },
      {
        type: "paragraph",
        text: "Timely legal intervention can save time, money, and stress. Expert lawyers ensure smooth resolution of property disputes in compliance with Indian laws.",
      },
    ],
  },
];

// Metadata generation
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Blog Post Not Found" };

  // Flatten content to plain text for description
  const plainText = post.content
    .map((block) => {
      if (block.type === "paragraph" || block.type === "heading") return block.text;
      if (block.type === "list") return block.items.join(", ");
      return "";
    })
    .join(" ");

  return {
    title: `${post.title} | Elegant Lawyer`,
    description: plainText.substring(0, 160),
    keywords: "law, civil law, property dispute, legal guidance",
  };
}

// Server Component
export default function BlogPage() {
  return <BlogDetailPage blogPosts={blogPosts} />;
}
