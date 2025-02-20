"use client"; // Enables useState and useEffect in the App Router

import { useState, useEffect } from "react";
import SearchBar from "@/components/SearchBar";
import Pagination from "@/components/Pagination";
import SkeletonLoader from "@/components/SkeletonLoader";
import BlogCard from "@/components/BlogCard"; // Import the BlogCard component
import Link from "next/link";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

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
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
        Blog Posts
      </h1>

      <div className="flex justify-center mb-6">
        <SearchBar onSearch={setSearchTerm} />
      </div>

      {loading ? (
        <div className="flex justify-center">
          <SkeletonLoader />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.length > 0 ? (
            currentBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No posts found.
            </p>
          )}
        </div>
      )}

      <div className="flex justify-center mt-8">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
