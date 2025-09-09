import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";

const Testimonial = () => {
  const [testimonials, setTestimonial] = useState([]);

  useEffect(() => {
    fetch("/testemonial.json") // 
      .then((res) => res.json())
      .then((data) => setTestimonial(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);
  return (
    <div className="container mx-auto bg-gray-900 text-white py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Adventurers Unite</h2>
        <p className="text-gray-300">
          Explore inspiring stories from fellow adventurers and share your own
          journey.
        </p>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition"
          >
            {/* Stars */}
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <CiStar key={i} size={18} fill="currentColor" />
              ))}
            </div>

            {/* Text */}
            <p className="text-gray-200 mb-6">{testimonial.text}</p>

            {/* Profile */}
            <div className="flex items-center space-x-3">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
