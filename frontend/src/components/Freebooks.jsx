import React from 'react'
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Cards } from './Cards';

export const Freebooks = () => {
    const filterdata=list.filter((data)=>data.category==='Free')
    console.log(filterdata)

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }

  return (
   <>
   <div className='max-w-screen-2xl container md:px-20 px-4 mx-auto my-6'>
   <div className='my-4'>
   <h1 className='font-semibold text-xl pb-2'>Free Offered Books</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque perferendis doloribus rerum nulla et quod eum iusto quia neque dolor!</p>
   </div>
    {/* slider  */}
    <div>
    <Slider {...settings}>
       {filterdata.map((item)=>(
        // cards mapping 
        <Cards item={item} key={item.id} />
       ))}
      </Slider>
    </div>
    </div>

   </>
  )
}
