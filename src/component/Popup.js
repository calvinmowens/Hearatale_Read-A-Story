import React, { useEffect, useState } from "react";
import './Popup.css'

function Popup(props) {
    const [resourceType, setResourceType] = useState('posts')
    useEffect(() => {

    })
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
            <div className="popupContainer">
                    <div className="popupContainerLeft">
                        <h1 id="word">Word</h1>
                        <h4>words, worded,weosfmskd, something</h4>
                        <h4>/wərd/</h4>
                        <p>This is the definition of the word.</p>
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