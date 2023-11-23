import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const QuizLists = () =>{
    const [quizNameData,setQuiznameData] = useState([]);
    const navigate = useNavigate()
    

    useEffect(() =>{
        const fetchData = async () =>{
            axios.get("../../public/QuizQuestionData.json")
            .then((res) =>{
                setQuiznameData(res.data)
                console.log(res.data);
            })
            .catch(err =>console.log(err))
        }
        fetchData();
    },[]);


    return (
        <Container>
            <h1>Quizzes</h1>
            {
                quizNameData.map((item) =>{
                    return (
                        <li key={item.quizId} id={item.quizId}>
                            <Link to={`/quiz/${item.quizId}`} style={{color:"white"}}>{item.quizName}</Link>
                        </li>
                    )
                })
            }
        </Container>
    )
}

export default QuizLists;

const Container = styled.div`
    border:1px solid;
    width:100%;
    height:100vh;
    border-radius:20px;
    background-color:rgb(139, 170, 217);
    color:white;
    padding:80px 0 0px 100px;
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