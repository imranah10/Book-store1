import React from 'react'
import {Navbar} from '../components/Navbar'
import {Banner} from '../components/Banner'
import {Freebooks} from '../components/Freebooks'
import {Footer} from '../components/Footer'

export const Home = () => {
  return (
    <>
    <div className=''>
    <Navbar />
    <Banner />
    <Freebooks />
    <Footer />
    </div>
    </>
  )
}
