import { React, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="dark-mode:text-gray-200 dark-mode:bg-gray-800 w-full bg-white text-gray-700">
      <div className="mx-auto flex max-w-screen-xl flex-col px-4 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between p-4">
          <Link
            to="#"
            className="dark-mode:text-white focus:shadow-outline rounded-lg text-lg font-semibold uppercase tracking-widest text-gray-900 focus:outline-none"
          >
            National Youth Bike Council
          </Link>
          <button className="focus:shadow-outline rounded-lg focus:outline-none md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
              {!isMenuOpen && (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              )}
              {isMenuOpen && (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              )}
            </svg>
          </button>
        </div>
        <Nav isMenuOpen={isMenuOpen}></Nav>
      </div>
    </div>
  );
}

export default Header;
