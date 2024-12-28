import React from "react";

export const Cards = ({ item }) => {
  return (
    <>
      <div className="my-4 p-3">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge bg-pink-600">NEW</div>
            </h2>
            <p className="text-black">{item.Title}</p>
            <div className="card-actions flex justify-between items-center">
              <div className="badge badge-outline rounded-lg border">
                ${item.price}
              </div>
              <div className=" px-2 py-1  rounded-full border-[2px]  hover:text-white hover:bg-pink-400 duration-200 bg-pink-600">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
