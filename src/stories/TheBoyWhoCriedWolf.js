import React, { useEffect, useState } from "react";
import '../Story.css';
import Popup from "../component/Popup";
//will need to change to a new json file.
import PostData from '../stories/the-boy-who-cried-wolf/targetwords.json'
import sound from "./the-boy-who-cried-wolf/audio.mp3"
import image1 from "./the-boy-who-cried-wolf/art/1.png"
import image2 from "./the-boy-who-cried-wolf/art/2.png"
import image3 from "./the-boy-who-cried-wolf/art/3.png"
import image4 from "./the-boy-who-cried-wolf/art/4.png"
import image5 from "./the-boy-who-cried-wolf/art/5.png"
import image6 from "./the-boy-who-cried-wolf/art/6.png"


function TheBoyWhoCriedWolf() {
    const story = 'A shepherd boy watching the sheep on the hillside high above the village was alone and felt bored with no one to play with or talk to.  He thought, ‘I wish the wolf would come and chase the sheep.  I could blow my horn and yell, “Wolf!  Wolf!” and all the people would race here and it would be interesting and fun.’  He knew he shouldn’t, but he was so bored he put the horn to his mouth, blew as hard as he could, and yelled, “The wolf has come!  The wolf has come!”  In the town below he saw people grabbing their axes and clubs and guns and racing up the path to help him save the flock of sheep.  “Where is he?” they shouted.  “Did he kill any lambs?  Where’s the wolf?” The boy was embarrassed then, but when the people saw the sheep peacefully munching on the grass and couldn’t find any wolf tracks, the boy had to admit the wolf hadn’t come at all and he was only pretending.  The villagers were angry and scolded him and made him feel ashamed, but he promised he’d never, ever again sound a false alarm, and the people left him alone with the sheep. A few days later he felt bored again and wanted to blow the horn again and watch all the people gather their weapons and tools and race up the hill toward him.  He saw a shadow in some bushes and hoped it might be the wolf, and just in case it was, he decided to blow the horn, and he did, and again the people gathered up their rakes and hoes and long knives and guns and raced up the path as fast as they could. But again the sheep peacefully grazed on the grass and no one found any sign of a wolf’s footprint or any wolf hair stuck on the bushes or briers.  This time no one scolded him.  They only stared hard and frowned with angry faces, and turned their backs on him and walked away.   The boy felt very sad and very ashamed and made a strong promise to himself that he’d never ever again blow the horn until he was very sure and very certain he really, really saw the wolf. The very next day he saw something dark like a furry tail moving behind some rocks, and then a little later a shiny black nose peeking from the bushes, and a few minutes later two dark, furry, pointy ears poking up from behind a fallen log.  The boy wanted to blow the horn, but didn’t dare yet—then suddenly the wolf exploded forward leaping from a rock to attack a lamb and drag it in the bushes.  The boy blew the horn louder than he’d ever blown it before and yelled at the top of his lungs, “Wolf! Wolf!  The wolf has come!” But down in the village no one reached for an axe or a rake or ran into a house to fetch a gun or big knife.  No one started up the path to help him.  It was as if he’d never blown the horn or cried “Wolf” at all.  The wolf ran across the field and caught another lamb, and again the boy blew his horn and cried “Wolf!  Wolf!” but again no one listened or paid attention or even looked up. Fearful, his heart beating fast, watching to see if the wolf would chase after him, the boy ran down the path to the village shouting, “The wolf has come!  He’s killing the lambs!  Why didn’t you come when I cried wolf?” When the people saw how afraid he was many of them grabbed their guns and knives and clubs to race up the path to drive away the wolf.  But an old woman stayed behind and looked at him sternly, and said, “You cried wolf once and lied to us for the wolf had not come.  You cried wolf again and lied again for again there was no wolf.  Who among us could ever believe you when the wolf finally came?”  The boy was sad, but he knew the old woman was right, and when he grew older the boy moved to live in another village, for in that first village no one had ever believed him again.';
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

    const removeHighlight = (event) => {
        var word = PostData.filter(
            (post) => post.word?.toLowerCase() === event.target.innerHTML?.toLowerCase()
        )[0];
        if (word == null) {
            event.target.removeAttribute("class");
        }
    }

    const handleWordClick = (event) => {
        var word = PostData.filter(
            (post) => post.word?.toLowerCase() === event.target.innerHTML?.toLowerCase()
        )[0];
        if (word == null) {
            setIsVisible(isVisible);
            setChoosenWord(null);
        } else {
            setIsVisible(!isVisible);
            setChoosenWord(event.target.innerHTML);
        }
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
                    case 35:
                        picHolder.style.background = "url(" + image2 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 82:
                        picHolder.style.background = "url(" + image3 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 111:
                        picHolder.style.background = "url(" + image2 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 147:
                        picHolder.style.background = "url(" + image4 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 218:
                        picHolder.style.background = "url(" + image5 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 232:
                        picHolder.style.background = "url(" + image6 + ")"
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
        let EndWord = 900;
        console.log(EndWord);

        let DivElmnt;
        let scrollInterval;
        let currentScrollPlace = 0;

        setTimeout(scrollDiv_init, 5000);

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
                                    <h1 id="title" className="story-title">The Boy Who Cried Wolf</h1>
                                    <audio id="story" controls autoPlay controlslist="nodownload noplaybackrate">
                                        <source src={sound} type="audio/mp3" />
                                    </audio>
                                </div>
                                <div className="highlight-line" id="highlight-line"></div>
                                <div id="story-scroll" className="story-mid">
                                    {/* <div class="story-mid"> */}
                                    <div id="story-infinite-scroll">
                                        <p className="story-text">
                                            {story.split(" ").map((ele, index2, index) => (getTag(ele, removeHighlight, handleWordClick)))}
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
                        {/* ADDS BUTTON FOR STORY QUIZ*/}
                        <div classname="storyQuizBtnHolder" >
                            <form action="/TheBoyWhoCriedWolfStoryQuiz">
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

function getTag(element, removeHighlight, handleWordClick) {
    if (element === '\n') {
        return (<br></br>)
    } else {
        return (<span className="targetWord" onMouseEnter={removeHighlight} onClick={handleWordClick}>{element}</span>)
    }
}

export default TheBoyWhoCriedWolf;