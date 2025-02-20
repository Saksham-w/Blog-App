import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
      <p className="text-lg text-gray-600 mb-6">
        Discover amazing articles on various topics.
      </p>
      <Link href="/blogs">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
          Explore Blogs
        </button>
      </Link>
    </div>
  );
}
