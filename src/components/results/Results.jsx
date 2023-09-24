import React from "react";
import Card from "./card";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from '../../redux/Student/studentAction';
import { Flex, Text } from "@chakra-ui/react";
import './Result.css'
const resultContainer = {
  flexDirection:"column",
  alignItems:"center",
  background:"linear-gradient(90deg, #C04848 0%, #480048 100%)",
  paddingBottom:"50px"
}
const results = {
  width:"90vw",
  justifyContent:"center",
  margin:"auto",
  fontFamily:"Raleway, san-serif",
  flexWrap:"wrap",
}
const Result = () => {

  const {students} = useSelector((state) => state.students);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  return (
      <Flex style={resultContainer}>
        <Text className="resultHeading">Our Shining Stars</Text>
        <Flex style={results}>
          {students.map((student) => {
            return <Card student={student} key={student._id}/>;
          })}
        </Flex>
      </Flex>
  );
};

export default Result;
