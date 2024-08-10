"use client";

import { useEffect } from "react";
import "./Header.css";

export const Header = () => {
  const navList = ["hero", "projects", "skills", "contact"];

  type NavRender = {
    href: string;
    className: string;
    indexKey: number;
  };

  const navRender = ({ href, className, indexKey }: NavRender) => (
    <a href={`#${href}`} className={className} key={indexKey}>
      {href}
    </a>
  );

  return (
    <header
      className={`fixed top-0 w-full z-10 p-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 shadow-xl`}
    >
      <nav className="flex justify-center items-center gap-6 text-white text-2xl font-bold">
        {navList.map((nav, indexKey) =>
          navRender({ href: nav, className: `nav-link`, indexKey })
        )}
      </nav>
    </header>
  );
};
