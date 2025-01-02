import React from "react";
import { Link } from "react-router-dom";
import { Login } from "./Login";
import { useForm } from "react-hook-form";

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="h-screen flex justify-center items-center border">
        <div className="modal-box w-[600px] dark:bg-slate-700 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to={"/"}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">SignUp!</h3>
            {/* Fullname  */}
            <div className="mt-4 space-y-2">
              <span>Fullname</span>
              <br />
              <input
                className="w-80 px-2 py-2 outline-none rounded dark:bg-slate-900 dark:text-white "
                type="text"
                placeholder="Enter your Fullname "
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
            </div>
            {/* Email  */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                className="w-80 px-2 py-2 outline-none rounded dark:bg-slate-900 dark:text-white "
                type="text"
                placeholder="Enter your Email "
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
            </div>
            {/* password  */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                className="w-80 px-2 py-2 outline-none rounded dark:bg-slate-900 dark:text-white  "
                type="password"
                placeholder="Enter your Password "
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
            </div>
            {/* button  */}
            <div className="flex justify-around items-center mt-4">
              <button className="bg-pink-500 px-3 py-2 rounded-md">
                SignUp
              </button>
              <p>
                Have Account ?{" "}
                <button
                  className="underline text-blue-400"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
              </p>
              <Login />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
