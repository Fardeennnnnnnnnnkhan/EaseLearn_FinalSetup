import React, { useEffect, useState } from "react";
import "./Home.css";
import { motion } from "framer-motion";
import AvailableCourses from "../AvailableCourses.jsx";
import Instructors from "../Instructors.jsx";
import FAQ from "../FAQ.jsx";

function Home() {
  const stats = [
    { label: "Students taught", value: 25000 },
    { label: "Instructors", value: 20 },
    { label: "YouTube Subs.", value: 481000 },
  ];

  return (
    <div className="w-full min-h-screen text-white flex flex-col items-center ">
<div className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 z-10">

        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/40 to-black blur-2xl"></div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight">
            We only <span className="text-teal-400">Teach</span> what we are really <br />
            <span className="italic">really</span> <span className="italic">good</span> at.
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 text-sm md:text-base text-gray-400"
          >
            Get ready to <span className="text-teal-400">accelerate your career</span> with customized courses and leave your mark in the tech industry.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-8 bg-teal-400 text-black font-bold py-3 px-6 rounded-full shadow-md hover:bg-teal-300 transition"
          >
            Check Courses - Make an Impact
          </motion.button>
        </motion.div>

        {/* Stats Section */}
        <div className="relative z-10 mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <AnimatedCounter endValue={stat.value} />
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Available Courses Section */}
      <div className="w-full bg-black  ">
        <AvailableCourses />
      </div>

      {/* Instructors Section */}
      <div className="w-full bg-black ">
        <Instructors />
      </div>

      {/* FAQ Section */}
      <div className="w-full bg-black ">
        <FAQ />
      </div>
    </div>
  );
}

// Counter Animation Component
const AnimatedCounter = ({ endValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const steps = 100; // Number of increments
    const increment = endValue / steps;
    const intervalTime = duration / steps;

    const interval = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [endValue]);

  // Format the number with "k+"
  const formatNumber = (num) => {
    if (num >= 1000) return Math.round(num / 1000) + "k+";
    return Math.round(num) + "+";
  };

  return <p className="text-3xl font-bold">{formatNumber(count)}</p>;
};

export default Home;




// // Animation Variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//       when: "beforeChildren",
//     },
//   },
// };

// const textVariants = {
//   hidden: { opacity: 0, x: -100 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.8, ease: "easeOut" },
//   },
// };

// const imageVariants = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       type: "spring",
//       stiffness: 80,
//       damping: 20,
//     },
//   },
// };

// const buttonVariants = {
//   hover: {
//     scale: 1.05,
//     boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
//     transition: {
//       duration: 0.3,
//       yoyo: Infinity,
//     },
//   },
// };

// const ElearningLayout = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="w-full min-h-screen bg-gradient-to-r from-purple-300 to-purple-600 text-white flex flex-col items-center">
//       {/* Hero Section */}
//       <div className="w-full flex flex-col md:flex-row justify-center items-center py-12 px-6 md:px-20">
//         {/* Right Section - Image */}
//         <motion.div
//           className="order-1 md:order-2 w-full md:w-[45vw] flex justify-center items-center p-6"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <img
//           src = {Hero2}
//             // src="https://i.ibb.co/PDDtY12/Illustration.png"
//             alt="Illustration"
//             className="w-3/4 md:w-full h-auto"
//           />
//         </motion.div>

//         {/* Left Section - Text */}
//         <motion.div
//           className="order-2 md:order-1 w-full md:w-[55vw] text-center md:text-left"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-4xl md:text-6xl font-semibold  tracking-tighter leading-tight">
//             <span className="block">The <span className=' text-pink-400'>Knowledge</span>  Base</span>
//             <span className="block">That Democratizes Knowledge</span>
//           </h1>
//           <p className="text-lg md:text-2xl mt-4">Earn, Grow, Excel With EaseLearn</p>
//           <motion.button
//             onClick={() => navigate("/courses")}
//             className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 text-xl text-white md:text-base border-2 border-transparent hover:border-pink-300 border-white transition-all duration-300 ease-in-out"
//             whileHover={{ scale: 1.05 }}
//           >
//             <Link to="/courses">Get Started</Link>
//           </motion.button>
//         </motion.div>
//       </div>

//       {/* Available Courses Section */}
//       <div className="w-full bg-inherit py-12">
//         <AvailableCourses />
//       </div>

//       {/* Testimonial Section */}
//       {/* <div className="w-full bg-inherit py-12">
//         <Testimonial />
//       </div> */}

//       {/* Instructors Section */}
//       <div className="w-full bg-inherit py-12">
//         <Instructors />
//       </div>

//       {/* FAQ Section */}
//       <div className="w-full bg-inherit py-12">
//         <FAQ />
//       </div>
//     </div>
//   );
// };

// export default ElearningLayout;


// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from 'framer-motion';
// import AvailableCourses from './AvailableCourses'; // Make sure to import your components accordingly.
// import Instructors from './Instructors'; // Similarly for other components.
// import FAQ from './FAQ';







      {/* Hero Section */}
      {/* <div className="w-full flex flex-col md:flex-row justify-center items-center py-12 px-6 md:px-20">
        <motion.div
          className="order-1 md:order-2 w-full md:w-[45vw] flex justify-center items-center p-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://i.ibb.co/PDDtY12/Illustration.png" // Update the source accordingly
            alt="Illustration"
            className="w-3/4 md:w-full h-auto"
          />
        </motion.div>

        <motion.div
          className="order-2 md:order-1 w-full md:w-[55vw] text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            <span className="block">The <span className='text-pink-400'>Knowledge</span> Base</span>
            <span className="block">That Democratizes Knowledge</span>
          </h1>
          <p className="text-lg md:text-2xl mt-4">Earn, Grow, Excel With EaseLearn</p>
          <motion.button
            className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 text-xl text-white md:text-base border-2 border-transparent hover:border-pink-300 transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/courses">Get Started</Link>
          </motion.button>
        </motion.div>
      </div> */}








       {/* Header with Backdrop Blur */}
      {/* <header className="absolute top-0 left-0 w-full p-6 backdrop-blur-lg bg-black/30 flex justify-between items-center">
        <h1 className="text-2xl font-bold">EaseLearn</h1>
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:text-teal-400">Home</li>
            <li className="hover:text-teal-400">Courses</li>
            <li className="hover:text-teal-400">About</li>
            <li className="hover:text-teal-400">Contact</li>
          </ul>
        </nav>
      </header> */}

      {/* Main Content */}