import { useEffect, useLayoutEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
import LogoModelViewer from "./LogoModel";
import Sidebar from "./Sidebar";
import Socials from "./Socials";
import AmandaComponent from "./Amanda";

const PAGE_TITLES = {
  "/": "Firstklaz",
  "/about": "About | Firstklaz",
  "/tour": "Tour | Firstklaz",
  "/store": "Store | Firstklaz",
  "/music": "Music | Firstklaz",
  "/videos": "Videos | Firstklaz",
  "/shows": "Shows | Firstklaz",
  "/gallery": "Gallery | Firstklaz",
};

// Shell shared by every section page: header, mobile sidebar, social bar and Amanda.
export default function Layout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Pages not listed here (e.g. /shows/:slug) set their own title.
    if (PAGE_TITLES[pathname]) document.title = PAGE_TITLES[pathname];
  }, [pathname]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".amanda_container", { right: "-70px", duration: 1, delay: 3 });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div className="home">
        <header>
          <nav className="nav">
            <NavLink to="/about">about</NavLink>
            <NavLink to="/store">store</NavLink>
            <NavLink to="/music">music</NavLink>
          </nav>
          <div
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={sidebarOpen ? "hamburger hamburger_active" : "hamburger"}
          >
            <div className="hamburger1"></div>
            <div className="hamburger2"></div>
            <div className="hamburger3"></div>
          </div>
          <div className="header_title">
            <LogoModelViewer handleHome={() => navigate("/")} />
          </div>
          <nav className="nav">
            <NavLink to="/gallery">gallery</NavLink>
            <NavLink to="/videos">videos</NavLink>
            <NavLink to="/shows">shows</NavLink>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
        <Socials />
      </div>
      <Sidebar active={sidebarOpen} setActive={setSidebarOpen} />
      <AmandaComponent />
    </div>
  );
}
