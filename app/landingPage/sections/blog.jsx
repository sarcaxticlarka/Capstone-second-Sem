// app/landingPage/sections/blog.jsx
import React from 'react';
import Link from 'next/link';
import blogData from '../../data/blogContent';
import { Home } from 'lucide-react';
export default function BlogSection() {
  const featuredBlogs = blogData.slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center  py-10">
          <div>
            <div className="flex items-center  mb-2">
            <Home size={20} className="mr-2 text-[#06be8a]"  />
              <span className="text-sm font-medium text-gray-600"> Blog</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Real estate insights
            </h1>
            <p className="text-gray-600 text-lg">
              Stay ahead in the property market with expert advice and updates
            </p>
          </div>
          <Link href="/propertyBlog" >
          <button className="bg-gray-900 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-[#06be8a] transition">
            Read all articles
          </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {featuredBlogs.map((blog) => (
    <Link key={blog.id} href={`/propertyBlog/${blog.id}`}>
      <div className="cursor-pointer overflow-hidden">
        <img src={blog.image} alt={blog.title} className="w-full h-60 object-cover" />
        <div className="py-4">
          <div className='flex justify-between items-center'>
            <h3 className="text-xl mb-1">{blog.title}</h3>
            <span className="text-sm text-gray-500 mb-2 block bg-gray-200 px-2 py-1 rounded-full">{blog.tag}</span>
          </div>
          <span className="text-md text-gray-500 mb-2 block">{blog.date}</span>
        </div>
      </div>
    </Link>
  ))}
</div>

       
      </div>
    </section>
  );
}