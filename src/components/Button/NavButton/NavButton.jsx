import clsx from "clsx";
import { Link } from "react-router-dom";
import "./NavButton.css";

const NavButton = ({ to, variant, children }) => {
  return (
    <Link to={to} className="container">
      <button className={clsx("button", variant)}>{children}</button>
    </Link>
  );
};

export default NavButton;
