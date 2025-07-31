"use client";

import Link from "next/link";
import Image from "next/image";
import SvgHamburgerMenu from "./svg-hamburger-menu";
import logo from "@/assets/images/logo-white.png";
import { usePathname } from "next/navigation";
import SvgBell from "./svg-bell";
import defaultProfile from "@/assets/images/default-profile.png";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";


const navlinks = [
  {
    id: "home-page",
    name: "Home",
    link: "/"
  },
  {
    id: "properties-page",
    name: "Properties",
    link: "/properties"
  },
  {
    id: "post-properties-page",
    name: "Post Property",
    link: "/properties/post",
  }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(true);
  const pathname = usePathname();

  const handleHamburgerMenu = () => {
    setIsOpen(curr => !curr);
  };

  return (
    <>
      <nav className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          <button className="inline-flex md:hidden justify-center items-center p-2 rounded-md hover:bg-gray-700 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={handleHamburgerMenu}>
            <SvgHamburgerMenu />
          </button>

          <div className="flex items-center gap-x-6">
            <Link className="absolute right-[50%] translate-x-[50%] md:static md:right-0 md:translate-x-0 flex items-center gap-x-2" href={`/`}>
              <Image className="w-auto h-10" src={logo} width={128} height={128} alt="Property KH Logo" priority={true} />
              <p className="hidden xsm:block text-2xl font-bold text-white">Property KH</p>
            </Link>

            <ul className="hidden md:flex gap-x-2">
              {navlinks.map(({id, name, link}) => (
                <li key={id}>
                  <Link className={`${pathname === link ? "bg-gray-900 hover:bg-gray-900" : null} rounded-md py-2 px-3 hover:bg-gray-700 text-white`} href={link}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="inline-flex gap-x-2">
            <Link className={`relative ${isSignedIn ? "inline" : "hidden"} p-1 rounded-full bg-gray-800 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800`} href="/notifications">
              <SvgBell />
              <span className="absolute -top-3 -right-2 py-1 px-2 text-sm font-bold leading-none rounded-full bg-red-600 text-white">1</span>
            </Link>
            <Link className={`${isSignedIn ? "inline" : "hidden"}`} href="/profile">
              <Image className="w-8 h-8 rounded-full" src={defaultProfile} width={512} height={512} alt={`User Profile Picture`} />
            </Link>
            <button className={`${isSignedIn ? "hidden" : "flex"} items-center gap-x-2 py-2 px-3 rounded-md bg-gray-700 hover:bg-gray-900 text-white`}>
              <FaGoogle />
              <span>Sign In</span>
            </button>
          </div>
            
        </div>
      </nav>

      <nav className={`${isOpen ? "block" : "hidden"} md:hidden space-y-1 p-2`}>
        <ul className="flex flex-col gap-y-2">
          {navlinks.map(({id, name, link}) => (
            <li key={id}>
              <Link className={`${pathname === link ? "bg-gray-900 hover:bg-gray-900" : null} block rounded-md py-2 px-3 hover:bg-gray-700 text-white`} href={link}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;