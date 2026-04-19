import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AvailableCourses from "../AvailableCourses.jsx";
import FAQ from "../FAQ.jsx";
import { useNavigate } from "react-router-dom";
import { RiArrowRightLine, RiStarFill, RiVideoFill, RiGroupFill } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    // GSAP Scroll Animations
    const ctx = gsap.context(() => {
      gsap.fromTo('.reveal-up', 
        { y: 50, opacity: 0 }, 
        { 
          y: 0, opacity: 1, 
          stagger: 0.2, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.stats-container',
            start: "top 85%",
          }
        });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: <RiGroupFill />, label: "Active Students", value: "25k+" },
    { icon: <RiStarFill />, label: "Expert Instructors", value: "20+" },
    { icon: <RiVideoFill />, label: "Video Lessons", value: "480k+" },
  ];

  return (
    <div className="w-full min-h-screen text-foreground bg-background overflow-x-hidden font-sans" ref={containerRef}>
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[100vh] flex flex-col items-center justify-center px-6 pt-20 overflow-hidden" ref={heroRef}>
        
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-60 mix-blend-screen animate-pulse pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-[10%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] opacity-50 mix-blend-screen pointer-events-none" style={{ animationDelay: "2s" }}></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>

        <motion.div style={{ y }} className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-md shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-light text-muted-foreground">New courses added this week</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-8xl font-light tracking-tighter leading-[1.1] mb-6 text-foreground"
          >
            Master skills <br className="hidden md:block"/>
            with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">Confidence.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-2xl text-muted-foreground max-w-3xl mb-10 font-light leading-relaxed"
          >
            Accelerate your career with elite, expert-led courses designed for real-world impact. Join thousands of high-achievers today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => navigate('/courses')} 
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-light text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              Explore Courses
              <RiArrowRightLine className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate('/about')} 
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-card border border-border px-8 py-4 text-base font-light text-foreground hover:bg-muted transition-all duration-300 w-full sm:w-auto"
            >
              Our Mission
            </button>
          </motion.div>

        </motion.div>

        {/* Stats Section */}
        <div className="relative z-10 mt-24 lg:mt-32 w-full max-w-6xl stats-container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="reveal-up flex flex-col items-center justify-center p-8 bg-card/60 backdrop-blur-xl rounded-3xl border border-border/50 shadow-sm hover:shadow-md hover:bg-card/80 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-3xl mb-4">
                   {stat.icon}
                </div>
                <h3 className="text-4xl md:text-5xl font-light text-foreground mb-2">{stat.value}</h3>
                <p className="text-muted-foreground font-light uppercase tracking-wider text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Overview */}
      <section className="relative w-full py-24 md:py-32 bg-background z-20">
        <div className="container mx-auto px-6">
          <AvailableCourses />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative w-full py-24 bg-muted/20 border-t border-border z-20">
        <div className="container mx-auto px-6">
          <FAQ />
        </div>
      </section>

    </div>
  );
}

export default Home;