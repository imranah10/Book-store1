
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Courses } from "./Course/Courses";
import { Home } from "./Home/Home";
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
   <>
   <div className="dark:bg-slate-900 dark:text-white">
   <Routes>
      <Route path="/"element={<Home />} />
      <Route path="/course" element={<Courses />}/>
      <Route path="/signup"element={<Signup />} />
   </Routes>
   
   </div>
  
   </>
  )
}