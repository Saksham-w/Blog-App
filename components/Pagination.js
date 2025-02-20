export default function Pagination({ currentPage, totalPages, setCurrentPage }) {
  return (
    <div className="flex justify-center items-center mt-6 space-x-2">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className="px-4 py-2 border rounded-full text-gray-700 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 disabled:opacity-50 transition duration-300"
      >
        Previous
      </button>

      {/* Page number display */}
      <span className="text-lg text-gray-800 dark:text-white">
        Page {currentPage} of {totalPages}
      </span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
        className="px-4 py-2 border rounded-full text-gray-700 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 disabled:opacity-50 transition duration-300"
      >
        Next
      </button>
    </div>
  );
}
