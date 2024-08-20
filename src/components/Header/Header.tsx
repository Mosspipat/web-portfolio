"use client";
import { MyContext } from "@/context";
import { useScreenSize } from "@/hooks";
import { navList } from "@/sections";

import { memo, useContext, useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-scroll";

export const Header = memo(function Header() {
  const { width } = useScreenSize();

  const headerElement = useRef<HTMLDivElement>(null);
  const [openNavMobile, setOpenNavMobile] = useState(false);
  const [isVisibleNavMobile, setIsVisibleNavMobile] = useState(false);

  const { setHeightHeader } = useContext(MyContext);

  useEffect(() => {
    if (width && width < 768) {
      setOpenNavMobile(false);
      setIsVisibleNavMobile(true);
    } else {
      setOpenNavMobile(true);
      setIsVisibleNavMobile(false);
    }
  }, [width]);

  useEffect(() => {
    setHeightHeader(headerElement?.current?.clientHeight || 0);
  });

  return (
    <div
      ref={headerElement}
      className="fixed top-0 w-screen z-10 p-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 shadow-xl rounded-none border-none "
    >
      <nav className="flex flex-col items-start w-screen md:flex-row md:justify-center md:items-center gap-6  text-white sm:text-sm md:text-base  lg:text-2xl font-bold text-start md:text-center">
        <RxHamburgerMenu
          className="md:hidden"
          onClick={() => {
            console.log("toggle");
            setOpenNavMobile((prev) => !prev);
          }}
          size={30}
        />

        {isVisibleNavMobile
          ? openNavMobile
            ? navList.map((navItemMobile) => (
                <Link
                  key={navItemMobile.name}
                  to={navItemMobile.link}
                  smooth={true}
                  duration={300}
                  className="nav-link"
                >
                  {navItemMobile.name.charAt(0).toUpperCase() +
                    navItemMobile.name.slice(1)}
                </Link>
              ))
            : null
          : navList.map((navItemDesktop) => (
              <Link
                key={navItemDesktop.name}
                to={navItemDesktop.link}
                smooth={true}
                duration={300}
                className="nav-link"
              >
                {navItemDesktop.name.charAt(0).toUpperCase() +
                  navItemDesktop.name.slice(1)}
              </Link>
            ))}
      </nav>
    </div>
  );
});
