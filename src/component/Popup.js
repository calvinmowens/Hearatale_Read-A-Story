import React, { useEffect, useState } from "react";
import './Popup.css';
import PostData from '../data/targetwords.json';
import TargetQuiz from "./TargetQuiz.js";
// import $ from 'jquery';

const Popup = ({ isVisible, onClose, choosenWord }) => {

    // TODO add variation detection
    const word = PostData.filter(
        (post) => post.word?.toLowerCase() === choosenWord?.toLowerCase()
    )[0];
    // console.log(word.word);
    const [targetWord, setTargetWord] = useState('');
    const [quizzedWord, setQuizzedWord] = useState('');
    let quizWord = JSON.stringify(choosenWord);

    function titleCase(string) {
        return '"' + string[1].toUpperCase() + string.slice(2).toLowerCase();
    }

    let quizWordCap = titleCase(quizWord);

    console.log(quizWordCap);

    const [isQuizVisible, setIsQuizVisible] = useState(false);
    const handleTargetQuiz = (event) => {
        setIsQuizVisible(!isQuizVisible);
        setQuizzedWord(choosenWord);
        console.log(quizWordCap);
        setTargetWord(quizWordCap);
    };

    const closeQuiz = () => {
        setIsQuizVisible(false);
    };

    return (isVisible) ? (
        <div>
            <div className="popup">
                <div className="popup-inner">
                    <div className="popupContainer">
                        <div className="popupContainerLeft">
                            <div className="post" id="content-holder">
                                <h1 id="word">{word.word}</h1>
                                <audio id="story" controls autoPlay controlslist="nodownload noplaybackrate">
                                        <source src={word.audio} type="audio/mp3" />
                                    </audio>
                                <h4>{word.variation}</h4>
                                <h4>{word.pronounciation}</h4>
                                <p>{word.definition}</p>
                                <p hidden id="wordImage">{word.image}</p>
                            </div>
                            <button onClick={handleTargetQuiz} value="hello" className="quizBtnDesign" id="quizBtn">Quiz</button>
                        </div>
                        <div className="popupContainerRight">
                            {/* <div className="wordImg"> */}
                            <img className="wordImg" src={word.image} alt="picture for word"></img>
                        </div>
                    </div>
                    <a id="closeBtn" className="close close-btn" onClick={onClose}></a>
                </div>
            </div>
            <TargetQuiz id="targetQuiz" isQuizVisible={isQuizVisible}
                closeQuiz={closeQuiz}
                targetWord={targetWord}
                quizzedWord={quizzedWord}>
            </TargetQuiz>
        </div>
    ) : null;
};

export default Popup;
