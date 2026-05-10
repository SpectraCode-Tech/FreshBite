import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        {/* Large Brand Icon or 404 Tag */}
        <p className="text-6xl font-extrabold text-orange-600">404</p>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Even the Jollof is missing!
        </h1>

        <p className="mt-6 text-base leading-7 text-gray-600 max-w-md mx-auto">
          Sorry, we couldn’t find the page you’re looking for. It might have
          been cleared off the plate, just like a hot bowl of Amala.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-full bg-orange-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-all"
          >
            Back Home
          </Link>

          <Link
            to="/contact"
            className="text-sm font-semibold text-gray-900 hover:text-orange-600 transition-colors"
          >
            Contact Support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Optional: Add a subtle decorative element */}
        <div className="mt-16 opacity-10">
          <p className="text-sm italic">Fresh Bite — No lumps, just vibes.</p>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
