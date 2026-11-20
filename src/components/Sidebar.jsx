import { NavLink } from "react-router-dom";

const LINKS = ["tour", "about", "store", "music", "videos", "shows", "gallery"];

export default function Sidebar({ active, setActive }) {
  return (
    <div className={active ? "sidebar" : "sidebar none"}>
      <div
        onClick={() => setActive(!active)}
        className={active ? "hamburger hamburger_active" : "hamburger"}
      >
        <div className="hamburger1"></div>
        <div className="hamburger2"></div>
        <div className="hamburger3"></div>
      </div>
      <nav className="sidebar_inner">
        {LINKS.map((link) => (
          <NavLink key={link} to={`/${link}`} onClick={() => setActive(false)}>
            {link}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
