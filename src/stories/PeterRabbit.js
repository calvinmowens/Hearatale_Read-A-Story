import React, { useEffect, useState } from "react";
import '../Story.css';
import Popup from "../component/Popup";
//will need to change to a new json file.
import PostData from '../data/targetwords.json'
import sound from "./peter-rabbit/audio.mp3"
import image1 from "./peter-rabbit/art/1.png"
import image2 from "./peter-rabbit/art/2.png"
import image3 from "./peter-rabbit/art/3.png"
import image4 from "./peter-rabbit/art/4.png"
import image5 from "./peter-rabbit/art/5.png"
import image6 from "./peter-rabbit/art/6.png"
import image7 from "./peter-rabbit/art/7.png"
import image8 from "./peter-rabbit/art/8.png"
import image9 from "./peter-rabbit/art/9.png"
import image10 from "./peter-rabbit/art/10.png"
import image11 from "./peter-rabbit/art/11.png"
import image12 from "./peter-rabbit/art/12.png"
import image13 from "./peter-rabbit/art/13.png"
import image14 from "./peter-rabbit/art/14.png"
import image15 from "./peter-rabbit/art/15.png"
import image16 from "./peter-rabbit/art/16.png"
import image17 from "./peter-rabbit/art/17.png"
import image18 from "./peter-rabbit/art/18.png"
import image19 from "./peter-rabbit/art/19.png"
import image20 from "./peter-rabbit/art/20.png"
import image21 from "./peter-rabbit/art/21.png"
import image22 from "./peter-rabbit/art/22.png"
import image23 from "./peter-rabbit/art/23.png"
import image24 from "./peter-rabbit/art/24.png"
import image25 from "./peter-rabbit/art/25.png"



function PeterRabbit() {
    const story = 'Once upon a time there were four little rabbits, and their names were Flopsy, Mopsy, Cotton-tail, and Peter.  They lived with their mother in a sand-bank, underneath the root of a very big fir tree. \n "Now, my dears," said old Mrs. Rabbit one morning, "You may go into the fields or down the lane, but don\'t go into Mr. McGregor\'s garden. Your father had an accident there; he was put in a pie by Mrs. McGregor.  Now run along and don\'t get into mischief. I am going out." \n Then old Mrs. Rabbit took a basket and her umbrella and went through the wood to the baker\'s.  She bought a loaf of brown bread and five currant buns. \n Flopsy, Mopsy and Cotton-tail who were good little bunnies went down the lane together to gather blackberries. \n But Peter who was very naughty, ran straight away to Mr. McGregor\'s garden and squeezed under the gate! \n First he ate some lettuces and some French beans, and then \n He. Ate. Some. Radishes. \n And then, feeling rather sick, he went to look for some parsley. \n But round the end of a cucumber frame, whom should he meet but Mr. McGregor! \n Mr. McGregor was on his hands and knees planting out young cabbages, but he jumped up and ran after Peter, waving a rake and calling out "Stop thief!" \n Peter was most dreadfully frightened; he rushed all over the garden, for he had forgotten the way back to the gate.  He lost one shoe among the cabbages, and the other amongst the potatoes. \n After losing them, he ran on four legs and went faster so that I think he might have got away altogether if he had not unfortunately run into a gooseberry net and got caught by the large buttons on his jacket.  It was a blue jacket with brass buttons, quite new. \n Peter gave himself up for lost and shed big tears; but his sobs were overheard by some friendly sparrows who flew to him in great excitement and implored him to exert himself. \n Mr. McGregor came up with a sieve which he intended to pop on the top of Peter, but Peter wriggled out just in time. \n Leaving his jacket behind him, he rushed into the tool-shed and— jumped into a can.  It would have been a beautiful thing to hide in, if it had not had so much water in it. \n Mr. McGregor was quite sure that Peter was somewhere in the tool-shed, perhaps hidden underneath a flower-pot.  He began to turn them over carefully, looking under each. \n Presently Peter sneezed "Kertyschoo!"  Mr. McGregor was after him in no time, and tried to put his foot upon Peter, who jumped out of a window, upsetting three plants. \n Peter sat down to rest; he was out of breath and trembling with fright, and he had not the least idea which way to go. Also he was very damp with sitting in that can. \n After a time he began to wander about, going \n lippity— \n lippity— \n not very fast and looking all around. \n He found a door in a wall; but it was locked and there was no room for a fat little rabbit to squeeze underneath.  An old mouse was running in and out over the stone doorstep, carrying peas and beans to her family in the wood. Peter asked her the way to the gate but she had such a large pea in her mouth she could not answer. She only shook her head at him.  Peter began to cry. \n Then he tried to find his way straight across the garden, but he became more and more puzzled. Presently he came to a pond where Mr. McGregor filled his water-cans. A white cat was staring at some gold-fish; she sat very, very still, but now and then the tip of her tail twitched as if it were alive. Peter thought it best to go away without speaking to her.  He had heard about cats from his cousin, little Benjamin Bunny. \n He went back towards the tool-shed, but suddenly, quite close to him, he heard the noise of a hoe—scr-r-ritch, scratch, scratch, scritch.  Peter scuttered underneath the bushes, but presently as nothing happened, he came out and climbed upon a wheelbarrow, and peeped over.  The first thing he saw was Mr. McGregor hoeing onions. His back was turned towards Peter and beyond him was the gate! \n Peter got down very quietly off the wheel-barrow and started running as fast as he could go, along a straight walk behind some blackcurrant bushes. \n Mr. McGregor caught sight of him at the corner, but Peter did not care. He slipped underneath the gate and was safe at last in the wood outside the garden. \n Mr. McGregor hung up the little jacket and the shoes for a scare-crow to frighten the blackbirds. \n Peter never stopped running or looked behind him till he got home to the big fir-tree. \n He was so tired that he flopped down upon the nice soft sand on the floor of the rabbit hole, and shut his eyes. \n His mother was busy cooking; she wondered what he had done with his clothes.  It was the second little jacket and pair of shoes that Peter had lost in a fortnight! \n I am sorry to say that Peter was not very well during the evening. His mother put him to bed and made some camomile tea; and she gave a dose of it to Peter! "One teaspoonful to be taken at bedtime." \n But... Flopsy, Mopsy and Cottontail had bread and milk and blackberries for supper. \n ';
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
                    case 32:
                        picHolder.style.background = "url(" + image14 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 34:
                        picHolder.style.background = "url(" + image15 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 36:
                        picHolder.style.background = "url(" + image16 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 38:
                        picHolder.style.background = "url(" + image17 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 40:
                        picHolder.style.background = "url(" + image18 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 42:
                        picHolder.style.background = "url(" + image19 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 44:
                        picHolder.style.background = "url(" + image20 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 46:
                        picHolder.style.background = "url(" + image21 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 48:
                        picHolder.style.background = "url(" + image22 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 50:
                        picHolder.style.background = "url(" + image23 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 52:
                        picHolder.style.background = "url(" + image24 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 54:
                        picHolder.style.background = "url(" + image25 + ")"
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
                                    <h1 id="title" className="story-title">Peter Rabbit</h1>
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

export default PeterRabbit;