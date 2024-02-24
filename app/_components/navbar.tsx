import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import "@/app/_styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="app-horizontal-padding navbar">
        <span className="navbar-logo">Social Media</span>
        <span>
            <input type="text" name="searchbar" id="searchbar" placeholder="Search" />
        </span>
        <span className="navbar-link-group">
            <Link className="navbar-link" href="/home"><IoHome /></Link>
            <Link className="navbar-link" href="/profile"><FaUser /></Link>
        </span>
    </nav>
  );
};

export default Navbar;