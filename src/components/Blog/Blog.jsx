import React from "react";
import { Link } from "react-router";

const Blog = ({ blog }) => {
  return (
    <div className="flex flex-col  bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {/* Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-80 object-cover" // Fixed height for images
      />

      {/* Content */}
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>

        {/* Eco-Friendly Features */}
        <ul className="text-sm text-gray-600 mb-4 list-disc list-inside space-y-1">
          {blog.ecoFriendlyFeatures.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>

        {/* Button */}
        <div className="mt-auto">
          <button  className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition">
            <Link to={`/adventuredetails/:${blog.id}`}>Explore More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
