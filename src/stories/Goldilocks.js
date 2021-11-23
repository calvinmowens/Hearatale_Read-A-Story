import React, { useEffect, useState } from "react";
import '../Story.css';
import Popup from "../component/Popup";
//will need to change to a new json file.
import PostData from '../data/targetwords.json'
import sound from "./goldilocks-and-the-three-bears/audio.mp3"
import image1 from "./goldilocks-and-the-three-bears/art/1.png"
import image2 from "./goldilocks-and-the-three-bears/art/2.png"
import image3 from "./goldilocks-and-the-three-bears/art/3.png"
import image4 from "./goldilocks-and-the-three-bears/art/4.png"
import image5 from "./goldilocks-and-the-three-bears/art/5.png"
import image6 from "./goldilocks-and-the-three-bears/art/6.png"
import image7 from "./goldilocks-and-the-three-bears/art/7.png"
import image8 from "./goldilocks-and-the-three-bears/art/8.png"
import image9 from "./goldilocks-and-the-three-bears/art/9.png"
import image10 from "./goldilocks-and-the-three-bears/art/10.png"
import image11 from "./goldilocks-and-the-three-bears/art/11.png"
import image12 from "./goldilocks-and-the-three-bears/art/12.png"
import image13 from "./goldilocks-and-the-three-bears/art/13.png"
import image14 from "./goldilocks-and-the-three-bears/art/14.png"
import image15 from "./goldilocks-and-the-three-bears/art/15.png"
import image16 from "./goldilocks-and-the-three-bears/art/16.png"
import image17 from "./goldilocks-and-the-three-bears/art/17.png"
import image18 from "./goldilocks-and-the-three-bears/art/18.png"
import image19 from "./goldilocks-and-the-three-bears/art/19.png"


function Goldilocks() {
    const story = "Once upon a time a family of bears lived together in a house of their own in a wood. First there was Baby Bear who was the smallest, and next Momma Bear who was medium sized, and last came Poppa Bear, who was the biggest.  They had each a bowl for their porridge, a little bowl for Baby Bear, and a middle-sized bowl for Momma Bear, and a great big bowl for Poppa Bear. And they had each a chair to sit in, a little chair for Baby Bear; and a middle-sized chair for Momma Bear; and a great big chair for Poppa Bear. And they had each a bed to sleep in, a little bed for Baby Bear; and a middle-sized bed for Momma Bear; and a great big bed for Poppa Bear. One day, after Momma Bear had made the hot porridge for their breakfast, and poured it into their porridge bowls, they walked out into the wood while the porridge was cooling, so that they wouldn’t burn their mouths by beginning too soon to eat it. And while they were walking, Goldilocks came to the house, but there was no one to be seen.  First, she looked in at the window, and then she peeped in at the keyhole, and, seeing nobody in the house, she opened the door. The door was not locked because the bears were good bears, who did nobody any harm, and never suspected that anybody would bother them. So Goldilocks opened the door and went in, and was very well pleased when she saw the porridge on the table. Goldilocks should have waited till the bears came home, and then, perhaps, they would have invited her to breakfast; for they were good bears—perhaps a little rough, as the way of bears is, but still very good-natured and hospitable. But Goldilocks was an impatient little girl, and not as polite as she should have been, and she set about helping herself. So first she tasted the porridge of Poppa Bear, and that was too hot for her.  And then she tasted the porridge of Momma Bear; and that was too cold for her.  And finally she went to Baby Bear’s porridge, and tasted that, and that was just right.  And Goldilocks liked it so well, that she ate it all up and left the bowl empty. Then Goldilocks sat down in Poppa Bear’s chair, and that was too hard for her. And then she sat down in Momma Bear’s chair, and that was too soft for her.  And then she sat down in Baby Bear’s chair, and that was just right, so there she sat till the bottom of the chair came out, and down came she, plump upon the ground. Then Goldilocks went up stairs into the bedroom in which the three bears slept. And first she lay down upon Poppa Bear’s bed, but there were too many covers.  And next she lay down upon Momma Bear’s bed, but there weren’t enough covers. And then she lay down upon Baby Bear’s bed, and that was just right. So she covered herself up comfortably, and lay there till she fell fast asleep. By this time the three bears thought their porridge would be cool enough, so they came home to breakfast. Now Goldilocks had left Poppa Bear’s wooden spoon standing in his porridge, and when he saw it he said his great gruff voice, “SOMEBODY HAS BEEN EATING MY PORRIDGE!” And when Momma Bear looked at hers, she saw that her silver spoon was standing in it too, and in her sweet voice she said, “Somebody has been eating my porridge!” Then Baby Bear looked at his, and there was the little spoon in the porridge bowl, but the porridge was all gone, and in his little, small, wee voice Baby Bear said, “Somebody has been eating my porridge, and has eaten it all up!” When they noticed all this the three bears realized that someone had come into their house and bothered their things and they began to look all around them.  Now Goldilocks had not put the hard cushion straight when she got up from Poppa Bear’s chair, and in his great gruff voice he said, “SOMEBODY HAS BEEN SITTING IN MY CHAIR!” And Goldilocks had squatted down Momma Bear’s soft cushion and in her sweet voice she said, “Somebody has been sitting in my chair!” And you know what Goldilocks had done to the third chair, and in his little, small, wee voice Baby Bear said, “Somebody has been sitting in my chair, and has broken it all to pieces!” Then the three bears thought they needed to make a careful search, so they went up stairs into their bedroom.  Now Goldilocks had pulled the pillow of Poppa Bear out of its place, and when he saw that Poppa Bear said in his great gruff voice, “SOMEBODY HAS BEEN LYING IN MY BED!” And Goldilocks had left a hollow empty place in Momma Bear’s bed, and in her sweet voice she said, “Somebody has been lying in my bed!” And when Baby Bear came to look at his bed, there wasn’t a hollow empty place but a round high place under the cover, and there was the pillow in its place but it wasn’t empty, for there upon the pillow was Goldilocks’s face covered by her golden hair, and in his little, small, wee voice Baby Bear said, “Somebody has been lying in my bed, there she is!” Goldilocks had heard in her sleep the great, rough, gruff voice of Poppa Bear, but she was so fast asleep that it was no more to her than the roaring of wind or the rumbling of thunder. And she had heard the sweet voice of Momma Bear, but it was only as if she had heard birds singing in a dream. But when she heard the little, small, wee voice of Baby Bear, it was so surprising that it awakened her at once. Up she popped, and when she saw the three bears on one side of the bed, she tumbled herself out at the other side, and ran to the window.  Now the window was open, because the bears, like good, tidy bears as they were, always opened their bedroom window when they got up in the morning. Out Goldilocks jumped and she ran away as fast as her legs would carry her, and the three little bears never ever saw again even one little golden hair of her golden locks.";
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
                    case 20:
                        picHolder.style.background = "url(" + image2 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 30:
                        picHolder.style.background = "url(" + image3 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 40:
                        picHolder.style.background = "url(" + image4 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 50:
                        picHolder.style.background = "url(" + image5 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 55:
                        picHolder.style.background = "url(" + image6 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 63:
                        picHolder.style.background = "url(" + image7 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 88:
                        picHolder.style.background = "url(" + image8 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 134:
                        picHolder.style.background = "url(" + image9 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 157:
                        picHolder.style.background = "url(" + image10 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 182:
                        picHolder.style.background = "url(" + image11 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 188:
                        picHolder.style.background = "url(" + image12 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 199:
                        picHolder.style.background = "url(" + image13 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 228:
                        picHolder.style.background = "url(" + image14 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 248:
                        picHolder.style.background = "url(" + image15 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 270:
                        picHolder.style.background = "url(" + image16 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 297:
                        picHolder.style.background = "url(" + image17 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 331:
                        picHolder.style.background = "url(" + image18 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 353:
                        picHolder.style.background = "url(" + image19 + ")"
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
        let EndWord = 950;

        let DivElmnt;
        let scrollInterval;
        let currentScrollPlace = 0;

        // * Autoscroll can be removed by removing/commenting out the following line.
        setTimeout(scrollDiv_init, 5000);

        function scrollDiv_init() {
            console.log("start scroll")
            DivElmnt = document.getElementById('story-scroll');
            DivElmnt.scrollTop = 0;
            DivElmnt.word = 0;

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
                        {/* Make this into a dynamic object */}
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
                                    <h1 id="title" className="story-title">Goldilocks and The Three Bears</h1>
                                    <audio id="story" controls autoPlay controlslist="nodownload noplaybackrate">
                                        <source src={sound} type="audio/mp3" />
                                    </audio>
                                </div>
                                <div className="highlight-line" id="highlight-line"></div>
                                <div id="story-scroll" className="story-mid">
                                    <p className="story-text">
                                        {story.split(" ").map((ele) => (getTag(ele, handleWordClick)))}
                                    </p>
                                    <p id="story-spacer">
                                        <br></br>
                                    </p>
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

export default Goldilocks;