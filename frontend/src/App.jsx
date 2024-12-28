
import { Courses } from "./Course/Courses";
import { Home } from "./Home/Home";
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
   <>
   {/* <Home />
   <Course /> */}
   <Routes>
      <Route path="/"element={<Home />} />
      <Route path="/course" element={<Courses />}/>
   </Routes>
   </>
  )
}