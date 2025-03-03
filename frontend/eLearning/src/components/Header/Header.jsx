import React, { useState, useEffect } from "react";
// import './Header.css';
import { NavLink } from 'react-router-dom';
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import {motion} from 'framer-motion'
function Header({ isAuth }) {
  const [Isopen, setIsopen] = useState(false);

  const toggleMenu = () => {
    setIsopen(!Isopen);
    document.body.style.overflow = Isopen ? "auto" : "hidden"; // Disable scrolling when navbar is open
  };

  return (
    <div className="w-full flex justify-between items-center px-10 bg-black py-6 bg-gradient-to- from-teal-900/40  to-black text-white ">
      <div className="right flex">
        <h1 className="text-4xl font-semibold ">
          Ease<span className="text-teal-400">Learn</span>
        </h1>
      </div>
      <div className="left hidden sm:block text-lg tracking-tighter">
        <div className="links flex gap-6">
          <NavLink
            className="text-xl  font-medium transition-colors hover:underline duration-200 hover:text-teal-400"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="text-xl font-medium transition-colors hover:underline duration-200 hover:text-teal-400"
            to="/courses"
          >
            Courses
          </NavLink>
          <NavLink
            className="text-xl font-medium transition-colors hover:underline duration-200 hover:text-teal-400"
            to="/about"
          >
            About
          </NavLink>
          {isAuth ? (
            <NavLink
              className="text-xl font-medium transition-colors hover:underline duration-200 hover:text-teal-400"
              to="/account"
            >
              Account
            </NavLink>
          ) : (
            <NavLink
              className="text-xl font-medium transition-colors hover:underline duration-200 hover:text-teal-400"
              to="/login"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>

      {/* Mobile Navbar */}
      {Isopen ? (
        <>
          <RiCloseFill
            onClick={toggleMenu}
            className="text-3xl text-white cursor-pointer z-50 fixed top-6 right-6"
          />
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 h-screen w-[100vw] sm:w-[50vw] bg-black opacity-80  bg-gradient-to- from-teal-900/40  to-black z-40 flex flex-col justify-center items-start p-8"
          >
            <h2 className="text-3xl text-white font-semibold mb-8">
              Ease<span className="text-teal-400">Learn</span>
            </h2>
            <NavLink
              className="text-2xl font-medium text-white mb-6 transition-colors duration-200 hover:text-teal-400"
              to="/"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              className="text-2xl font-medium text-white mb-6 transition-colors duration-200 hover:text-teal-400"
              to="/courses"
              onClick={toggleMenu}
            >
              Courses
            </NavLink>
            <NavLink
              className="text-2xl font-medium text-white mb-6 transition-colors duration-200 hover:text-teal-400"
              to="/about"
              onClick={toggleMenu}
            >
              About
            </NavLink>
            {isAuth ? (
              <NavLink
                className="text-2xl font-medium text-white mb-6 transition-colors duration-200 hover:text-teal-400"
                to="/account"
                onClick={toggleMenu}
              >
                Account
              </NavLink>
            ) : (
              <NavLink
                className="text-2xl font-medium text-white mb-6 transition-colors duration-200 hover:text-teal-400"
                to="/login"
                onClick={toggleMenu}
              >
                Login
              </NavLink>
            )}
          </motion.div>
        </>
      ) : (
        <RiMenu3Fill
          onClick={toggleMenu}
          className="text-3xl text-white sm:hidden cursor-pointer z-50"
        />
      )}
    </div>
  );
}

export default Header;









// import React, { useState } from "react";
// import { NavLink } from 'react-router-dom';
// import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
// import { motion } from 'framer-motion';

// function Header({ isAuth }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//     document.body.style.overflow = isOpen ? "auto" : "hidden"; // Prevent scrolling when menu is open
//   };

//   return (
//     <div className="w-full flex justify-between items-center px-10 py-2 backdrop-blur-md bg-gradient-to-r from-black  to-black text-white">
//       <div className="w-full flex justify-between items-center px-10 py-6">
//         <div className="right flex">
//           <h1 className="text-4xl font-semibold">
//             Ease<span className="text-teal-600">Learn</span>
//           </h1>
//         </div>
//         <div className="left hidden sm:block text-lg tracking-tighter">
//           <div className="links flex gap-6">
//             <NavLink to="/" className="text-xl font-light hover:underline hover:text-blue-200">Home</NavLink>
//             <NavLink to="/courses" className="text-xl font-light hover:underline hover:text-blue-200">Courses</NavLink>
//             <NavLink to="/about" className="text-xl font-light hover:underline hover:text-blue-200">About</NavLink>
//             {isAuth ? 
//               <NavLink to="/account" className="text-xl font-light hover:underline hover:text-blue-200">Account</NavLink> :
//               <NavLink to="/login" className="text-xl font-light hover:underline hover:text-blue-200">Login</NavLink>
//             }
//           </div>
//         </div>
        
//         {/* Mobile Navbar */}
//         {isOpen ? (
//           <>
//             <RiCloseFill onClick={toggleMenu} className="text-3xl text-white cursor-pointer fixed top-6 right-6 z-50" />
//             <motion.div
//   initial={{ x: "-100%" }}
//   animate={{ x: 0 }}
//   exit={{ x: "-100%" }}
//   transition={{ duration: 0.4, ease: "easeInOut" }}
//   className="fixed top-0 left-0 h-screen w-full bg-black bg-opacity-90 z-[999] flex flex-col justify-center items-start p-8"
// >


//               <h2 className="text-3xl text-white font-semibold mb-8">Ease<span className="text-teal-600">Learn</span></h2>
//               <NavLink to="/" className="text-2xl mb-6 text-white transition duration-200 hover:text-teal-900" onClick={toggleMenu}>Home</NavLink>
//               <NavLink to="/courses" className="text-2xl mb-6 text-white transition duration-200 hover:teal-pink-900" onClick={toggleMenu}>Courses</NavLink>
//               <NavLink to="/about" className="text-2xl mb-6 text-white transition duration-200 hover:text-teal-900" onClick={toggleMenu}>About</NavLink>
//               {isAuth ? 
//                 <NavLink to="/account" className="text-2xl mb-6 text-white transition duration-200 hover:text-teal-900" onClick={toggleMenu}>Account</NavLink> :
//                 <NavLink to="/login" className="text-2xl mb-6 text-white transition duration-200 hover:text-teal-900" onClick={toggleMenu}>Login</NavLink>
//               }
//             </motion.div>
//           </>
//         ) : (
//           <RiMenu3Fill onClick={toggleMenu} className="text-3xl text-white sm:hidden cursor-pointer z-50" />
//         )}
//       </div>
//     </div>
//   );
// }

// export default Header;
