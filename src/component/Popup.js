import React, { useEffect, useState } from "react";
import './Popup.css';
import Story from '../Story.js';
import PostData from '../data/targetwords.json';
import $ from 'jquery';

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="popupContainer">
                    <div className="popupContainerLeft">
                        {/* <h1>{this.props.word}</h1> */}
                        {PostData.map((postDetail, index) => {
                            return <h1 id="word">{postDetail.once.word}</h1>
                        })}
                        {PostData.map((postDetail, index) => {
                            return <h4>{postDetail.once.variation}</h4>
                        })}
                        {PostData.map((postDetail, index) => {
                            return <h4>{postDetail.once.pronounciation}</h4>
                        })}
                        {PostData.map((postDetail, index) => {
                            return <p>{postDetail.once.definition}</p>
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

export default Popup