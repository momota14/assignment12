"use client";
import logo from "@/assets/images/logo.webp";
import useWindowDimensions from "@/hook/getWindowDimensions";
import Menulist from "@/utils/manuList";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileDrawer from "./mobileDrawer";

function Navbar() {
  const { width } = useWindowDimensions();
  const [isSidebarOpen, setSidebarOpen] = useState(width > 768);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              className="h-8 w-8 mr-2"
              alt="Flowbite Logo"
              height={0}
              width={0}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Rising Star
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={toggleSidebar}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {Menulist.map((menu, idx) => {
                const { link, name } = menu || {};
                return (
                  <li key={idx}>
                    <Link
                      href={link}
                      className="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent hover:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                      aria-current="page"
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
      <MobileDrawer setSidebar={setSidebarOpen} isOpen={isSidebarOpen} />
    </>
  );
}

export default Navbar;
