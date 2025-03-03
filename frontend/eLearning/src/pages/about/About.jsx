import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section className="bg-black text-gray-200 px-4 py-28">
    <div className="container bg-gradient-to-t from-teal-900/40 to-black mx-auto">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <motion.h1
          className="text-6xl font-bold text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Welcome to EaseLearn
        </motion.h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
          Our platform provides high-quality, accessible education for learners worldwide. From beginner to expert, EaseLearn offers a wide range of courses to help you achieve your learning goals.
        </p>
      </div>
  
      {/* Vision & Mission Section */}
      <div className="mb-12 bg-[#171717] p-10 rounded-lg shadow-lg text-white text-center">
        <h2 className="text-4xl font-semibold mb-4">Our Vision & Mission</h2>
        <p className="leading-relaxed max-w-3xl mx-auto">
          We envision a world where education is accessible to all. Our mission is to provide flexible, engaging, and effective learning solutions that cater to the needs of learners of all ages.
        </p>
      </div>
  
      {/* Key Features Section */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold mb-8 text-teal-400">Why EaseLearn?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Interactive Learning', description: 'Hands-on learning experiences with real-world applications.' },
            { title: 'Expert Instructors', description: 'Learn from industry leaders and skilled professionals.' },
            { title: 'Global Community', description: 'Join a supportive community of learners from around the world.' },
            { title: 'Certification Programs', description: 'Earn certificates to boost your resume and career prospects.' },
            { title: 'Anytime, Anywhere', description: 'Access your courses from any device, anytime.' },
            { title: 'Affordable Education', description: 'High-quality education at an affordable price.' },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-[#171717] shadow-lg rounded-lg transform transition-transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-teal-400">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
  
      {/* Call to Action Section */}
      <div className="text-center bg-teal-900 py-12 rounded-lg">
        <h2 className="text-4xl font-bold text-white mb-4">Start Learning Today</h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          Join our growing community of learners and get access to high-quality courses designed to help you succeed in your career.
        </p>
        <motion.a
          href="/courses"
          className="inline-block bg-white text-teal-900 py-3 px-8 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Get Started
        </motion.a>
      </div>
    </div>
  </section>
  
  
  );
}

export default About;

