Blog Website with Next.js
This is a blog website built with Next.js and React. It allows users to view blog posts, search for specific articles, and paginate through the posts. The content is fetched from a JSON file and displayed on both the home page and individual blog post pages.

Overview
This project demonstrates how to create a dynamic blog website using Next.js with the following features:

Fetching blog data from a local JSON file.
Pagination to navigate through multiple blog posts.
A search feature to filter blog posts by title.
A clean and responsive design using Tailwind CSS.
The implementation includes the following pages:

Home Page: Displays a list of blog posts with summaries and provides search functionality.
Blog Detail Page: Displays the full content of a specific blog post based on its slug.
Pagination: Allows users to navigate between pages of blog posts.
Features
Responsive Design: The website is designed to work on both desktop and mobile devices.
Blog Post Preview: A summary of each post is displayed with the option to read more.
Pagination: Blog posts are paginated, and users can navigate to the next or previous pages.
Search: Users can search for posts by title.


Setup Instructions
To run this project locally, follow these steps:

1. Clone the repository

git clone https://github.com/Saksham-w/blog-website.git
cd blog-website

2. Install dependencies
Make sure you have Node.js installed. Then, run the following command to install the project dependencies:

npm install

3. Set up the local server
Start the Next.js development server:

npm run dev

The website will be available at http://localhost:3000.