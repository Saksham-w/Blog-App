import fs from "fs";
import path from "path";
import { format } from "date-fns";
import { notFound } from "next/navigation";

// Function to fetch blog data by slug
async function getBlogData(slug) {
  // Get the path to the blogs.json file
  const filePath = path.join(process.cwd(), "public/data/blogs.json");

  try {
    const fileData = fs.readFileSync(filePath, "utf-8");
    const blogs = JSON.parse(fileData); // Parse the JSON data

    // Find the specific blog using the slug
    const blog = blogs.find((b) => b.slug === slug);
    return blog || null; // Return blog or null if not found
  } catch (error) {
    console.error("Error reading blogs.json:", error);
    return null;
  }
}

export default async function BlogDetail({ params }) {
  // Await params to ensure it's properly resolved
  const { slug } = await params;  // <-- Use `await` here
  
  const blog = await getBlogData(slug);

  if (!blog) {
    return notFound(); // Return a 404 page if the blog is not found
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
