import React, { useEffect, useState } from "react";
import './Story.css';
import Popup from "./component/Popup";
import PostData from './data/targetwords.json'



function Story() {
    const story = "Once upon a time a little red hen was scratching for food in the farmyard and she happened to find a fine fat grain of wheat.  At first she thought she would eat it, but then she had a better idea. She thought, ‘I will plant this grain of wheat and grow more wheat and then mill it and bake it and make a fine loaf of bread.’ \n She showed the grain of wheat to the other animals in the farmyard and asked , “Who will help me plant this grain of wheat?” \n “Not I,” said the duck.  “I’d rather go swimming.” \n “Not I,” said the cat.  “I’d rather tease the mouse.” \n “Not I,” said the dog.  “It’s time for my nap.” \n “Very well then,” said the little red hen.  “I’ll plant it myself.”  And she did. \n After a while the grain of wheat grew into a tall green stalk, then it turned yellow, with many, many fat golden grains of wheat at the tip-top. \n “Who will help me harvest this wheat?” asked the little red hen. \n “Not I,” said the duck.  “I’d rather go splash in the pond.” \n “Not I,” said the cat.  “I’d rather tease the sparrows.” \n “Not I,” said the dog.  “It’s time for my nap.” \n “Very well then,” said the little red hen.  “I’ll harvest it myself.” \n And she did, and gathered a large basket full of wheat. \n “Who will help me take this wheat to the mill to be ground into flour?” asked the little red hen. \n “Not I,” said the duck.  “I’d rather play tag with the tadpoles.” \n “Not I,” said the cat.  “I’d rather tease the rat.” \n “Not I,” said the dog.  “I’m sleepy.  It’s time for my nap.” \n “Very well then,” said the little red hen. \n “I’ll take it to the mill myself.”  And she did. \n After the mill ground the wheat into smooth white flour, the little red hen asked, “Who will help me bake this flour into a fine loaf of bread?” \n “Not I,” said the duck.  “I’d rather play hide and seek with the geese.” \n “Not I,” said the cat.  “I’d rather tease the sparrows.” \n “Not I,” said the dog.  “I do believe it’s my nap time.” \n “Very well then,” said the little red hen.  “I’ll bake it myself.” \n And she did. \n After the loaf came out of the oven it was a beautiful golden brown color and smelled wonderfully warm and delicious.  The little red hen sliced a large piece and put it on her plate, then she said, “Who will eat this bread?” \n “I will!” said the duck. \n “I will!” said the cat. \n “I will!” said the dog. \n “No,” said the little red hen.  “No one helped me plant the grain.  No one helped me take it to the mill.  No one helped me bake it.  I will eat the bread all by myself!” \n And she did.";

    let triggeredWord;

    const [isVisible, setIsVisible] = useState(false);
    const [choosenWord, setChoosenWord] = useState('');

    const handleWordClick = (event) => {
        setIsVisible(!isVisible);
        console.log(event.target.innerHTML);
        setChoosenWord(event.target.innerHTML);
    };

    const onClose = () => {
        setIsVisible(false);
    };
    useEffect(() => {

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
            let storyDuration = Math.round(Math.floor(sound.duration));
            sound.ontimeupdate = function () { storyImgChange() };

            function storyImgChange() {
                let counter = Math.round(Math.floor(sound.currentTime));
                switch (counter) {
                    case 1:
                        document.getElementById("picHolder").style = "background: url(../img/exampleImg2.jpg); background-size: contain; background-position: center; background-repeat: no-repeat";
                        break;
                    case 8:
                        console.log("reached " + counter);
                        break;
                    //continue and add more cases...
                }
            }
        }
        sound.onpause = function () {

        }

        // -----
        // AUTOSCROLL AND HIGHLIGHTING
        // -----
        let ScrollRate = 1;
        // TODO set this as a factor of story-scroll.width
        let EndWord = (document.getElementById("story-scroll").offsetWidth) * 1.5;
        console.log(EndWord);

        let DivElmnt;
        let scrollInterval;
        let currentScrollPlace = 0;

        setTimeout(scrollDiv_init, 7000);

        function scrollDiv_init() {
            console.log("start scroll")
            DivElmnt = document.getElementById('story-scroll');
            DivElmnt.scrollTop = 0;
            DivElmnt.word = 0;

            // scrollInterval = setInterval('scrollDiv()', ScrollRate);
            scrollInterval = setInterval(() => {

                // SELENA'S ORIGINAL CODE
                // if (!reachedMaxScroll) {
                //     if (DivElmnt.word >= EndWord) {
                //         if (!sound.paused) {
                //             DivElmnt.scrollTop += 60;
                //             DivElmnt.word = 0;
                //         }
                //         reachedMaxScroll = DivElmnt.scrollTop >= DivElmnt.scrollHeight;
                //     }
                //     // AFTER PAUSE NOT WORKING
                //     else if (sound.paused) {
                //         DivElmnt.word = EndWord - DivElmnt.word;
                //     }
                //     DivElmnt.word++;
                // } else {
                //     reachedMaxScroll = (DivElmnt.scrollTop == 0) ? false : true;
                // }


                DivElmnt.addEventListener('wheel', function (e) {
                    console.log("scroll triggered");
                    document.getElementById('highlight-line').style.opacity = 0;
                });

                if (!sound.paused) {
                    if (DivElmnt.word >= EndWord) {
                        console.log("scroll condition reached: " + DivElmnt.word);
                        document.getElementById('highlight-line').style.opacity = 100;
                        currentScrollPlace += 60;
                        DivElmnt.scrollTop = currentScrollPlace;
                        DivElmnt.word = 0;
                    } else {
                        DivElmnt.word++;
                    }
                } else {
                    console.log("Story Paused, Curr Word: " + DivElmnt.word);
                }

            }, ScrollRate);
        }
    })

    return (
        <div>

            <div className="nav">
                <div className="back-to-bookshelf">
                    <a href="/bookshelf">
                        <div className="arrow" />
                    </a>
                    <a href="/bookshelf">
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
                                    <h1 id="title" className="story-title">LITTLE RED <span onClick={handleWordClick}>RIDING</span> HOOD</h1>
                                    <audio id="story" controls autoPlay controlslist="nodownload noplaybackrate">
                                        <source src="audio/LR1_cut.mp3" type="audio/mpeg" />
                                    </audio>
                                </div>
                                <div className="highlight-line" id="highlight-line"></div>
                                <div id="story-scroll" className="story-mid">
                                    {/* <div class="story-mid"> */}
                                    <div id="story-infinite-scroll">
                                        <p className="story-text">
                                            {story.split(" ").map((ele, index) => (getTag(ele, handleWordClick)))}
                                            {/* <span className="targetWord" onClick={handleWordClick}>Once</span> upon a time there was a sweet little girl who was <span className="targetWord" onClick={handleWordClick}>loved</span> by everyone who knew her, but most of all by her grandmother, and there was nothing that she would not have given to the child. Once she gave the girl a little cape with a hood of red velvet, which suited her so well that she would never wear anything else; so she was alawys called 'Little Red Riding Hood.’ */}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-page">
                        <div id="picHolder" className="story-pic" />
                    </div>
                </div>
            </section>
            <Popup id="popup" isVisible={isVisible}
                onClose={onClose}
                choosenWord={choosenWord}>
                <h3 id="hidden_trigger">hidden</h3>
            </Popup>
        </div >

    );
}

function getTag(element, handleWordClick) {
    if (element === '\n') {
        return (<br></br>)
    } else {
        return (<span className="targetWord" onClick={handleWordClick}>{element}</span>)
    }
}

export default Story;