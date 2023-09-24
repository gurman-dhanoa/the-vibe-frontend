import React from 'react'
import './Footer.css'
import { Box, Flex, Image, Link, Text, VStack } from '@chakra-ui/react'

import insta from './../../images/footer/insta.svg'
import mail from './../../images/footer/Gmail svg.svg'

const Footer = () => {
  return (
    <>
        <VStack className='footerContainer'>
            <Box className='footer'>
                <Flex className='footerLeft'>
                    <Text className='fontStyle'>Open for any offers and collaborations.</Text>
                    <Flex>
                        <Link isExternal href='https://www.instagram.com/gurman_dhanoa_/'><Image className="mediaIcon" src={insta} alt="Instagram"/></Link>
                        <Link isExternal href='mailto: gurmandhanoa01@gmail.com'><Image className="mediaIcon" src={mail} alt="Mail"/></Link>
                    </Flex>
                </Flex>
                <Link href='mailto: gurmandhanoa01@gmail.com'><Text className='footerContactBtn'>Send me an email</Text></Link>
            </Box>
            <Text className='copyright'>Copyright © 2023 Gurman Singh</Text>
        </VStack>
    </>
  )
}

export default Footer