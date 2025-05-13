import { Link, NavLink } from "react-router-dom";
import { NavLinks } from "@/data/NavLinks";

const NavList = ({ mobile = false, closeMenu }: { mobile?: boolean; closeMenu?: () => void }) => {
  const classes = `text-black font-semibold uppercase text-base`;
  const active = `text-primary-600 font-semibold uppercase text-base underline`;

  const handleClick = () => {
    if (closeMenu) closeMenu();
  };

  return (
    <nav>
      <ul className={`flex items-center ${mobile ? 'flex-col p-4 gap-2' : 'flex-row gap-3'}`}>
        {NavLinks.map((link, index) => (
          <li key={index}>
            <NavLink
              className={({ isActive }) => (isActive ? active : classes)}
              to={link.url}
              onClick={handleClick}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
        <li className="md:ms-5">
          <Link
            className="px-2 py-1 rounded-md text-white text-base font-semibold transition-all duration-200 bg-red-500 hover:bg-red-600 inline-block"
            to="/"
            onClick={handleClick}
          >
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};


export default NavList