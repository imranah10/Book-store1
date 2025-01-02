import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  return (
   <>
    <div>
    <dialog id="my_modal_3" className="modal dark:bg-slate-800">
  <div className="modal-box dark:bg-slate-700 dark:text-white">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    <h3 className="font-bold text-lg">Login!</h3>
    {/* Email  */}
   <div className='mt-4 space-y-2'>
    <span>Email</span><br />
  <input className='w-80 px-2 py-2 outline-none rounded dark:bg-slate-900 dark:text-white ' type="text" placeholder="Enter your Email "{...register("email", { required: true })} /><br/>
  {errors.email && <span className='text-sm text-red-600'>This field is required</span>}
   </div>
    {/* password  */}
   <div className='mt-4 space-y-2'>
    <span>Password</span><br />
  <input className='w-80 px-2 py-2 outline-none rounded dark:bg-slate-900 dark:text-white  ' type="password" placeholder="Enter your Password "{...register("password", { required: true })} /><br/>
  {errors.password && <span className='text-sm text-red-600'>This field is required</span>}
   </div>
   {/* button  */}
   <div className='flex justify-around items-center mt-4'>
    <button className='bg-pink-500 px-3 py-2 rounded-md'>Login</button>
    <p>Not Registered ? <Link to={'/signup'} className='underline text-blue-400'>SignUp</Link></p>
   </div>
   </form>
  </div>
</dialog>
    </div>
   </>
  )
}
