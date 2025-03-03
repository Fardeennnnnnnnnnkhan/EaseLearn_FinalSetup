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
    <div className="flex justify-center items-center bg-black min-h-screen bg-gradient-to-t from-teal-900/40  to-black px-4">
  {course && (
    <div className="max-w-md w-full bg-[#171717] bg-opacity-90 shadow-lg rounded-lg p-6">
      <img 
        className="w-40 h-40 mx-auto rounded-full object-cover mb-4" 
        src={`${server}/${course.image}`} 
        alt={course.title} 
      />
      <h2 className="text-2xl text-teal-400 font-bold mb-2 text-center">
        {course.title}
      </h2>
      <p className="text-white mb-4 text-center">{course.description}</p>
      <p className="text-white mb-2">
        Created by: <span className="text-teal-400">{course.createdBy}</span>
      </p>
      <p className="text-white mb-4">
        Duration: <span className="text-teal-400">{course.duration}</span>
      </p>

      {/* Rating Section */}
      {course.rating && (
        <div className="flex items-center justify-center mb-4">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-5 h-5 ${index < course.rating ? 'text-yellow-400' : 'text-gray-500'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69h4.165c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.96c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.285-3.96a1 1 0 00-.364-1.118L2.64 9.387c-.783-.57-.38-1.81.588-1.81h4.165a1 1 0 00.95-.69l1.286-3.96z" />
            </svg>
          ))}
          <span className="ml-2 text-white">{course.rating} / 5</span>
        </div>
      )}

      <Link to={`/lectures/${course._id}`}>
        <button className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
          Go to Classroom
        </button>
      </Link>
    </div>
  )}
</div>

  )
}

export default Study
