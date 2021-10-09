import React, { useEffect, useState } from "react";
import './Popup.css'

function Popup(props) {
    const [resourceType, setResourceType] = useState('posts')
    useEffect(() => {

    })
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button id="closeBtn" className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup