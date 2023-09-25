import { Flex } from '@chakra-ui/react'
import React from 'react'
import Header from '../header/header'
import landingBg from './../../images/landing-bg.jpg'
import Navigation from './../ielts_modules/navigation'
import Result from './../results/Results'
import Instructors from "./../instuctors/Instructors";
import Footer from '../footer/Footer'
import About from '../about/About'
import './home.css'
const Home = () => {
  return (
    <>
      <Flex id='home' className='landingContainer' bgImg={`linear-gradient(45deg,rgba(0,0,0, 0.75),rgba(255,255,255, 0.50)), url(${landingBg})`}>
        <Header/>
        <Flex className='landing'>Experience Quality IELTS Coaching for Guaranteed Results</Flex>
      </Flex>
      <About/>
      <Navigation/>
      <Instructors/>
      <Result/>
      <Footer/>
    </>
  )
}

export default Home