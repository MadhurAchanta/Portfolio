import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeProvider";

const MobileNavLink = ({ children, ...props }) => {
  return (
    <Link
      className="block text-base leading-7 tracking-tight text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
      {...props}
    >
      {children}
    </Link>
  );
};

const NavLink = ({ children, ...props }) => {
  const location = useLocation();
  const isActive = location.pathname === props.to;
  return (
    <Link
      className={`text-sm leading-6 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white ${
        isActive ? 'border-b-2 border-zinc-900 dark:border-zinc-100' : ''
      }`}
      {...props}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 ${
        isScrolled
          ? "bg-white/75 dark:bg-black/75"
          : "bg-white/0 dark:bg-black/0"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
        <div className="relative flex items-center justify-between py-4">
          <div className="flex lg:flex-1">
            <Link
              to="/"
              className="-m-1.5 p-1.5 text-xl font-semibold tracking-tight"
            >
              Madhur Achanta
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-3 text-gray-700 dark:text-gray-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              onClick={() => setMobileNavOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-8">
            {links.map((link) => (
              <NavLink key={link.name} to={link.path}>
                {link.name}
              </NavLink>
            ))}
          </div>          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6 items-center">
            <ThemeToggle />
            <NavLink to="/resume" className="font-semibold hover:underline">
              Resume
            </NavLink>
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileNavOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="fixed inset-x-4 top-8 z-50 origin-top scale-100 rounded-3xl bg-white dark:bg-black p-8 ring-1 ring-zinc-900/5"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <div className="flex flex-row-reverse items-center justify-between">
                <button
                  type="button"
                  className="-m-1 p-1"
                  onClick={() => setMobileNavOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6 text-zinc-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  Navigation
                </h2>
              </div>
              <nav className="mt-6">
                <ul className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  {links.map((link) => (
                    <li key={link.name}>
                      <MobileNavLink
                        to={link.path}
                        onClick={() => setMobileNavOpen(false)}
                      >
                        {link.name}
                      </MobileNavLink>
                    </li>
                  ))}                  <li className="mt-4 pt-4">
                    <MobileNavLink
                      to="/resume"
                      onClick={() => setMobileNavOpen(false)}
                      className="hover:underline"
                    >
                      Resume
                    </MobileNavLink>
                  </li>
                </ul>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
