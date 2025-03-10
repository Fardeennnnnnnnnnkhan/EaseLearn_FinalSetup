import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { UserContextProvider } from './context/UserContext.jsx'
import { CourseContextProvider } from './context/CourseContext.jsx'

//export const server = 'http://localhost:3000'
// export const server = 'https://ease-learn-final-setup.vercel.app'
export const server ='https://easelearn-byfardeen.onrender.com'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <CourseContextProvider>
          <App />
      </CourseContextProvider>
    </UserContextProvider>
  </StrictMode>,
)
