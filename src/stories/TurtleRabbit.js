import React, { useEffect, useState } from "react";
import '../Story.css';
import Popup from "../component/Popup";
//will need to change to a new json file.
import PostData from '../data/targetwords.json'
import sound from "./the-turtle-and-the-rabbit/audio.mp3"
import image1 from "./the-turtle-and-the-rabbit/art/1.png"
import image2 from "./the-turtle-and-the-rabbit/art/2.png"
import image3 from "./the-turtle-and-the-rabbit/art/3.png"
import image4 from "./the-turtle-and-the-rabbit/art/4.png"
import image5 from "./the-turtle-and-the-rabbit/art/5.png"
import image6 from "./the-turtle-and-the-rabbit/art/6.png"
import image7 from "./the-turtle-and-the-rabbit/art/7.png"
import image8 from "./the-turtle-and-the-rabbit/art/8.png"


function TurtleRabbit() {
    const story = "There once was a rabbit who was very handsome and smart and especially proud of himself because he was faster than the cats and dogs and squirrels and any of the other animals.  He liked to brag and say, “No one can ever beat me in a race!” The other animals thought he was too much of a show off, but none of them dared to race him.  Then one day when the rabbit was bragging,  the tortoise said, “Mister Rabbit, I’m not so big as you and not so quick, but I will race you.” “What!” said the rabbit, and fell down laughing.  “You’re the slowest animal of all, and you must be the dumbest, if you think you can beat me in a race!” “Maybe so,” said the turtle.  “Maybe not.  Slow and steady is best.” All the animals gathered round, so surprised they didn’t know what to say, except the owl, who nodded, then blinked wisely, then said, “I’ll be the judge of the race.  Follow the path to the big rock, then to the strawberry patch, then to the pond, and then back to here.” “Okay,” said the turtle. “Okay,” said the rabbit. “Ready.  Get set.   Go!” said the owl, and off the turtle started lifting his short little legs and slowly stepping ahead. “Ha, ha!” said the rabbit, and he skipped ahead and then skipped back, and ran a circle around the turtle.  “You short-legged little slowpoke—you’ll never catch me!” “Maybe so, maybe not,” said the turtle.  “Slow and steady is best.” “See you at the big rock!” said the rabbit, “but you better run faster if you want to keep up.” And off he raced with a loud thumping of his big rabbit feet. The turtle didn’t move any faster, and didn’t pay any attention to the rabbit’s bragging, just kept putting one foot in front of the other foot and slowly marched ahead.  After a long hour’s slow walk the turtle came to the rock and there sat the rabbit waiting, combing his whiskers, and yawning, and looking bored.. “What took you so long, slowpoke?” asked the rabbit, and laughed.  “You’d better run faster.” The turtle didn’t answer and didn’t move any faster, just kept putting one foot in front of the other and slowly marched ahead. “All this waiting has made me hungry.  I think I’ll go eat some strawberries, and you’d better run faster or they’ll all be gone!” “Maybe so, maybe not,” said the turtle.  “Slow and steady is best.” And off raced the rabbit with a loud thumping of his big rabbit feet.. After another long hour’s slow walk the turtle came to the strawberry patch and there sat the rabbit, licking strawberry juice off his whiskers, and yawning, and looking bored.  There were no strawberries left. “What took you so long, short legs?” asked the rabbit, and laughed.  “You’d better run faster.” The turtle didn’t answer and didn’t move any faster, just kept putting one foot in front of the other and slowly marched ahead. “All this waiting and eating has made me thirsty,” said the rabbit.  “I think I’ll go have a drink in the pond, and you’d better run faster or the water will be all muddy when you get there!” “Maybe so, maybe not,” said the turtle.  “Slow and steady is best.” And off raced the rabbit with a loud thumping of his big rabbit feet. After another long hour’s slow walk the turtle came to the pond and there sat the rabbit, licking the water off his whiskers, and yawning, and looking bored.  The pond water was all muddy. “What took you so long, green face?” asked the rabbit, and laughed.  “You’d better run faster.” The turtle didn’t answer and didn’t move any faster, just kept putting one foot in front of the other and slowly marched ahead. “All this waiting and eating and drinking has made sleepy,” said the rabbit.  “I think I’ll rest and take a nap, and then I’ll be waiting for you at the finish line.” “Maybe so, maybe not,” said the turtle.  “Slow and steady is best.” And the rabbit plopped down on his back, set his head on a log, and laughed at the turtle, and put his big rabbit feet in the air, but there they didn’t make any loud thumping sounds. After another hour’s slow walk the turtle saw the animals waiting together at the finish line. “Where’s the rabbit?” asked the cat “What happened to the rabbit?” ask the dog. “Is the rabbit coming?” asked the squirrel. The turtle didn’t answer and didn’t move any faster, just kept putting one foot in front of the other and slowly marched ahead.  Just as he was reaching his short little leg across the finish line he heard a loud sound of big thumping rabbit feet, but the turtle had already crossed over the line before the rabbit raced up in a whirl of dust. “The turtle won the race!” said the owl.  “The turtle beat the rabbit.”  All the animals cheered and whooped and howled and celebrated when they saw that the turtle had won. “But I ran much faster,” said the rabbit, “except I got tired and rested!” “Exactly,” said the turtle.  “Slow and steady is best.”";
    const storyPicStyle = {
        // background: "#FFFFFF",
        background: "url(" + image1 + ")",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "95%",
        height: "75%",
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
                    case 55:
                        picHolder.style.background = "url(" + image2 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 78:
                        picHolder.style.background = "url(" + image3 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 117:
                        picHolder.style.background = "url(" + image4 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 152:
                        picHolder.style.background = "url(" + image5 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 191:
                        picHolder.style.background = "url(" + image6 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 161:
                        picHolder.style.background = "url(" + image7 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 324:
                        picHolder.style.background = "url(" + image3 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 338:
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

                let width = (document.getElementById("story-scroll").offsetWidth);
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
                        let increment = 614 / width;
                        DivElmnt.word += increment;
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
                                    <h1 id="title" className="story-title">The Turtle and The Rabbit</h1>
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
                                        <p id="story-spacer">
                                            <br></br>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-page">
                        <div id="picHolder" className="story-pic" style={storyPicStyle}/>
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

export default TurtleRabbit;