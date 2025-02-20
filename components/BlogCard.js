import Link from "next/link";
import { format } from "date-fns";

export default function BlogCard({ blog }) {
  return (
    <Link href={`/blog/${blog.slug}`} passHref>
      <div className="p-4 border rounded-lg shadow-sm hover:shadow-lg cursor-pointer transition duration-200">
        <h2 className="text-xl font-semibold">{blog.title}</h2>
        <p className="text-gray-600 mt-2">{blog.summary}</p>
        <p className="text-sm text-gray-500 mt-2">
          {format(new Date(blog.date), "MMMM dd, yyyy")}
        </p>
      </div>
    </Link>
  );
}
