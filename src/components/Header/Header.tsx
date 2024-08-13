import { memo } from "react";
import { Link } from "react-scroll"; // or 'react-router-dom' based on your setup

export const Header = memo(function Header() {
  const navList = ["hero", "projects", "skills", "contact"];

  return (
    <header className="fixed top-0 w-full z-10 p-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 shadow-xl">
      <nav className="flex justify-center items-center gap-6 text-white text-2xl font-bold">
        {navList.map((navItem) => (
          <Link
            key={navItem}
            to={navItem}
            smooth={true}
            duration={300}
            className="nav-link"
          >
            {navItem}
          </Link>
        ))}
      </nav>
    </header>
  );
});
