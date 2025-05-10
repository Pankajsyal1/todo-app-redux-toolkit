import { NavLink } from "react-router-dom";
import { NavLinks } from "@/data/NavLinks";

const NavList = ({ mobile=false }: { mobile?: boolean }) => {
  const classes = `text-black font-semibold uppercase text-base`;
  const active = `text-primary-600 font-semibold uppercase  text-base underline`;

  return (
    <nav>
      <ul className={`flex  ${mobile ? ' flex-col p-4 gap-2' : 'flex-row gap-3'}`}>
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
