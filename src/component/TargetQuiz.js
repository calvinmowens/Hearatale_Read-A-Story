import React, { useEffect, useState } from "react";
import './Popup.css';
import './Quiz.css';
import PostData from '../data/targetwords.json';


const TargetQuiz = ({ isQuizVisible, closeQuiz, targetWord, quizzedWord }) => {

    console.log(quizzedWord);
    const wordToFindInJson = PostData.filter(
        (post) => post.word?.toLowerCase() === quizzedWord?.toLowerCase()
    )[0];
    console.log(wordToFindInJson);

    return (isQuizVisible) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="popupContainer quizContainer">
                <form>
                    <h1 className="question">What is the definition of {targetWord} ?</h1>
                    <div className ="answerChoices">
                        <div className="answerInput"><input id="answer" type="radio" name="group1" defaultValue="wrong" /> I am wrong answer.<br /></div>
                        <div className="answerInput"><input id="answer" type="radio" name="group1" defaultValue="wrong" /> Also wrong answer<br /></div>
                        <div className="answerInput"><input id="answer" type="radio" name="group1" defaultValue="correct" /> I am correct answer</div>
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