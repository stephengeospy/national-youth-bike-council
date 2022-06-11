import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import useOnClickOutside from "../hooks/useOnClickOutside";

function Nav({ isMenuOpen }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const ref = useRef();
  useOnClickOutside(ref, () => setIsDropdownOpen(!isDropdownOpen));

  return (
    <nav className={`${isMenuOpen ? `flex` : `hidden`} flex-grow flex-col pb-4 md:flex md:flex-row md:justify-end md:pb-0`}>
      <Link
        className="dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 focus:shadow-outline mt-2 rounded-lg bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none md:mt-0"
        to="#"
      >
        Blog
      </Link>
      <Link
        className="dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 focus:shadow-outline mt-2 rounded-lg bg-transparent px-4 py-2 text-sm font-semibold hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none md:mt-0 md:ml-4"
        to="#"
      >
        Portfolio
      </Link>
      <Link
        className="dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 focus:shadow-outline mt-2 rounded-lg bg-transparent px-4 py-2 text-sm font-semibold hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none md:mt-0 md:ml-4"
        to="#"
      >
        About
      </Link>
      <Link
        className="dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 focus:shadow-outline mt-2 rounded-lg bg-transparent px-4 py-2 text-sm font-semibold hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none md:mt-0 md:ml-4"
        to="#"
      >
        Contact
      </Link>
      <div ref={ref} className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 focus:shadow-outline mt-2 flex w-full flex-row items-center rounded-lg bg-transparent px-4 py-2 text-left text-sm font-semibold hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none md:mt-0 md:ml-4 md:inline md:w-auto"
        >
          <span>Dropdown</span>
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            className={`mt-1 ml-1 inline h-4 w-4 transform transition-transform duration-200 md:-mt-1 ${isDropdownOpen ? `rotate-180` : `rotate-0`}`}
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        {isDropdownOpen && (
          <div
            // transition-enter="transition ease-out duration-100"
            // transition-enter-start="transform opacity-0 scale-95"
            // transition-enter-end="transform opacity-100 scale-100"
            // transition-leave="transition ease-in duration-75"
            // transition-leave-start="transform opacity-100 scale-100"
            // transition-leave-end="transform opacity-0 scale-95"
            className="absolute right-0 mt-2 w-full origin-top-right rounded-md shadow-lg transition md:w-48"
          >
            <div className="dark-mode:bg-gray-800 rounded-md bg-white px-2 py-2 shadow">
              <Link
                className="dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 focus:shadow-outline mt-2 block rounded-lg bg-transparent px-4 py-2 text-sm font-semibold hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none md:mt-0"
                to="#"
              >
                Link #1
              </Link>
              <Link
                className="dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 focus:shadow-outline mt-2 block rounded-lg bg-transparent px-4 py-2 text-sm font-semibold hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none md:mt-0"
                to="#"
              >
                Link #2
              </Link>
              <Link
                className="dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 focus:shadow-outline mt-2 block rounded-lg bg-transparent px-4 py-2 text-sm font-semibold hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none md:mt-0"
                to="#"
              >
                Link #3
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
