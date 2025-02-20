import Link from "next/link";
import { format } from "date-fns";

export default function BlogCard({ blog }) {
  return (
    <Link href={`/blogs/${blog.slug}`} passHref>
      <div className="p-6 border h-auto max-w-full sm:max-w-[320px] md:max-w-[360px] lg:max-w-[380px] rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer bg-white dark:bg-gray-900">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white leading-tight mb-3">
          {blog.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm md:text-base">
          {blog.summary}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          {format(new Date(blog.date), "MMMM dd, yyyy")}
        </p>
      </div>
    </Link>
  );
}
