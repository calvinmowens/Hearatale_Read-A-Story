import React, { useEffect, useState } from "react";
import '../Story.css';
import Popup from "../component/Popup";
//will need to change to a new json file.
import PostData from '../data/targetwords.json'
import sound from "./the-little-engine-that-could/audio.mp3"
import image1 from "./the-little-engine-that-could/art/1.png"
import image2 from "./the-little-engine-that-could/art/2.png"
import image3 from "./the-little-engine-that-could/art/3.png"
import image4 from "./the-little-engine-that-could/art/4.png"


function Engine() {
    const story = 'Once there was a Little Train Engine pulling a long row of Boxcars; she was flying across the country with a load of Christmas toys for the children who lived way over on the other side of the mountain.  Her wheels went around very fast, squealing along on the track.  Choo, choo!  Choo, choo!  Choo, choo!  She was happy because she was carrying that load of toys for the children and she had just enough time to get to the end of her journey before the last Christmas shopping. \n But all of a sudden, bang!  Right at the foot of the mountain the Little Engine broke down!  Chug!  Chug!  Squeak!  The wheels slid along the track and then stood perfectly still.  She couldn’t go an inch further.  And how in the world could she ever get across the mountains now in time for the children’s Christmas? \n Rag dolls, paper dolls, china dolls, little toy wagons and carts, dolls’ houses and Noah’s arks, tops and bats and balls—they were all to stay packed away useless, and the children on the other side to go without them for Christmas?  The little Train felt very sad as she stood there hoping for help.  Then suddenly, toot, toot, toot!  Along came a Great Strong Engine, all finely cleaned up and shining with his number plate scoured and polished and bright.  He had just finished his work of pulling a fine long passenger train, with sleeping cars and a dining car.  That was something to do!  He was puffing and blowing with pride. \n “O Big, Big Engine!” cried the Train while her Boxcars all joined in the chorus.  “Will you please take us over the mountain?  Our engine has broken down, and we’re loaded with Christmas toys for the children on the other side.  Will you help us, help us, help us?” \n But the Great Big Passenger Engine blew off steam with a shriek.  He puffed himself up with pride.  He made himself look very huge. \n “It’s not my business,” he roared, “to pull such a little nobody!  I pull much finer trains with sleeping cars and a dining car.  I can’t be bothered with you!  Puff, Puff!  Ding, dong!  Wheu-eu-eu!” \n And he switched himself round on a sidetrack, passed the poor little Train-of-Cars and soon left her helpless, far behind. \n Well, the little Train-of-Cars felt sad but she never left off hoping that some one would come to help her. \n Pretty soon, toot, toot!  There came a Great Strong Freight Engine.  He had just pulled a freight train over the top of the mountain and was on his way back to the roundhouse to take a little rest.  But the Train called to this Engine, too, while all her Cars joined in the chorus: \n “O Big, Big Engine, please, will you take us over the mountain?  Our engine has broken down, and we’re loaded with Christmas toys for the children on the other side.  Will you help us, help us, help us?” \n But the Big Freight Engine snorted.  He snorted and snorted and puffed.  And he sent up  out of his smokestack a shower of angry sparks. \n “I’ve done enough work for today!  Yess-s-s S-s-sir-ee!” he hissed.  “I’m off for a little rest.  I’ve done enough, done enough.  I’ve done enough, done enough!”  And he switched himself round on the sidetrack, passed the poor little Train-of-Boxcars, and soon left her helpless, far behind! \n Well, the little Train-of-Boxcars felt sad; she was very, very sad now; but she never left off hoping that some one would come to help her. \n Pretty soon dragging along there came slowly up the track a rusty, dusty, dingy Engine, just about the size of the one that had been pulling the Train.  He sighed and he moaned and he grunted!  He rumbled and grumbled and groaned.  But the little Train called out while her Boxcars all joined in the chorus: \n “O Engine, Engine, please, will you take us over the mountain?  Our engine has broken down and we’re loaded with Christmas toys for the children on the other side.  Will you help us, help us, help us?” \n Then the Dingy, Dusty, Rusty Engine groaned and grunted and grumbled: \n “I never could pull you!  I couldn’t!  I haven’t the strength!  No, no!  I never could, I never could!  I never could, I never could!”  And he dragged himself round on the sidetrack, passed the poor little Train-of-Boxcars and soon left her helpless, far behind! \n Well, the little Train-of-Boxcars felt sad; she was very, very, very sad now.  Yet still she never stopped hoping that some one would come to help her. \n So after a long, long time, along came a Little, Small Engine, an engine so very small it seemed useless to ask her for help; yet she had one bright, lively eye shining out in her head, and she was humming and hurrying, whistling and ringing her bell in the very liveliest way. \n So the little Train cried out, while her Boxcars all joined in the chorus: \n “Little Engine, please, could you take us over the mountain?  Our engine has broken down, and we’re loaded with Christmas toys for the children on the other side.  Can you help us, help us, help us?” \n Now the Little, Small Engine had never been far away from the train freight yard; she had spent all her days in switching boxcars from one track to another track so they could hook up to be pulled by the big train engines.  But think of all those children without their Christmas toys!  She couldn’t let such a thing happen!  So she answered: \n “I think I can!” \n Then she came straight up to the Train, caught hold and started to pull!  She tugged and she tugged and she pulled!  And pretty soon, Ding, dong!  Ding, dong!  Puff, puff!  Chug, chug!  The Train-of-Boxcars began to move!  And the Little Small Engine kept toiling, and tugging and tugging and pulling.  And as she tugged she kept puffing, slowly, very slowly: \n “I—think—I—can!  I—think—I—can!” \n By and by she ran steadily, smoothly up the track and then she pulled very fast: “I think I can!  I think I can!  I think I can!” \n At last, at last, and at last she reached the top of the mountain!  She stood on top of the world!  She’d climbed that big long slope!  She’d done it!  She’d done it!  She’d done it!  And there way down below lay the city where the children lived to whom she was bearing the toys.  She gave one puff of joy, just one great big long puff! \n “I thought I could!” she puffed. \n Then down she started sliding, faster, faster, faster.  And as she went she kept puffing: “I thought I could!  I thought I could!  I thought I could!  I thought I could!  I thought I could!  I thought I could!” \n And the little Train-of-Boxcars squealed merrily behind her, and the children down in the city got their Christmas toys.';
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
                                    <h1 id="title" className="story-title">The Little Engine That Could</h1>
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

export default Engine;