import React from 'react'
import './Footer.css'
import { Box, Flex, Image, Link, Text, VStack } from '@chakra-ui/react'

import insta from './../../images/footer/insta.svg'
import mail from './../../images/footer/Gmail svg.svg'
import youtube from './../../images/footer/youtube.png'

const Footer = () => {
  return (
    <>
        <VStack className='footerContainer'>
            <Box className='footer'>
                <Flex className='footerLeft'>
                    <Text className='fontStyle'>Location:</Text>
                    <Text className='fontStyle'><b>Branch 1 :</b> Swera Hotel Street, Near bus stand, Sirsa</Text>
                    <Text className='fontStyle'><b>Branch 2 :</b> Near socitey bus stand, Rania, Sirsa</Text>
                    <Flex>
                        <Link isExternal href='https://www.instagram.com/_the__vibe_ielts_immigration/'><Image className="mediaIcon" src={insta} alt="Instagram"/></Link>
                        <Link isExternal href='https://youtube.com/@THEVIBEIELTSWORLDWIDE?si=mhPtoW4RiRcpIhRP'><Image className="mediaIcon" src={youtube} alt="Youtube"/></Link>
                        <Link isExternal href='mailto: thevibeielts@gmail.com'><Image className="mediaIcon" src={mail} alt="Mail"/></Link>
                    </Flex>
                </Flex>
                <Link href='mailto: thevibeielts@gmail.com'><Text className='footerContactBtn'>Send me an email</Text></Link>
            </Box>
            <Text className='copyright'>Copyright © 2023 Gurman Singh</Text>
        </VStack>
    </>
  )
}

export default Footer