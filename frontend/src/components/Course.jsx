import React, { useEffect, useState } from "react";
// frontend hard coded data 
// import list from "../../public/list.json";
import { Cards } from "./Cards";
import { Link } from "react-router-dom";
import axios from 'axios'


export const Course = () => {
  // for acccesing data from db(backend) 
  const [book,setData]=useState([]);
  useEffect(()=>{
    const  getbook=async ()=>{
      try{
      const res=await axios.get('http://localhost:4001/book')
      console.log(res.data);
      setData(res.data)
      }
      catch(error){
        console.log(error)
  
      }
    }
    getbook();
  },[])
  return (
    <>
      <div className="max-w-screen-2xl container md:px-20 px-4 mx-auto mt-16">
        <div className=" items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl font-semibold">
            we are delighted to have you{" "}
            <span className="text-pink-500">here: !)</span>
          </h1>
          <p className="my-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            necessitatibus doloremque numquam eaque quo amet veniam ducimus
            blanditiis quasi magnam minus laborum et quae, est dolor adipisci
            dolore incidunt vitae nam. Nisi voluptate, corporis exercitationem
            veritatis quasi ab rem. Eius architecto suscipit eos ut omnis cumque
            non, porro quis officia. Molestiae, qui incidunt neque nihi
          </p>
          <Link
            to="/"
            className="px-4 py-2  bg-pink-500 text-white rounded-md hover:bg-pink-700 duration-200"
          >
            Back
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 mt-4">
          {/*(book) data coming from db  */}
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};
