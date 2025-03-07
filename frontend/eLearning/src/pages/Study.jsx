import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CourseData } from '../context/CourseContext'
import { server } from '../main'
import { Link } from 'react-router-dom'

function Study({user}) {
    const params = useParams()
    const navigate = useNavigate()
    const {fetchCourse , course} = CourseData()
// Add This Feature When Payment Feature is Added
    // if(user && user.role !== "admin" && !user.subscription.includes(params.id)) 
    //     return navigate('/')
    useEffect(() => {
     fetchCourse(params.id)
    }, [])
    
  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-4 relative overflow-hidden">
    {/* Background Gradient & Glow Effect */}
    <div className="absolute inset-0 bg-gradient-to-b from-teal-900/40 to-black"></div>

    {course && (
      <div className="relative max-w-lg w-full bg-[#171717] bg-opacity-90 backdrop-blur-lg shadow-xl rounded-lg p-8 border border-teal-700">
        {/* Course Image */}
        <div className="flex justify-center">
          <img
            className="w-40 h-40 rounded-full object-cover shadow-md"
            src={`${server}/${course.image}`}
            alt={course.title}
          />
        </div>

        {/* Course Title */}
        <h2 className="text-3xl text-teal-400 font-bold mt-4 text-center">
          {course.title}
        </h2>

        {/* Course Description */}
        <p className="text-gray-300 text-center mt-2">{course.description}</p>

        {/* Course Info */}
        <div className="mt-4 space-y-2 text-center text-gray-300">
          <p>
            <span className="font-semibold text-teal-400">Created by:</span>{" "}
            {course.createdBy}
          </p>
          <p>
            <span className="font-semibold text-teal-400">Duration:</span>{" "}
            {course.duration} Weeks
          </p>
        </div>

        {/* Rating Section */}
        {course.rating && (
          <div className="flex items-center justify-center mt-4 space-x-1">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-5 h-5 ${
                  index < course.rating ? "text-yellow-400" : "text-gray-500"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69h4.165c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.96c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.285-3.96a1 1 0 00-.364-1.118L2.64 9.387c-.783-.57-.38-1.81.588-1.81h4.165a1 1 0 00.95-.69l1.286-3.96z" />
              </svg>
            ))}
            <span className="ml-2 text-gray-300">{course.rating} / 5</span>
          </div>
        )}

        {/* Action Button */}
        <Link to={`/lectures/${course._id}`}>
          <button className="w-full mt-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
            Go to Classroom
          </button>
        </Link>
      </div>
    )}
  </div>

  )
}

export default Study
