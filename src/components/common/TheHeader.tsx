import { Link } from "react-router-dom";
import NavList from "./NavList";

const TheHeader = () => {
  return (
    <header className="py-3 bg-white shadow">
      <div className="container flex justify-between items-center">
        <Link to="/" className="font-extrabold text-4xl">REDUX</Link>
      <NavList />
      </div>
    </header>
  );
};

export default TheHeader;
