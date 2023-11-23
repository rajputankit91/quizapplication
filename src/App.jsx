import React from 'react'
import './App.css'
import QuizLists from "./Component/QuizLists"
import Quiz from './Component/Quiz'
import { Route,Routes, BrowserRouter } from 'react-router-dom'
import QuizHome from "./Component/HomeQuiz"

function App() {

  return (
    <BrowserRouter>
      <div className="box-container">
        <Routes>
          <Route path="/" element={<QuizHome />} />
          <Route path="/quizlist" element={<QuizLists />} />
          <Route path="/quiz/:quizId" element={<Quiz />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
