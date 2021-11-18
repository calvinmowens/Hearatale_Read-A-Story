import React, { useEffect, useState } from "react";
import '../Story.css';
import Popup from "../component/Popup";
//will need to change to a new json file.
import PostData from '../data/targetwords.json'
import sound from "./the-three-billy-goats-gruff/audio.mp3"
import image1 from "./the-three-billy-goats-gruff/art/1.png"
import image2 from "./the-three-billy-goats-gruff/art/2.png"
import image3 from "./the-three-billy-goats-gruff/art/3.png"
import image4 from "./the-three-billy-goats-gruff/art/4.png"
import image5 from "./the-three-billy-goats-gruff/art/5.png"
import image6 from "./the-three-billy-goats-gruff/art/6.png"
import image7 from "./the-three-billy-goats-gruff/art/7.png"
import image8 from "./the-three-billy-goats-gruff/art/8.png"
import image9 from "./the-three-billy-goats-gruff/art/9.png"
import image10 from "./the-three-billy-goats-gruff/art/10.png"
import image11 from "./the-three-billy-goats-gruff/art/11.png"
import image12 from "./the-three-billy-goats-gruff/art/12.png"
import image13 from "./the-three-billy-goats-gruff/art/13.png"



function Goats() {
    const story = 'Once upon a time three Billy Goats Gruff lived on a high hill in a pasture full of fine alfalfa grass.  The eldest brother was Big Billy Goat Gruff, the second was Middle-sized Billy Goat Gruff, and the youngest was Little Billy Goat Gruff.  Every day they grazed and browsed and munched to their hearts’ content, but they were hungry Billy Goats Gruff and before long they had eaten almost all the alfalfa on their hill. \n On another hill across the way they could see fine meadow fields with red and white blossoms among delicious green clover, but the path to the other hill led down to a bridge and below the bridge lurked a mischievous troll. \n One day Little Billy Goat Gruff tired of searching for grass to eat and went down the path to the bridge.  He looked around and didn’t see the troll, so he started across the bridge with his little hoofs going clip-clop, clip-clop, clip-clop.  But when he reached the middle of the bridge he saw a crooked, bumpy finger with a pointy, broken fingernail curl up over the side of the bridge, and then another and another, until a whole dirty hand-paw slapped on the bridge and then another, and then a long greenish hairy nose like a lizard slid onto the bridge, and then reddish eyes and a wrinkly forehead and long-dirty hair, and up came the head until the chin rested on the bridge and big floppy lips and dirty black teeth that smelled terribly foul. \n “And who are you clip-clopping across my bridge?” growled the troll. \n “It is only I, Little Billy Goat Gruff,” said the little goat. \n “Well, you’re tromping across my bridge and I’m going to eat you up!” said the troll, and his green and yellow tongue licked across the broken teeth. \n “Please don’t eat me up,” said Little Billy Goat Gruff.  “I’m just a small little goat, barely enough for a snack.  If you let me go eat the clover on the other hill, I’ll get bigger and bigger.  You should wait for my brother Middle-sized Billy Goat Gruff—he’s much bigger, and will make a much finer meal.” \n “Well,” growled the troll, “all right.  Go along with you now and get bigger and I’ll eat you later.” \n So Little Billy Goat Gruff continued on to the hill with the fresh clover. \n A little while later Middle-size Billy Goat Gruff came down the path and started across the bridge going Clip-Clop, Clip-Clop, Clip-Clop.  About halfway across the bridge he saw pointy fingers like snakes creep up on the bridge, and a bumpy hand, and another, and a gruesome, ugly face appeared, with a long green nose with a pink wart that had a three long black hairs growing out of it, and big, floppy ears that waved in the breeze and made a shadow on the bridge. \n “And who are you Clip-Clopping across my bridge?” growled the troll. \n “It is only I, Middle-size Billy Goat Gruff,” said the middle brother. \n “Well, you’re tromping across my bridge and I’m going to eat you up!” said the troll, and he slobbered slimy slobs of spit on the bridge. \n “Please don’t eat me up,” said Middle-sized Billy Goat Gruff.  “I’m just a middle-sized goat, enough for a nice snack, but not enough for a good meal.  If you let me go eat the clover on the other hill, I’ll get bigger and bigger.  You should wait for my brother Big Billy Goat Gruff—he’s much bigger, and will make a much finer supper.” \n “Well,” growled the troll, “all right.  Go along with you now and get bigger and I’ll eat you later." \n So Middle-sized Billy Goat Gruff continued on to the hill and joined his little brother grazing and munching on the fresh clover. \n A little while later Big Billy Goat Gruff came down the path and started across the bridge going CLIP-CLOP, CLIP-CLOP, CLIP-CLOP.  About the midpoint of the bridge he saw some muddy, scratchy fingers curl up over the edge of the bridge, and a horrible green face with red eyes popped up, and the troll said, “Who are you CLIP-CLOPPING across my bridge?” \n “It is I,” replied the eldest brother, “Big Billy Goat Gruff.” \n “Well,” said the troll.  “You’re a nice, big goat and I intend to eat you up.”  With that he swung the rest of his ugly body up on the bridge and there he stood, the ugliest troll in the kingdom, with dirty long black hair stuck to the mud all over his body, and hairy warts all over this chest, and ugly scabs on his arms and legs, and nasty weeds growing from the dirt deep in his tummy-button, and toenails that curled in circles till they made a sharp point and scratched lines in the bridge whenever he moved his foot. \n “And after I eat you up,” growled the troll, “I intend to gobble up both your brothers.” \n Big Billy Goat Gruff didn’t say a word.  He just lowered his head with the two great big curvy horns and ran as fast as he could at that ugly troll—CLIPCLOPCLIPCLOPCLIPCLOP—and charged into him so hard, so fast that he blasted that troll to smithereens! \n And Big Billy Goat Gruff continued across the bridge and joined his brothers in the clover and they all three lived happily ever after.';
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
                    case 22:
                        picHolder.style.background = "url(" + image9 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 24:
                        picHolder.style.background = "url(" + image10 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 26:
                        picHolder.style.background = "url(" + image11 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 28:
                        picHolder.style.background = "url(" + image12 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 30:
                        picHolder.style.background = "url(" + image13 + ")"
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
                                    <h1 id="title" className="story-title">Three Billy Goats Gruff</h1>
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

export default Goats;