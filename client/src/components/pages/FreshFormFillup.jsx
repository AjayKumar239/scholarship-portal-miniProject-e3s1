import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const FreshFormFillup = () => {
  const location = useLocation();

  return (
    <>
      {/* Navigation Bar */}
      <nav className="flex justify-center gap-6 p-4 bg-gray-100 border-b border-gray-300">
        <Link
          to="/saf"
          className={`font-bold hover:text-blue-700 ${
            location.pathname === "/saf" ? "text-blue-700" : "text-blue-500"
          }`}
        >
          Step 1
        </Link>
        <Link
          to="step2"
          className={`font-bold hover:text-blue-700 ${
            location.pathname === "/saf/step2" ? "text-blue-700" : "text-blue-500"
          }`}
        >
          Step 2
        </Link>
        <Link
          to="step3"
          className={`font-bold hover:text-blue-700 ${
            location.pathname === "/saf/step3" ? "text-blue-700" : "text-blue-500"
          }`}
        >
          Step 3
        </Link>
      </nav>

      {/* This will render the matched child route component */}
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
};

export default FreshFormFillup;
