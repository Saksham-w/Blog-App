import fs from "fs";
import path from "path";
import { format } from "date-fns";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "public/data/blogs.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const blogs = JSON.parse(jsonData);

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetail({ params }) {
  const { slug } = params;

  // Fetch blog data
  const filePath = path.join(process.cwd(), "public/data/blogs.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const blogs = JSON.parse(jsonData);

  // Find the specific blog post
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) {
    return notFound();
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-500">
        {format(new Date(blog.date), "MMMM dd, yyyy")}
      </p>
      <p className="mt-4">{blog.content}</p>
    </div>
  );
}
