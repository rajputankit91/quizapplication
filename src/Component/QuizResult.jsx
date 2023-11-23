import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function QuizResult(props){

  return (
    <>
      <Container>
        <h3>Thanks for playing Quiz</h3><br />
        <p>Score:{props.score}</p>
        <p>Total Score : {props.totalScore}</p>
      </Container>
      <Link to={"/"}><Button style={{backgroundColor:"RGB(204, 45, 74)"}}>Exit</Button></Link>
    </>
  )
}

const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
  p{
    font-size:20px;
  }
`;

const Button = styled.button`
  background-color: rgb(105,105,105);
  color: white;
  font-size: 16px;
  padding: 8px 20px;
  border-radius: 5px;
  margin: 10px 05px;
  cursor: pointer;
`;