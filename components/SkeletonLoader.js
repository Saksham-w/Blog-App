export default function SkeletonLoader() {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="p-4 border rounded animate-pulse">
            <div className="h-6 bg-gray-300 w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 w-full mb-2"></div>
            <div className="h-4 bg-gray-300 w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }
  