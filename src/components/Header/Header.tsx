import { MyContext } from "@/context";
import { useWindowSize } from "@/hooks";
import { navList } from "@/sections";

import { memo, useContext, useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-scroll";

export const Header = memo(function Header() {
  const headerElement = useRef<HTMLDivElement>(null);
  const [openNav, setOpenNav] = useState(true);
  const { width } = useWindowSize();

  const { setHeightHeader } = useContext(MyContext);

  useEffect(() => {
    if (width && width < 768) {
      setOpenNav(false);
    } else {
      setOpenNav(true);
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
          onClick={() => setOpenNav((prev) => !prev)}
          size={30}
        />

        {openNav
          ? navList.map((navItem) => (
              <Link
                key={navItem.name}
                to={navItem.link}
                smooth={true}
                duration={300}
                className="nav-link"
              >
                {navItem.name.charAt(0).toUpperCase() + navItem.name.slice(1)}
              </Link>
            ))
          : null}
      </nav>
    </div>
  );
});
