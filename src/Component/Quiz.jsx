import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import QuizQuestionData from "../../public/QuizQuestionData.json"
import { Link } from "react-router-dom";

import QuizResult from "./QuizResult";

export default function Quiz(){
    const [current,setCurrent] = useState(0);
    const {quizId} = useParams()
    const [selected,setSelected] = useState("");
    const [score,setScore] = useState(0);
    const [showResult,setShowresult] = useState(false);
    const [answer,setAnswer] = useState([]);

    const thisQuiz = QuizQuestionData.find((ques) => ques.quizId == quizId );
    const options = thisQuiz.questions[current].options;

    const haldleNext = () =>{
        {
            selected != "" ? (
                updateScore(),
                current < thisQuiz.questions.length - 1 ? setCurrent(current + 1) : setShowresult(true),
                setSelected(0)
            ) : alert("Please select an option")
        }
    }

    const haldlePrevious = () =>{
        current >= 1 ? setCurrent(current - 1) : "";
    }

    const updateScore = () =>{
        (selected === thisQuiz.questions[current].answer) ? setScore(score + 1) : "";
    }

    return (
        <Container>
            <headerDiv>
                <Heading><strong>Quiz name : </strong>{thisQuiz.quizName}</Heading>
            </headerDiv>

            <ContentDiv current={current} >
                {showResult ? 
                    (<QuizResult score= {score} totalScore = {thisQuiz.questions.length} />)
                    :
                    (
                        <>
                            <Question >{current + 1}. {thisQuiz.questions[current].question}</Question>
                            <OptionsDiv>
                                {
                                    options.map((option,index) =>{
                                        return (
                                            <OptionDiv key={index} onClick={() =>{
                                                    setSelected(index + 1)
                                                }} style = {{backgroundColor:`${selected == index + 1 ? "rgb(66, 32, 232)" : ""}`,color:`${selected == index + 1 ? "white" : ""}`}} >
                                                {option};
                                            </OptionDiv>
                                        )
                                    })
                                }
                            </OptionsDiv>

                            <ButtonDiv>
                                <PrevButton onClick={haldlePrevious}>Previous</PrevButton>
                                <NextButton onClick={haldleNext}>Next</NextButton>
                                <Link to={"/"}><ExitButton>Exit</ExitButton></Link>
                            </ButtonDiv>
                        </>
                    )
                }
            </ContentDiv>
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    height:100vh;
    background-color:rgb(139, 170, 217);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:10px;
`;

const OptionDiv = styled.div`
    box-shadow: rgba(100, 100, 111, 0.8) 0px 7px 29px 0px;
    padding:5px;
    margin:10px;
    min-height: 100px;
    min-width:400px;
    max-width:400px;
    textAlign:center;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size:18px;
    &:hover{
        background-color:rgb(143, 124, 235);
        color:white;   
    }
`;

const Input = styled.input`
    font-size:25px;
`;

const headerDiv = styled.div`
    

`;

const Heading = styled.p`
    font-Size:45px;
    color:white;
`;

const ContentDiv = styled.div`
    width:80%;
    min-Height:500px;
    display:flex;
    justify-Content:center;
    flex-Direction:column;
    align-Items:center;
    background-color:white;
    border-radius: 35px;
    padding:10px;
`;

const Question = styled.h2`
    text-Align:center;
    padding:10px;
`;

const OptionsDiv = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
`;

const ButtonDiv = styled.button`
    background-color: transparent;
    border:none;
    display:flex;
    justify-Content:center;
    align-Items:center;
`;

const PrevButton = styled.button`
    background-Color:transparent;
    font-size: 16px;
    padding: 8px 20px;
    border-radius: 5px;
    margin: 10px 05px;
    cursor: pointer;
    &:hover{
        background-color:RGB(75, 132, 189);
        color: white;
    }
`;

const NextButton = styled.button`
    background-Color:transparent;
    font-size: 16px;
    padding: 8px 20px;
    border-radius: 5px;
    margin: 10px 05px;
    cursor: pointer;
    &:hover{
        background-color:RGB(75, 189, 119);
        color: white;
    }
`;

const ExitButton = styled.button`
    background-Color:transparent;
    font-size: 16px;
    padding: 8px 20px;
    border-radius: 5px;
    margin: 10px 05px;
    cursor: pointer;
    &:hover{
        background-color:RGB(204,45,74);
        color: white;
    }
`;