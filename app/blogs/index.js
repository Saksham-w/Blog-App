"use client"; // Enables useState and useEffect in the App Router

import { useState, useEffect } from "react";
import Link from "next/link";
import { format } from "date-fns";
import SearchBar from "@/components/SearchBar";
import Pagination from "@/components/Pagination";
import SkeletonLoader from "@/components/SkeletonLoader";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    async function fetchBlogs() {
      const res = await fetch("/data/blogs.json"); // Fetch data from the public folder
      const data = await res.json();
      setBlogs(data);
      setFilteredBlogs(data);
      setLoading(false);
    }
    fetchBlogs();
  }, []);

  // Debounced Search
  useEffect(() => {
    const timer = setTimeout(() => {
      const filtered = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBlogs(filtered);
      setCurrentPage(1);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm, blogs]);

  // Pagination Logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Blog Posts</h1>
      <SearchBar onSearch={setSearchTerm} />

      {loading ? (
        <SkeletonLoader />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentBlogs.length > 0 ? (
            currentBlogs.map((blog) => (
              <Link key={blog.id} href={`/blogs/${blog.slug}`}>
                <div className="p-4 border rounded-lg hover:shadow-lg cursor-pointer transition duration-200">
                  <h2 className="text-xl font-semibold">{blog.title}</h2>
                  <p className="text-gray-600 mt-2">{blog.summary}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {format(new Date(blog.date), "MMMM dd, yyyy")}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-500">No posts found.</p>
          )}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
