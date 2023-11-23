import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function QuizHome(){
  return (
    <Container>
      <Link to={"/quizlist"} ><StartButton>Play Quiz</StartButton></Link>
    </Container>
  )
}

const Container = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items: center;
  background-color:pink;
  background-image: url("https://hips.hearstapps.com/hmg-prod/images/quiz-questions-answers-1669651278.jpg?");
  background-size: cover;
`;

const StartButton = styled.button`
  width:07rem;
  height:03rem;
  border-radius: 10px;
  outline: none;
  position:relative;
  top:22rem;
  background-color:RGB(163, 178, 201);
  font-size:21px;
  &:hover{
    background-color:RGB(62, 98, 156);
    transition:0.5s;
    color:white;
    border:1px solid white;
  }
`;