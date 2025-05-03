// app/landingPage/sections/blog.jsx
import React from 'react';
import Link from 'next/link';
import blogData from '../../data/blogContent';  // Adjust path as needed

export default function BlogSection() {
  // Get featured or recent blogs for the landing page
  const featuredBlogs = blogData.slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest from our Blog</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredBlogs.map((blog) => (
            <div key={blog.id} className="  overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-60 object-cover" />
              <div className="py-4 ">

                <div className='flex justify-between items-center'>
                  <h3 className="text-xl mb-1">{blog.title}</h3>

                  <span className="text-md text-gray-500 mb-2 block bg-gray-200 px-4 rounded-full">{blog.tag}</span>
                </div>
                <span className="text-md text-gray-500 mb-2 block ">{blog.date}</span>

              </div>

            </div>
          ))}
       </div>

        <div className="text-center mt-10">
          <Link href="/blog" className="inline-block px-6 py-3 bg-[#06be8a] text-white rounded-full hover:bg-gray-700 transition-colors">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}