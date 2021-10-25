import React, { useEffect, useState } from "react";
import './Popup.css';
import PostData from '../data/targetwords.json';
import TargetQuiz from "../TargetQuiz";
// import $ from 'jquery';


const Popup = ({ isVisible, onClose, choosenWord }) => {
    const word = PostData.filter(
        (post) => post.word?.toLowerCase() === choosenWord?.toLowerCase()
    )[0];
    const [targetWord, setTargetWord] = useState('');
    let quizWord = "text";
    
    const [isQuizVisible, setIsQuizVisible] = useState(false);
    const handleTargetQuiz = (event) => {
        setIsQuizVisible(!isQuizVisible);
        console.log(quizWord);
        setTargetWord(quizWord);
    };

    const closeQuiz = () => {
        setIsQuizVisible(false);
    };

    console.log(word);
    return (isVisible) ? (
        <div>
            <div className="popup">
            <div className="popup-inner">
                <div className="popupContainer">
                    <div className="popupContainerLeft">
                        <div className="post" id="content-holder">
                            <h1 id="word">{word.word}</h1>
                            <h4>{word.variation}</h4>
                            <h4>{word.pronounciation}</h4>
                            <p>{word.definition}</p>
                        </div>
                        <button className="quizBtnDesign" id="quizBtn">Quiz</button>
                    </div>
                    <div className="popupContainerRight">
                        <div className="wordImg"></div>
                    </div>
                </div>
                <a id="closeBtn" className="close close-btn" onClick={onClose}></a>
            </div>
            </div>
            <TargetQuiz id="targetQuiz" isQuizVisible={isVisible}
                closeQuiz={closeQuiz}
                targetWord={targetWord}>
            </TargetQuiz>
        </div>
    ) : null;
};

export default Popup;
