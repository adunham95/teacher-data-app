import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const links = [
  { title: 'Dashboard', path: '/' },
  { title: 'Students', path: '/students' },
];

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <span className="sr-only">Open main menu</span>
              {/* <!--
            Icon when menu is closed.
            Heroicon name: outline/menu
            Menu open: "hidden", Menu closed: "block"
          --> */}
              <svg
                className={`${!mobileMenu ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* <!--
            Icon when menu is open.
            Heroicon name: outline/x
            Menu open: "block", Menu closed: "hidden"
          --> */}
              <svg
                className={`${mobileMenu ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="block text-white ml-2 w-auto text-2xl ">
                Data App
              </h1>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {links.map((item) => (
                  <a
                    key={item.title}
                    href={item.path}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {
          mobileMenu

      && (
      <div
        className="sm:hidden"
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {
            links.map((l) => (
              <Link
                id={l.title}
                to={l.path}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {l.title}
              </Link>
            ))
          }
        </div>
      </div>
      )
}
    </nav>

  );
};

export default Header;
