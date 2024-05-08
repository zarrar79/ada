'use client'
import React from 'react'
import  Hero  from './Components/Hero';
import Testimonials from './Components/Testimonials'
import Features from './Components/Features'
import Hire from '../app/Components/Hire'
import Automation from './Components/automation'
import Discover from './Components/Discover'
const page = () => {
  return (
    <>
     <Hero/>
     <Testimonials/>
     <Features/>
     <Hire/>
     <Automation/>
     <Discover/>
    </>
  )
}
export default page;
