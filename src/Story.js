import React, { useEffect, useState } from "react";
import './Story.css';
import Popup from "./component/Popup";
import PostData from './data/targetwords.json'
import $ from 'jquery';


function Story() {
    let triggeredWord;

    const [buttonPopup, setWordPopup] = useState(false);
    const [resourceType, setResourceType] = useState('posts')
    let [wordClicked, setWordClicked] = useState('word')
    useEffect(() => {

        /**
         * splits the story, paragraph, into each span.
         * This span onClick finds the clicked "word" calls popup function.
         */
        let txt = $('.story-text').text().split(' ')
        let len = txt.length,
            result = [];
        for (let i = 0; i < len; i++) {
            result[i] = '<span class="' + "targetWord" + '">' + txt[i] + '</span>';
        }
        $('.story-text').html(result.join(' '));

        let trigger = $('SPAN').click(
            function () {
                triggeredWord = $(this).text();
                console.log(triggeredWord);
                //word trigger?
                setWordClicked(wordClicked = triggeredWord);
                //popup trigger
                setWordPopup(true);
                return sound.paused ? sound.play() : sound.pause();
            }
        );

        /**
         * Plays audio.
         */
        let sound = document.getElementById("story");
        let btnChecker = document.getElementById("closeBtn");

        if (btnChecker != null) {
            togglePlay();
        } else {
            togglePlay();
        }

        function togglePlay() {
            return sound.paused ? sound.play() : sound.pause();
        };

        sound.onplay = function () {

        }
        sound.onpause = function () {
            // let currentTimeSec = sound.currentTime.toPrecision(3);
            // alert("The story is paused and the paused time in second is " + currentTimeSec);
        }

    })

    return (
        <div>

            <div className="nav">
                <div className="back-to-bookshelf">
                    <a href="bookshelf.html">
                        <div className="arrow" />
                    </a>
                    <a href="bookshelf.html">
                        <p>BOOKSHELF</p>
                    </a>
                </div>
                <div className="bookshelf_container_header_menu_container">
                    <div className="bookshelf_container_header_menu_container_img">
                    </div>
                    <div className="bookshelf_container_header_menu_container_info">
                        <p>
                            Elijah White <br /> 26💰 12⭐
                        </p>
                    </div>
                </div>
            </div>
            <section className="base-page">
                <div className="book">
                    <div className="left-page">
                        <div className="left-page-middle">
                            <div className="story-text-div">
                                <div className="story-top">
                                    <h1 id="title" className="story-title">LITTLE RED RIDING HOOD</h1>
                                    <audio id="story" controls autoPlay controlslist="nodownload noplaybackrate">
                                        <source src="audio/LR1_cut.mp3" type="audio/mpeg" />
                                    </audio>
                                </div>
                                <div id="story-scroll" className="story-mid">
                                    {/* <div class="story-mid"> */}
                                    <p className="story-text">
                                        <span className="targetWord" onClick={() => setWordPopup(true)}>Once</span> upon a time there was a sweet little girl who was loved by everyone who knew her, but most of all by her grandmother, and there was nothing that she would not have given to the child. Once she gave the girl a little cape with a hood of red velvet, which suited her so well that she would never wear anything else; so she was alawys called 'Little Red Riding Hood.’
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-page">
                        <div id="picHolder" className="story-pic" />
                    </div>
                </div>
            </section>
            <Popup id="popup" trigger={buttonPopup} setWordClicked={"loved"} setTrigger={setWordPopup}>
            </Popup>

        </div>

    );
}

export default Story;