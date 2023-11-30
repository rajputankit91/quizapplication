import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import QuizData from "../../public/QuizQuestionData.json";

const QuizLists = () =>{
    const [quizNameData,setQuiznameData] = useState([]);
    const navigate = useNavigate()

    return (
        <Container>
            <ContentDiv>
                <h1>Quizzes</h1>
                {
                    QuizData.map((item) =>{
                        return (
                            <li key={item.quizId} id={item.quizId}>
                                <Link to={`/quiz/${item.quizId}`} style={{color:"white"}}>{item.quizName}</Link>
                            </li>
                        )
                    })
                }
            </ContentDiv>
        </Container>
    )
}

export default QuizLists;

const Container = styled.div`
    border:1px solid;
    display: flex;
    justify-content: center;
    width:100%;
    height:100vh;
    border-radius:20px;
    background-color:rgb(139, 170, 217);
    color:white;
    h1{
        font-size:28px;
    }
    li{
        padding:08px 0;
        color:white;
    }
    li:hover{
        cursor:pointer;
        color: RGB(13, 49, 102);
    }
`;

const ContentDiv = styled.div`
    min-width:60%;
    margin-top:100px;
    padding:10px;
`;