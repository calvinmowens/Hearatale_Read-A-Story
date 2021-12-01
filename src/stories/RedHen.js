import React, { useEffect, useState } from "react";
import '../Story.css';
import Popup from "../component/Popup";
//will need to change to a new json file.
import PostData from '../data/targetwords.json'
import sound from "./little-red-hen/audio.mp3"
import image1 from "./little-red-hen/art/1.png"
import image2 from "./little-red-hen/art/2.png"
import image3 from "./little-red-hen/art/3.png"
import image4 from "./little-red-hen/art/4.png"
import image5 from "./little-red-hen/art/5.png"
import image6 from "./little-red-hen/art/6.png"
import image7 from "./little-red-hen/art/7.png"
import image8 from "./little-red-hen/art/8.png"

function RedHen() {
    const story = "Once upon a time a little red hen was scratching for food in the farmyard and she happened to find a fine fat grain of wheat.  At first she thought she would eat it, but then she had a better idea. She thought, ‘I will plant this grain of wheat and grow more wheat and then mill it and bake it and make a fine loaf of bread.’   She showed the grain of wheat to the other animals in the farmyard and asked , “Who will help me plant this grain of wheat?”   “Not I,” said the duck.  “I’d rather go swimming.”   “Not I,” said the cat.  “I’d rather tease the mouse.”   “Not I,” said the dog.  “It’s time for my nap.”   “Very well then,” said the little red hen.  “I’ll plant it myself.”  And she did.   After a while the grain of wheat grew into a tall green stalk, then it turned yellow, with many, many fat golden grains of wheat at the tip-top.   “Who will help me harvest this wheat?” asked the little red hen.   “Not I,” said the duck.  “I’d rather go splash in the pond.”   “Not I,” said the cat.  “I’d rather tease the sparrows.”   “Not I,” said the dog.  “It’s time for my nap.”   “Very well then,” said the little red hen.  “I’ll harvest it myself.”   And she did, and gathered a large basket full of wheat.   “Who will help me take this wheat to the mill to be ground into flour?” asked the little red hen.   “Not I,” said the duck.  “I’d rather play tag with the tadpoles.”   “Not I,” said the cat.  “I’d rather tease the rat.”   “Not I,” said the dog.  “I’m sleepy.  It’s time for my nap.”   “Very well then,” said the little red hen.   “I’ll take it to the mill myself.”  And she did.   After the mill ground the wheat into smooth white flour, the little red hen asked, “Who will help me bake this flour into a fine loaf of bread?”   “Not I,” said the duck.  “I’d rather play hide and seek with the geese.”   “Not I,” said the cat.  “I’d rather tease the sparrows.”   “Not I,” said the dog.  “I do believe it’s my nap time.”   “Very well then,” said the little red hen.  “I’ll bake it myself.”   And she did.   After the loaf came out of the oven it was a beautiful golden brown color and smelled wonderfully warm and delicious.  The little red hen sliced a large piece and put it on her plate, then she said, “Who will eat this bread?”   “I will!” said the duck.   “I will!” said the cat.   “I will!” said the dog.   “No,” said the little red hen.  “No one helped me plant the grain.  No one helped me take it to the mill.  No one helped me bake it.  I will eat the bread all by myself!”   And she did.";
    const storyPicStyle = {
        // background: "#FFFFFF",
        background: "url(" + image1 + ")",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "95%",
        height: "50%",
        boxShadow: "0px 0px 40px rgba(184, 184, 184, 0.25)"
    }

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
            if (isVisible == false) {
                return sound.play();
            }
            return sound.paused ? sound.play() : sound.pause();
        };

        sound.onplay = function () {
            let storyDuration = Math.round(Math.floor(sound.duration));
            sound.ontimeupdate = function () { storyImgChange() };

            function storyImgChange() {
                let counter = Math.round(Math.floor(sound.currentTime));
                let picHolder = document.getElementById("picHolder")
                switch (counter) {
                    // switch starts at image 2
                    case 8:
                        picHolder.style.background = "url(" + image2 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 10:
                        picHolder.style.background = "url(" + image3 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 12:
                        picHolder.style.background = "url(" + image4 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 14:
                        picHolder.style.background = "url(" + image5 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 16:
                        picHolder.style.background = "url(" + image6 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 18:
                        picHolder.style.background = "url(" + image7 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 20:
                        picHolder.style.background = "url(" + image8 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    default:
                        break;
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
                    document.getElementById('highlight-line').style.opacity = 0;
                });

                if (!sound.paused) {
                    if (DivElmnt.word >= EndWord) {
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
                                    <h1 id="title" className="story-title">The Little Red Hen</h1>
                                    <audio id="story" controls autoPlay controlslist="nodownload noplaybackrate">
                                        <source src={sound} type="audio/mp3" />
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
                        {/* ADDS BUTTON FOR STORY QUIZ*/}
                        <div classname="storyQuizBtnHolder" >
                            <form action="/RedHenStoryQuiz">
                                <button className="quizBTN"> Take Quiz </button>
                            </form>
                        </div>
                        <div id="picHolder" className="story-pic" style={storyPicStyle} />
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

export default RedHen;