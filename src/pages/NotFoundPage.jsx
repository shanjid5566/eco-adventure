import { useNavigate } from "react-router";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-9xl font-extrabold text-gray-300">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mt-4">
        Page Not Found
      </h2>
      <p className="text-gray-500 mt-2 text-center max-w-md">
        Sorry, the page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Go Back Home
      </button>
    </div>
  );
}
