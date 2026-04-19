import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { server } from '../main'; 
import toast from 'react-hot-toast';
import CourseCard from '../components/CourseCard';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function AvailableCourses() {
  const [courses, setCourses] = useState([]);
  const sectionRef = useRef(null);

  const fetchCourses = async () => {
    try {
      const { data } = await axios.get(`${server}/course/all`);
      const allCourses = data.courses;
      setCourses(getRandomCourses(allCourses, 6)); // increased to 6 for a fuller grid
    } catch (err) {
      console.error('Failed to fetch courses:', err);
      toast.error('Failed to load courses');
    }
  };

  const getRandomCourses = (allCourses, count) => {
    if (allCourses.length <= count) return allCourses;
    const shuffled = allCourses.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    if(courses.length > 0) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.course-card-reveal', 
          { y: 60, opacity: 0 }, 
          { 
            y: 0, opacity: 1, 
            stagger: 0.15, 
            duration: 1, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            }
          });
      }, sectionRef);
      return () => ctx.revert();
    }
  }, [courses]);

  return (
    <div className="flex flex-col items-center w-full" ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-light tracking-tight text-foreground uppercase">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">Selection</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg md:text-xl font-light max-w-2xl mx-auto">
          Hand-picked curated courses to fast-track your career and expand your horizons.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto px-4">
        {courses.length > 0 ? (
          courses.map((course) => (
             <div key={course._id} className="course-card-reveal opacity-0">
                <CourseCard course={course} />
             </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center flex flex-col items-center justify-center">
             <div className="w-16 h-16 border-4 border-muted border-t-primary rounded-full animate-spin mb-4"></div>
             <p className="text-muted-foreground font-light">Curating courses for you...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AvailableCourses;
