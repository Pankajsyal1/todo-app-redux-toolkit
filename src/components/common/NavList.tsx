import { NavLink } from "react-router-dom";
import { NavLinks } from "@/data/NavLinks";

const NavList = () => {
  const classes = `text-black font-semibold uppercase text-lg`;
  const active = `text-primary-600 font-semibold uppercase  text-lg underline`; 

  return (
    <nav>
      <ul className="flex gap-5">
        {NavLinks.map((link, index) => (
          <li key={index}>
            <NavLink
              className={({ isActive }) => (isActive ? `${active}` : classes)}
              to={link.url}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
