// // app/blog/[id]/page.js
// import blogData from "../../data/blogContent";

// export default function BlogDetail({ params }) {
//   const { id } = params;  

//   const blog = blogData.find((item) => item.id === parseInt(id));

//   if (!blog) return <p className="p-10">Loading...</p>;

//   return (
//     <div className="p-10 max-w-3xl mx-auto">
//       <img src={blog.image} alt={blog.title} className="w-full rounded-xl mb-6" />
//       <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
//       <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
//         <span>{blog.date}</span>
//         <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
//           {blog.tag}
//         </span>
//       </div>
//       <p className="text-gray-700 leading-relaxed">{blog.content}</p>
//     </div>
//   );
// }


// app/propertyBlog/[id]/page.js

// import Navbar from "@/components/navbar";
// import blogData from "../../data/blogContent";

// export default function BlogDetail({ params }) {
//   const { id } = params;
//   const blog = blogData.find((item) => item.id === parseInt(id));

//   if (!blog) return <p className="p-10">Loading...</p>;

//   return (
//     <div>
//       <Navbar />
//       <div className="p-10 max-w-3xl mx-auto pt-32">

//         <img src={blog.image} alt={blog.title} className="w-full rounded-xl mb-6" />
//         <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
//         <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
//           <span>{blog.date}</span>
//           <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
//             {blog.tag}
//           </span>
//         </div>
//         <p className="text-gray-700 leading-relaxed">{blog.content}</p>
//       </div>
//     </div>

//   );
// }

// import Navbar from "@/components/navbar";
// import blogData from "../../data/blogContent";

// export default function BlogDetail({ params }) {
//   const { id } = params;
//   const blog = blogData.find((item) => item.id === parseInt(id));

//   if (!blog) return <p className="p-10">Blog not found.</p>;

//   return (
//     <div>
//       <Navbar />
//       <div className="p-10 max-w-3xl mx-auto pt-32">
//         <img src={blog.image} alt={blog.title} className="w-full rounded-xl mb-6" />
//         <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
//         <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
//           <span>{blog.date}</span>
//           <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
//             {blog.tag}
//           </span>
//         </div>
//         <p className="text-gray-700 leading-relaxed">{blog.content}</p>
//       </div>
//     </div>
//   );
// }

// import Navbar from "@/components/navbar";
// import blogData from "../../data/blogContent";

// export default function BlogDetail({ params }) {
//   const { id } = params;
//   const blog = blogData.find((item) => item.id === parseInt(id));

//   if (!blog) return <p className="p-10">Blog not found.</p>;

//   return (
//     <div>
//       <Navbar />
//       <div className="p-10 max-w-3xl mx-auto pt-32">
//         <img src={blog.image} alt={blog.title} className="w-full rounded-xl mb-6" />
        
//         <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
//         <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
//           <span>{blog.date}</span>
//           <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
//             {blog.tag}
//           </span>
//         </div>
//         <p className="text-gray-600 mb-6">{blog.content}</p>

      
//         <h2 className="text-2xl font-semibold mt-8 mb-2">Full Article</h2>
//         <p className="text-gray-700 leading-relaxed">{blog.description}</p>
//       </div>
//     </div>
//   );
// }

import Navbar from "@/components/navbar";
import blogData from "../../data/blogContent";

export default function BlogDetail({ params }) {
  const { id } = params;
  const blog = blogData.find((item) => item.id === parseInt(id));

  if (!blog) return <p className="p-10">Blog not found.</p>;

  return (
    <div>
      <Navbar />
      <div className="p-10 max-w-3xl mx-auto pt-32">
        <img src={blog.image} alt={blog.title} className="w-full rounded-xl mb-6" />
        
        <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span>{blog.date}</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
            {blog.tag}
          </span>
        </div>
        <p className="text-gray-600 mb-6">{blog.content}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Full Article</h2>
        <p className="text-gray-700 leading-relaxed">{blog.description}</p>
      </div>
    </div>
  );
}
