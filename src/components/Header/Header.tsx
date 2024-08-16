import { memo } from "react";
import { Link  } from "react-scroll"; 

export const Header = memo(function Header() {
  type NavList = { name: string; link: string };

  const navList: NavList[] = [
    {
      name: "Home",
      link: "hero",
    },
    {
      name: "About me",
      link: "aboutMe",
    },
    {
      name: "Timeline",
      link: "timeline",
    },
    {
      name: "Works",
      link: "projects",
    },
    {
      name: "Skill",
      link: "skills",
    },
    {
      name: "Contact",
      link: "contact",
    },
  ];

  return (
    <header className="fixed top-0 w-full z-10 p-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 shadow-xl">
      <nav className="flex justify-center items-center gap-6 text-white text-2xl font-bold">
        {navList.map((navItem) => (
          <Link
            key={navItem.name}
            to={navItem.link}
            smooth={true}
            duration={300}
            className="nav-link"
          >
            {navItem.name.charAt(0).toUpperCase() + navItem.name.slice(1)}
          </Link>
        ))}
      </nav>
    </header>
  );
});
