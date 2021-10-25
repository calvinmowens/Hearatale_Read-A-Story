import React, { useEffect, useState } from "react";
import './Popup.css';
import './Quiz.css';
// import PostData from '../data/targetwords.json';


const TargetQuiz = ({ isQuizVisible, closeQuiz, targetWord }) => {

    return (isQuizVisible) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="popupContainer">
                    
                </div>
                <a id="closeBtn" className="close close-btn" onClick={closeQuiz}></a>
            </div>
        </div>
    ) : null;
};

export default TargetQuiz;
