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

'use client';  

import BlogDetail from './[id]/page';

export default function PropertyBlogWrapper() {
  // hardcoding an ID will break dynamic routing; this is not ideal
  return <BlogDetail params={{ id: '1' }} />;
}
