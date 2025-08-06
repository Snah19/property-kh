"use client";

import Link from "next/link";
import Image from "next/image";
import SvgHamburgerMenu from "./svg-hamburger-menu";
import logo from "@/assets/images/logo-white.png";
import { usePathname } from "next/navigation";
import SvgBell from "./svg-bell";
import defaultProfile from "@/assets/images/default-profile.png";
import { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
// NextAuth
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const navlinks = [
  {
    id: "home-page",
    name: "Home",
    link: "/"
  },
  {
    id: "properties-page",
    name: "Properties",
    link: "/properties?page=1"
  },
  {
    id: "post-properties-page",
    name: "Post Property",
    link: "/post-property",
  }
];

const Header = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const pathname = usePathname();

  const [nextAuthProviders, setNextAuthProviders] = useState(null);
  const { data: session } = useSession();
  const userProfile = session?.user?.image;
  const userId = session?.user?.id;

  useEffect(() => {
    const setAuthProviders = async () => {
      const authProviders = await getProviders();
      setNextAuthProviders(authProviders);
    };

    setAuthProviders();
  }, []);

  const handleHamburgerMenu = () => {
    setIsHamburgerMenuOpen(curr => !curr);
  };

  const handleProfileMenu = () => {
    setIsProfileMenuOpen(curr => !curr);
  };

  const handleSignOut = () => {
    setIsProfileMenuOpen(curr => !curr);
    signOut();
  };

  return (
    <>
      <nav className={`mx-auto px-2 sm:px-6 lg:px-8 ${isHamburgerMenuOpen ? "border-b border-blue-500" : ""}`}>
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
              {navlinks.map(({id, name, link}) => {
                const basePath = link.split("?")[0];
                const isActive = basePath === "/" ? pathname === "/" : pathname.startsWith(basePath);       
                return (
                  <li key={id}>
                    <Link className={`${isActive ? "bg-gray-900 hover:bg-gray-900" : ""} rounded-md py-2 px-3 hover:bg-gray-700 text-white`} href={link} onClick={handleHamburgerMenu}>
                      {name}
                    </Link>
                  </li>
                )}
              )}
            </ul>
          </div>
          
          <div className="relative inline-flex gap-x-2">
            <Link className={`relative ${session ? "inline" : "hidden"} p-1 rounded-full bg-gray-800 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white`} href="/notifications">
              <SvgBell />
              <span className="absolute -top-3 -right-2 py-1 px-2 text-sm font-bold leading-none rounded-full bg-red-600 text-white">1</span>
            </Link>

            <button className={`${session ? "inline" : "hidden"} rounded-full focus:outline-none focus:ring-2 focus:ring-white`} onClick={handleProfileMenu}>
              <Image className="w-8 h-8 rounded-full" src={userProfile || defaultProfile} width={512} height={512} alt={`User Profile Picture`} />
            </button>
            <ul className={`z-10 ${isProfileMenuOpen ? "block" : "hidden"} absolute top-10 right-0 w-36 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-white`}>
              {
                [
                  {menu: "Your Profile", link: `/profile/${userId}`},
                  {menu: "Bookmarks", link: "/properties/bookmarks"},
                ].map(({menu, link}, i) => (
                  <li key={i}>
                    <Link className="block py-2 px-4 text-sm text-gray-700 hover:text-black" href={link} tabIndex={-1} onClick={handleProfileMenu}>
                      {menu}
                    </Link>
                  </li>
                ))
              }
              <li>
                <button className="block py-2 px-4 text-sm text-gray-700 hover:text-black" tabIndex={-1} onClick={handleSignOut}>
                  Sign Out
                </button>
              </li>
            </ul>
              
            {nextAuthProviders && Object.values(nextAuthProviders).map(({id}, i) => (
              <button className={`${session ? "hidden" : "flex"} items-center gap-x-2 py-2 px-3 rounded-md bg-gray-700 hover:bg-gray-900 text-white`} key={i} onClick={() => signIn(id)}>
                <FaGoogle />
                <span>Sign In</span>
              </button>
            ))}

          </div>
            
        </div>
      </nav>

      {/* Mobile Nav Links */}
      <nav className={`${isHamburgerMenuOpen ? "block" : "hidden"} md:hidden space-y-1 p-2`}>
        <ul className="flex flex-col gap-y-2">
          {navlinks.map(({id, name, link}) => {
            const basePath = link.split("?")[0];
            const isActive = basePath === "/" ? pathname === "/" : pathname.startsWith(basePath);            
            return (
            <li key={id}>
              <Link className={`${isActive ? "bg-gray-900 hover:bg-gray-900" : ""} block rounded-md py-2 px-3 hover:bg-gray-700 text-white`} href={link} onClick={handleHamburgerMenu}>
                {name}
              </Link>
            </li>
            )}
          )}
        </ul>
      </nav>
    </>
  );
};

export default Header;