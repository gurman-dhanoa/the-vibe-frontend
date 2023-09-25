import React from "react";
import {
  Text,
  Heading,
  OrderedList,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

const Ilets = () => {
  return (
    <>
      <Heading size="lg" mt={"30px"} mb={"10px"}>
        Introduction to IELTS
      </Heading>
      <Text>
        The International English Language Testing System (IELTS) is a globally
        recognized assessment of English language proficiency. It is jointly
        managed by the British Council, IDP: IELTS Australia, and Cambridge
        Assessment English. The primary aim of IELTS is to provide an accurate
        and reliable measure of a person's ability to communicate effectively in
        English, across all four language skills: Listening, Reading, Writing,
        and Speaking.
      </Text>
      <Text>
        IELTS is widely accepted by educational institutions, employers, and
        immigration authorities in various English-speaking countries. It is
        used for purposes such as university admissions, job applications, and
        immigration visa requirements.
      </Text>
      <Heading size="lg" mt={"50px"} mb={"10px"}>
        Key Features of IELTS:
      </Heading>
      <OrderedList spacing={"15px"}>
        <ListItem>
          <b>Four Modules:</b>IELTS assesses language proficiency in four
          separate modules:
          <UnorderedList>
            <ListItem>
              <b>Listening:</b> Evaluates a candidate's ability to understand
              spoken English in various contexts.
            </ListItem>
            <ListItem>
              <b>Reading:</b> Measures the comprehension of written texts and
              the ability to extract information from them.
            </ListItem>
            <ListItem>
              <b>Writing:</b> Assesses the ability to present ideas in written
              form, including task response, coherence, and accuracy of
              language.
            </ListItem>
            <ListItem>
              <b>Speaking:</b> Tests the ability to communicate verbally in
              various situations, demonstrating fluency, coherence, and
              appropriate language use.
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          <b>Two Versions:</b>IELTS offers two main versions to cater to
          different purposes:
          <UnorderedList>
            <ListItem>
              <b>Academic:</b> Designed for individuals applying for higher
              education programs or professional registration in an
              English-speaking environment.
            </ListItem>
            <ListItem>
              <b>General Training:</b> Intended for those seeking to migrate to
              an English-speaking country or for non-academic training and work
              experience.
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          <b>Scoring: </b>Each module is scored on a band scale from 0 to 9. The
          overall band score is the average of the four individual module
          scores, rounded to the nearest half or whole band. Different
          institutions and organizations may have specific score requirements
          for different purposes.
        </ListItem>
        <ListItem>
          <b>Validity: </b>IELTS scores are valid for a period of two years from
          the date of the test.
        </ListItem>
      </OrderedList>
      <Heading size="lg" mt={"50px"} mb={"10px"}>
        Preparation for IELTS:
      </Heading>
      <Text>
        Preparation for IELTS is essential to achieve the desired scores. This
        may include self-study with official IELTS materials, enrolling in
        preparatory courses, or seeking guidance from qualified instructors.
      </Text>
      <Text>
        In conclusion, IELTS is a crucial tool for individuals aspiring to
        study, work, or settle in an English-speaking environment. Its global
        recognition and rigorous assessment make it a valuable asset for anyone
        looking to demonstrate their English proficiency accurately and
        effectively.
      </Text>
    </>
  );
};

export default Ilets;
