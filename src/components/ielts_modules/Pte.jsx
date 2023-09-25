import React from "react";
import {
  Text,
  Heading,
  OrderedList,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

const Pte = () => {
  return (
    <>
      <Heading size="lg" mt={"30px"} mb={"10px"}>
        Introduction to PTE
      </Heading>
      <Text>
        The Pearson Test of English (PTE) is a comprehensive and technologically
        advanced examination that evaluates an individual's proficiency in the
        English language. It is developed and administered by Pearson Education,
        a leading global education company.
      </Text>
      <Heading size="lg" mt={"50px"} mb={"10px"}>
        Key Features of PTE:
      </Heading>
      <OrderedList spacing={"15px"}>
        <ListItem>
          <b>Four Modules:</b>PTE assesses English language skills in four main
          modules:
          <UnorderedList>
            <ListItem>
              <b>Speaking & Writing:</b> This module evaluates speaking and
              writing skills together. It assesses the ability to produce spoken
              and written English in an academic setting.
            </ListItem>
            <ListItem>
              <b>Reading:</b> Measures comprehension skills through a range of
              authentic texts and question formats.
            </ListItem>
            <ListItem>
              <b>Listening:</b> Evaluates the ability to understand spoken
              English in academic and everyday contexts.
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          <b>Computer-Based:</b>Unlike some other language proficiency tests,
          PTE is entirely computer-based. This means that the entire test,
          including speaking and writing, is conducted via a computer interface.
        </ListItem>
        <ListItem>
          <b>Integrated Skills:</b>PTE incorporates tasks that require
          test-takers to integrate multiple skills. For example, a speaking task
          may also involve reading comprehension.
        </ListItem>
        <ListItem>
          <b>Scoring:</b>PTE uses a holistic scoring system, which evaluates
          performance across the different modules on a scale of 10 to 90
          points. Each module receives its own score, and there is also a total
          overall score.
        </ListItem>
        <ListItem>
          <b>Quick Turnaround:</b>One of the advantages of PTE is its rapid
          results delivery. Typically, scores are available within 2-3 business
          days, making it a popular choice for those with tight deadlines.
        </ListItem>
        <ListItem>
          <b>Accepted Worldwide:</b>PTE scores are recognized by thousands of
          academic programs, employers, and government agencies globally. It is
          accepted for both study abroad and immigration purposes.
        </ListItem>
      </OrderedList>
      <Heading size="lg" mt={"50px"} mb={"10px"}>
        PTE Academic vs. PTE General:
      </Heading>
      <UnorderedList>
        <ListItem>
          <b>PTE Academic:</b>This version is primarily used for academic
          purposes, such as university admissions. It assesses a candidate's
          readiness for academic English in a higher education setting.
        </ListItem>
        <ListItem>
          <b>PTE General:</b> This version is more suited for general and
          professional purposes, often for employment or immigration. It
          assesses practical, every-day English language skills.
        </ListItem>
      </UnorderedList>
    </>
  );
};

export default Pte;
