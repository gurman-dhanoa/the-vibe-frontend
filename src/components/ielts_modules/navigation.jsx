import { Flex, Link, Text } from "@chakra-ui/react";
import ilets from "./../../images/services/Rectangle 6.png"
import pteBg from "./../../images/services/PTE-bg.png"
import visaBg from "./../../images/services/visa-bg.png"
import React from "react";
import './navigation.css'
const Navigation = () => {
  return (
    <>
    <Flex className="serviceContainer">
      <Text className="headingStyle">OUR SERVICES</Text>
      <Flex className="services">
        <Link href="/ielts_modules/reading">
          <Flex className="serviceCard">
            <Flex className="cardTitle" bgImage={ilets}><Text className="cardTitleText">ILETS</Text></Flex>
            <Text className="cardDesc">IELTS is accepted as proof of English language ability for study, work and migration in Australia, Canada, New Zealand and the UK.Each country sets its own IELTS score requirements which we have listed below. Scores requirements will also vary depending on the requirements of your visa, and where you plan to study or work.</Text>
          </Flex>
        </Link>
        <Link href="/ielts_modules/writing">
          <Flex className="serviceCard">
            <Flex className="cardTitle" bgImage={pteBg}><Text className="cardTitleText">PTE</Text></Flex>
            <Text className="cardDesc">IELTS is accepted as proof of English language ability for study, work and migration in Australia, Canada, New Zealand and the UK.Each country sets its own IELTS score requirements which we have listed below. Scores requirements will also vary depending on the requirements of your visa, and where you plan to study or work.</Text>
          </Flex>
        </Link>
        <Link href="/ielts_modules/listening">
          <Flex className="serviceCard">
            <Flex className="cardTitle" bgImage={visaBg}><Text className="cardTitleText">VISA & IMMIGRATION</Text></Flex>
            <Text className="cardDesc">IELTS is accepted as proof of English language ability for study, work and migration in Australia, Canada, New Zealand and the UK.Each country sets its own IELTS score requirements which we have listed below. Scores requirements will also vary depending on the requirements of your visa, and where you plan to study or work.</Text>
          </Flex>
        </Link>
      </Flex>
    </Flex>
    </>
  );
};

export default Navigation;
