import { Flex, Image, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react'
import logo from './../../images/logoAbout.svg'
import React from 'react'
import './About.css'
const About = () => {
  return (
    <Flex id='about' className='aboutContainer'>
        <Image className='aboutImage' src={logo} alt="The Vibe" h="250px"/>
        <VStack className='aboutRight'>
            <Text className="aboutHeading">The Vibe</Text>
            <Text className="aboutSubHeading">Door To High Score</Text>
            <UnorderedList p={"10px"} fontSize={"20px"} fontWeight={400}>
                <ListItem>Immigration Service</ListItem>
                <ListItem>online and Offline ILETS classes <br/>( around 20+ successful results from online training )</ListItem>
                <ListItem>Free trial Classes </ListItem>
                <ListItem>Well Prepared Study material </ListItem>
                <ListItem>One to one preparatory session flexible timings</ListItem>
            </UnorderedList>
        </VStack>
    </Flex>
  )
}

export default About