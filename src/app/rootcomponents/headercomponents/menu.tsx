"use client";

import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Menu() {
  return (
    <div className="lg:flex space-y-3 lg:space-y-0 lg:space-x-8">
      <a href="#" className="block text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
        Home
      </a>
      <a href="#" className="block text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
        About
      </a>
      <a href="#" className="block text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
        Services
      </a>
      <a href="#" className="block text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
        Contact
      </a>
    </div>
  );
}
