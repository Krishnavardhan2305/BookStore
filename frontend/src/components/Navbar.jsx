import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  // Sticky state
  const [sticky, setSticky] = useState(false);

  // Theme state (persisted)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  // theme default is no there so localStorage.getItem("theme") returns null so sets theme=light

  // Apply DaisyUI theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Sticky scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/books">Books</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/about">About</Link></li>
    </>
  );

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        sticky ? "bg-base-200 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="navbar">

          {/* LEFT */}
          <div className="navbar-start">

            {/* Mobile Menu */}
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                ☰
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
              >
                {navItems}
              </ul>
            </div>

            {/* Logo */}
            <Link to="/" className="text-2xl font-bold">
              Next-Page
            </Link>
          </div>

          {/* CENTER (Desktop Links) */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-lg">
              {navItems}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="navbar-end space-x-4">

            {/* Search (Desktop only) */}
            <div className="hidden md:block">
              <input
                type="search"
                placeholder="Search"
                className="input input-bordered w-40 lg:w-64"
              />
            </div>

            {/* Theme Toggle */}
            <input
              type="checkbox"
              className="toggle"
              checked={theme === "dark"}
              onChange={() =>
                setTheme(prev => prev === "dark" ? "light" : "dark")
              }
            />

            {/* Login Button */}
            <Link
              to="/login"
              className="btn btn-primary"
            >
              Login
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;


/*
First, useState reads the saved theme from localStorage and stores it in React state.
After rendering, useEffect applies that theme to the html tag and saves it in localStorage.
When the toggle button is clicked, setTheme updates the state, which causes a re-render.
Then useEffect runs again and updates both the html theme and localStorage.


#  One-Line Summary
> The theme is stored in React state, applied to the document using useEffect, 
and saved in localStorage so it persists across reloads.
 */