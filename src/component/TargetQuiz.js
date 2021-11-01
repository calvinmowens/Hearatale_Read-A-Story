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
                <h3 className="coinHolder"><span className="iconM">💰</span><span id="coin">200</span></h3>
                    <form>
                        <h1 className="question">What is the definition of {targetWord} ?</h1>
                        <div className="answerChoices">
                            <div className="answerInput"><input id="answer" className="radio" type="radio" name="group1" defaultValue="wrong" /><p>{wordToFindInJson.qone}</p></div>
                            <div className="answerInput"><input id="answer" className="radio" type="radio" name="group1" defaultValue="wrong" /><p>{wordToFindInJson.qtwo}<br /></p></div>
                            <div className="answerInput"><input id="answer" className="radio" type="radio" name="group1" defaultValue="correct" /><p>{wordToFindInJson.qthree}</p></div>
                            <input className="turnin" type="submit" value="Submit" ></input>
                        </div>
                    </form>
                </div>
                <a id="closeBtn" className="close close-btn" onClick={closeQuiz}></a>
            </div>
        </div>
    ) : null;
};

export default TargetQuiz;
