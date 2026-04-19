import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import { RiMenu3Fill, RiCloseFill, RiMoonFill, RiSunFill } from "react-icons/ri";
import { motion, AnimatePresence } from 'framer-motion';

function Header({ isAuth }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check initial preferences
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "auto";
  };

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  }, [location.pathname]);

  const navLinks = [
    { name: "Explore", path: "/courses" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b ${scrolled ? 'bg-background/80 backdrop-blur-lg border-border py-3 shadow-md' : 'bg-transparent border-transparent py-5'}`}>
      <div className="container mx-auto flex items-center justify-between px-6 md:px-10">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center transform transition-transform group-hover:scale-105 shadow-md">
            <span className="text-primary-foreground font-light text-xl leading-none">E</span>
          </div>
          <span className="text-2xl font-light tracking-tight text-foreground transition-colors group-hover:text-primary">
            EaseLearn
          </span>
        </NavLink>

        <div className="flex items-center gap-2 sm:gap-6">
          {/* Desktop Nav */}
          <nav className="hidden sm:flex items-center gap-8 mr-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-light transition-all hover:text-primary relative group ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`
                }
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </nav>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className="p-2 mr-1 sm:mr-0 text-muted-foreground hover:text-primary transition-colors focus:outline-none rounded-full hover:bg-muted"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <RiSunFill className="h-5 w-5" /> : <RiMoonFill className="h-5 w-5" />}
          </button>

          {/* User / Login Actions Desktop */}
          <div className="hidden sm:flex items-center gap-3">
             {isAuth ? (
               <NavLink to="/account" className="px-5 py-2 text-sm font-light bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-all shadow-sm">
                 Dashboard
               </NavLink>
             ) : (
               <>
                 <NavLink to="/login" className="px-5 py-2 text-sm font-light text-foreground hover:text-primary transition-all">
                   Log in
                 </NavLink>
                 <NavLink to="/register" className="px-5 py-2 text-sm font-light bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                   Sign up
                 </NavLink>
               </>
             )}
          </div>

          {/* Mobile Toggle */}
          <button
            className="sm:hidden p-2 text-foreground hover:text-primary transition-colors focus:outline-none bg-muted/50 rounded-lg"
            onClick={toggleMenu}
          >
            {isOpen ? <RiCloseFill className="h-6 w-6" /> : <RiMenu3Fill className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100vh", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl sm:hidden border-b border-border overflow-hidden"
            >
              <div className="flex flex-col px-6 py-8 space-y-6">
                {navLinks.map((link, i) => (
                  <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    key={link.name}
                  >
                    <NavLink
                      to={link.path}
                      onClick={toggleMenu}
                      className={({ isActive }) =>
                        `block text-2xl font-light transition-colors hover:text-primary ${
                          isActive ? "text-primary" : "text-muted-foreground"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
                
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="pt-6 border-t border-border flex flex-col gap-4"
                >
                  {isAuth ? (
                    <NavLink onClick={toggleMenu} to="/account" className="w-full text-center px-6 py-4 text-base font-light bg-primary text-primary-foreground rounded-xl shadow-md">
                      Go to Dashboard
                    </NavLink>
                  ) : (
                    <>
                      <NavLink onClick={toggleMenu} to="/login" className="w-full text-center px-6 py-4 text-base font-light bg-secondary text-secondary-foreground rounded-xl">
                        Log in
                      </NavLink>
                      <NavLink onClick={toggleMenu} to="/register" className="w-full text-center px-6 py-4 text-base font-light bg-primary text-primary-foreground rounded-xl shadow-md">
                        Let's Get Started
                      </NavLink>
                    </>
                  )}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Header;
