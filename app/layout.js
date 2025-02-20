import "@/app/globals.css"; // Ensure correct import path
import Link from "next/link";

export const metadata = {
  title: "My Blog App",
  description: "A Next.js blog application with dynamic routing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <div className="max-w-4xl mx-auto p-4">
          <header className="py-4 border-b mb-6">
            <nav className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">My Blog</h1>
              <a href="/" className="text-blue-500">Home</a>
            </nav>
          </header>

          <main>{children}</main>

          <footer className="py-4 mt-6 border-t text-center text-gray-500">
            © {new Date().getFullYear()} My Blog. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
