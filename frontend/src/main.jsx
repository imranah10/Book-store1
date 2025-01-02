
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'



createRoot(document.getElementById('root')).render(

 <div className='overflow-x-hidden md:overflow-visible'>
    <BrowserRouter>
 <div className='dark:bg-slate-900 dark:text-white'>
 <App />
 </div>
 </BrowserRouter> 
 </div>

   
  
)
