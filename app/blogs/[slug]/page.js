import fs from "fs";
import path from "path";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import Link from "next/link";

async function getBlogData(slug) {
  const filePath = path.join(process.cwd(), "public/data/blogs.json");

  try {
    const fileData = fs.readFileSync(filePath, "utf-8");
    const blogs = JSON.parse(fileData);
    const blog = blogs.find((b) => b.slug === slug);
    return blog || null;
  } catch (error) {
    console.error("Error reading blogs.json:", error);
    return null;
  }
}

export default async function BlogDetail({ params }) {
  const { slug } = params;
  const blog = await getBlogData(slug);

  if (!blog) {
    return notFound();
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="flex items-center justify-between border-b pb-6 mb-6">
        <Link href="/blogs" className="text-blue-500 hover:text-blue-700">
          &larr; Back to all blogs
        </Link>
      </div>
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
        {blog.title}
      </h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {format(new Date(blog.date), "MMMM dd, yyyy")}
      </p>
      <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        {blog.content}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "public/data/blogs.json");

  try {
    const fileData = fs.readFileSync(filePath, "utf-8");
    const blogs = JSON.parse(fileData);
    return blogs.map((blog) => ({
      slug: blog.slug,
    }));
  } catch (error) {
    console.error("Error reading blogs.json:", error);
    return [];
  }
}
