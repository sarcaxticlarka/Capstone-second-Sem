// // // import PropertyBlog from './[id]/page';
// // import PropertyBlog from './[id]/page';

// // export default function PropertyBlog() {
// //   return <PropertyBlog />;
// // }


// import PropertyBlog from './[id]/page';

// export default function PropertyBlogWrapper() {
//   return <PropertyBlog />;
// }


// app/propertyBlog/page.js

// 'use client';  

// import BlogDetail from './[id]/page';

// export default function PropertyBlogWrapper() {
//    return <BlogDetail params={{ id: '1' }} />;
// }

// 'use client';
// import Link from 'next/link';
// import Navbar from '@/components/navbar';
// import blogData from '../data/blogContent';

// export default function BlogList() {
//   return (
//     <div>
//       <Navbar />
//       <div className="p-10 max-w-6xl mx-auto pt-32">
//         <h1 className="text-4xl font-bold mb-10">Latest Blog Posts</h1>
//         <div className="grid md:grid-cols-2 gap-10">
//           {blogData.map((blog) => (
//             <Link key={blog.id} href={`/blog/${blog.id}`}>
//               <div className="border rounded-xl p-4 hover:shadow-lg transition cursor-pointer">
//                 <img src={blog.image} alt={blog.title} className="rounded-md w-full h-48 object-cover mb-4" />
//                 <h2 className="text-xl font-semibold mb-1">{blog.title}</h2>
//                 <div className="flex justify-between text-sm text-gray-500 mb-2">
//                   <span>{blog.date}</span>
//                   <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs">{blog.tag}</span>
//                 </div>
//                 <p className="text-gray-600 line-clamp-3">{blog.content}</p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import blogData from '../data/blogContent';

export default function BlogList() {
  return (
    <div>
      <Navbar />
      <div className="p-10 max-w-6xl mx-auto pt-32">
        <h1 className="text-4xl font-bold mb-10">Latest Blog Posts</h1>
        <div className="grid md:grid-cols-2 gap-10">
          {blogData.map((blog) => (
            <Link key={blog.id} href={`/propertyBlog/${blog.id}`}>
              <div className="border rounded-xl p-4 hover:shadow-lg transition cursor-pointer">
                <img src={blog.image} alt={blog.title} className="rounded-md w-full h-48 object-cover mb-4" />
                <h2 className="text-xl font-semibold mb-1">{blog.title}</h2>
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>{blog.date}</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs">{blog.tag}</span>
                </div>
                <p className="text-gray-600 line-clamp-3">{blog.content}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
