"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="/jordan-logo.png"
              alt="Jordan Logo"
              width={24}
              height={24}
              className="h-6"
            />
          </a>
          <a href="#" className="flex items-center">
            <Image
              src="/nike-logo.png"
              alt="Nike Logo"
              width={24}
              height={24}
              className="h-6"
            />
          </a>
        </div>

        {/* Center Links */}
        <ul className="flex space-x-6 text-sm font-medium">
          <li>
            <a href="#" className="text-gray-800 hover:text-gray-500">
              New & Featured
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-gray-500">
              Men
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-gray-500">
              Women
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-gray-500">
              Kids
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-gray-500">
              Sale
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-gray-500">
              SNKRS
            </a>
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          {/* Links */}
          <a href="#" className="text-gray-800 hover:text-gray-500 text-sm">
            Find a Store
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-500 text-sm">
            Help
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-500 text-sm">
            Join Us
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-500 text-sm">
            Sign In
          </a>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button aria-label="Search" className="text-gray-800 hover:text-gray-500">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
            <button aria-label="Favorites" className="text-gray-800 hover:text-gray-500">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 18.364L12 22l6.879-3.636A8 8 0 005.121 5.636L12 2l6.879 3.636a8 8 0 010 14.728L12 22l-6.879-3.636a8 8 0 010-14.728z"
                ></path>
              </svg>
            </button>
            <button aria-label="Cart" className="text-gray-800 hover:text-gray-500">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l1.1-5H6.1L7 13zm-4 6h18M6 19a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
