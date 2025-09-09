import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <p className="uppercase tracking-widest text-sm text-gray-400">
          Get in Touch
        </p>
        <h2 className="text-3xl font-bold mt-2 mb-4">
          We'd Love to Hear from You!
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Whether you have questions, collaboration ideas, or just want to share
          your adventure stories, feel free to reach out to us.
        </p>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Email */}
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-3xl mb-3 text-white" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-400 text-sm">
              For inquiries or collaboration opportunities, please contact us at{" "}
              <span className="text-green-500">contact@trailblaze.com</span>.
            </p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center">
            <FaPhone className="text-3xl mb-3 text-white" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-400 text-sm">
              You can reach us by phone at{" "}
              <span className="font-bold text-white">+1 (555) 123-4567</span>.
              We’re here to help!
            </p>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-3xl mb-3 text-white" />
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-400 text-sm">
              If you're in the area, feel free to stop by! Our address is{" "}
              <span className="font-bold text-white">
                123 Adventure Lane, Denver, CO 80202, United States.
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
