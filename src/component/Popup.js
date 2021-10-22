import React, { useEffect, useState } from "react";
import './Popup.css';
import Story from '../Story.js';
import PostData from '../data/targetwords.json';
import $ from 'jquery';

const dataSet = [
    {
        id: 1,
        word: 'Once',
        variation: null,
        pronounciation: '/wəns/',
        definition: 'on one occasion or for one time only.',
    },
    {
        id: 2,
        word: 'Loved',
        variation: 'love, loved, loving',
        pronounciation: '/ləv/',
        definition: 'feel deep affection for (someone).',
    },
    {
        id: 2,
        word: 'Riding',
        variation: 'love, loved, loving',
        pronounciation: '/ləv/',
        definition: 'feel deep affection for (someone).',
    }
];
const Popup = ({ isVisible, onClose, choosenWord }) => {
    const word = dataSet.filter(
        (post) => post.word?.toLowerCase() === choosenWord?.toLowerCase()
    )[0];

    console.log(word);
    return (isVisible) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="popupContainer">
                    <div className="popupContainerLeft">
                        <div className="post" id="content-holder">
                            <h1>{word.word}</h1>
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
    ) : null;
};

export default Popup;
