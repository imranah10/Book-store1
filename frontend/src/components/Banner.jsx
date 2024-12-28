import React from "react";

export const Banner = () => {
  return (
    <>
     
      <div className="max-w-screen-2xl container md:px-20 mt-20 mb-10 px-4 mx-auto flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mt-12 md:mt-28 order-2 md:order-1">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">
              Hello welcome here to learn something{" "}
              <span className="text-pink-600">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium, iusto corrupti repudiandae nesciunt nobis accusantium
              asperiores voluptate velit tempora, illum,
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn hover:bg-pink-400 duration-200 bg-pink-600 mt-6">Secondary</button>
        </div>
        <div className="w-full md:w-1/2 order-1">
          <img className="h-92 w-92"
            src="https://img.freepik.com/free-vector/realistic-book-lover-composition-with-stack-colorful-books-with-eyeglasses-home-plants-tea-cup-vector-illustration_1284-77312.jpg?t=st=1735371291~exp=1735374891~hmac=4b407366b51f9d50784e088b8be7e3d963786be235411592e753cc0df11773b3&w=740"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
