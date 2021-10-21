import React, { useEffect, useState } from "react";
import './Popup.css';
import Story from '../Story.js';
import PostData from '../data/targetwords.json';
import $ from 'jquery';

let triggerWord;
let changeWord;
let y;

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
];


function Popup(props) {
    const [resourceType, setResourceType] = useState('posts')
    const [word, setWord] = useState('Parent');

    const PostData = [
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
    ];
    useEffect(() => {
        triggerWord = $("#hidden_trigger").text();
        changeWord = $("#changed").text(triggerWord).text();
        $("#changed").text(changeWord);
        y = $("#changed").text()
    });

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="popupContainer">
                    <div className="popupContainerLeft">
                        <h1 id="changed">hello</h1>
                        {PostData.map((post) => {

                            let x = 'Once';
                            const wordToFind = dataSet.find((word) => word.word === x);
                            return (
                                <div className="post" id="content-holder">
                                    <h1>{wordToFind.word}</h1>
                                    <h4>{wordToFind.variation}</h4>
                                    <h4>{wordToFind.pronounciation}</h4>
                                    <p>{wordToFind.definition}</p>
                                </div>
                            )
                        })}
                        <button className="quizBtnDesign" id="quizBtn">Quiz</button>
                    </div>
                    <div className="popupContainerRight">
                        <div className="wordImg"></div>
                    </div>
                </div>
                <a id="closeBtn" className="close close-btn" onClick={() => props.setTrigger(false)}></a>
                {props.children}
            </div>
        </div>
    ) : "";
}

// {PostData.map((postDetail, index) => {
//     return <h1>{postDetail.word}</h1>
// })}

export default Popup