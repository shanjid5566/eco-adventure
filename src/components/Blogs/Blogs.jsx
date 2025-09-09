import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/fakeData.json") // 
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);
  return (
    <div className="container mx-auto my-18">
      <h2 className="text-3xl font-bold text-center mb-8">
        Adventure Experiences
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 p-8 lg:p-0">
        {
            blogs.map(blog=> <Blog key={blog.id} blog={blog}></Blog>)
        }
      </div>
    </div>
  );
};

export default Blogs;
