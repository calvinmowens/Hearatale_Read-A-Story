import React, { useEffect, useState } from "react";
import './Popup.css';
import './Quiz.css';
import QuizData from '../data/exampleQuestions.json';


const TargetQuiz = ({ isQuizVisible, closeQuiz, targetWord, quizzedWord }) => {

    console.log(quizzedWord);
    const wordToFindInJson = QuizData.filter(
        (post) => post.word?.toLowerCase() === quizzedWord?.toLowerCase()
    )[0];
    console.log(wordToFindInJson);

    return (isQuizVisible) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="popupContainer quizContainer">
                    <form>
                        <h1 className="question">What is the definition of {targetWord} ?</h1>
                        <div className="answerChoices">
                            <div className="answerInput"><input id="answer" type="radio" name="group1" defaultValue="wrong" />{wordToFindInJson.qone}<br /></div>
                            <div className="answerInput"><input id="answer" type="radio" name="group1" defaultValue="wrong" />{wordToFindInJson.qtwo}<br /></div>
                            <div className="answerInput"><input id="answer" type="radio" name="group1" defaultValue="correct" />{wordToFindInJson.qthree}</div>
                            <input className="turnin" type="submit" value="Turn In" ></input>
                        </div>
                    </form>
                </div>
                <a id="closeBtn" className="close close-btn" onClick={closeQuiz}></a>
            </div>
        </div>
    ) : null;
};

export default TargetQuiz;
