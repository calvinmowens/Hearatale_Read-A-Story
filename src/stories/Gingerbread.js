import React, { useEffect, useState } from "react";
import '../Story.css';
import Popup from "../component/Popup";
//will need to change to a new json file.
import PostData from '../data/targetwords.json'
import sound from "./the-gingerbread-man/audio.mp3"
import image1 from "./the-gingerbread-man/art/1.png"
import image2 from "./the-gingerbread-man/art/2.png"
import image3 from "./the-gingerbread-man/art/3.png"
import image4 from "./the-gingerbread-man/art/4.png"
import image5 from "./the-gingerbread-man/art/5.png"
import image6 from "./the-gingerbread-man/art/6.png"
import image7 from "./the-gingerbread-man/art/7.png"
import image8 from "./the-gingerbread-man/art/8.png"
import image9 from "./the-gingerbread-man/art/9.png"
import image10 from "./the-gingerbread-man/art/10.png"
import image11 from "./the-gingerbread-man/art/11.png"
import image12 from "./the-gingerbread-man/art/12.png"



function Gingerbread() {
    const story = 'Once upon a time a grandmother had baked a cake and some cupcakes and cookies and had just a little dough left over and decided to sprinkle it with ginger spice to bake a gingerbread man.  She shaped him on her baking pan, with two arms and two legs, two nice big raisins for eyes, and a stripe of pink icing for a mouth, and sprinkled him all over with ginger spice, but she didn’t know a mischievous pixie had sprinkled some magic pixie dust in her ginger sprinkling can. \n The grandmother slid the pan into the oven, and let it bake, but when opened the oven door, she had hardly set the pan on the table when the gingerbread man hopped up, winked a raisin eye, and said, “Run, run, fast as you can.  You can’t catch me, I’m the gingerbread man!” \n He hopped off the table, skipped over the cat’s food dish, and squeezed out where the door had just barely cracked open as the grandfather was walking in. \n “Stop!” shouted the grandfather.  “Please let me have a nibble!” \n “Never!” laughed the gingerbread man as he raced away.  “I ran away from your wife and I’ll run away from you.  Run, run, fast as you can.  You can’t catch me, I’m the gingerbread man!” \n The grandfather chased after him, with the grandmother just behind.   The cat swatted at him as he ran past, and meowed, “Please stop!  I only want one quick lick!” \n “No icky lick for you, whisker face,” called the gingerbread man.  “I’m faster than your master and faster than your mistress and most of all I’m faster than you.  Run, run, fast as you can.  You can’t catch me, I’m the gingerbread man!” \n A few steps farther and the gingerbread man could have jumped over the sleeping dog’s tale, but instead he leapt up high and landed square in the middle of it.  “Rowwrrrr!” the dog growled, starting up in surprise. \n “Gotcha, you flea-bitten sack of bones,” called the gingerbread man. \n “I’ll snatch a bite out of you,” barked the dog. \n “Says you,” and the gingerbread man made a rude sound blubbering air between his tongue and his lips.  “You’re too slow!  You’re slow like your master and your mistress and even slower than the cat!  Run, run, fast as you can!  You can’t catch me, I’m the gingerbread man!” \n The dog chased after him, ahead of the cat and the grandpa and the grandma, but the gingerbread man sped easily ahead of them all, down past the barn where a cow was drowsing away, slowly chewing its cud.  Just as he whisked by the cow glanced up and mooed, “Stop, please let me have a nibble!” \n “Forget about it!” The gingerbread man laughed and stuck out his tongue. “Your master can’t catch me, nor your mistress, nor the cat, nor dog, nor you!” \n “Run, run, fast as you can.  You can’t catch me, I’m the gingerbread man!” \n The cow trotted after him, with the dog and cat and grandfather and grandmother following, and away the gingerbread man fled, past a horse grazing on clover and alfalfa grass in the pasture. \n “You smell delicious,” neighed the horse.  “May I please take just a tiny nip?” \n “No way, hay breath!” shouted the gingerbread man, laughing.  “I can outrun your master and mistress and the cat and dog and cow, and I can outrun you.  Run, run, fast as you can.  You can’t catch me, I’m the gingerbread man!” \n The horse cantered after him, with the cow trotting behind, and the dog and cat following, and grandfather and grandmother huffing and puffing trying to keep up. \n A shepherd boy out watching over the sheep was feeling very hungry, wishing it were dinner time, when the gingerbread man flashed past him.  “Stop!” shouted the boy.  “Please stop!  I must have just one bite!” \n “In your dreams!” called the gingerbread man, and he hopped backward a few steps to make a funny face as the boy raced to catch him. \n “Nobody can catch me—grandad, grandma, cat, dog, cow, horse—and not some goofy-looking, flat-footed shepherd boy!  Run, run, fast as you can!  You can’t catch me, I’m the gingerbread man!” \n On he raced, grinning and cocky, until he came to a river, and then he halted, for he knew he couldn’t swim in the water. \n Then over by a blackberry bush he spotted a red fox curled with its fluffy tail brushing its nose.  The gingerbread man thought about racing down the river side to look for a bridge. \n “Don’t even think about it, fox!” he said.  “You’re too slow for me.  Run, run, fast as you can.  You can’t catch me, I’m the gingerbread man!” \n But the fox said calmly, “Don’t worry, gingerbread man.   I’ve just dined on a fine fat rabbit, so why would I need to eat you?” \n Then he stood and took a step forward.  “Do you need a way across the river?” \n “Maybe I do,” said the gingerbread man, “and maybe I don’t.” \n “Well,” said the fox, taking another step forward, “just hop on my tail.  I can lift you above the water as I swim across.” \n The gingerbread man thought a minute, and listened to the sounds of the shepherd boy and horse and cow and dog and cat and grandfather and grandmother racing to catch him. \n “Okay,” he said.  “But no tricks!” \n He hopped on the fox’s bushy tail and the fox swam out a little way into the river. \n “My tail’s getting wet and sinking in the river,” said the fox. “Hop up on my back and stay dry.”  So the gingerbread man hopped on the fox’s back. \n Then, when they’d gone halfway across, the fox said, “The river water is splashing on my back.  Hop up on my head so you don’t get wet.”  So the gingerbread man hopped up between the fox’s ears. \n They were nearly to the shore when the fox said, “I’m tired and can’t keep my whole head up any longer.  Hop on the tip of my nose to stay dry.”  The gingerbread man hopped on the tip of the fox’s nose.  But just as soon as they reached the other side of the river the fox flipped his nose up in the air, tossed gingerbread man high, caught him, and swallowed him whole. \n The gingerbread man had been faster than the grandmother and grandfather, the cat, the dog, the cow, the horse, and even the shepherd boy—he was quicker than them all, but the fox was quicker still.';
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
                                    <h1 id="title" className="story-title">The Gingerbread Man</h1>
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
                            <form action="/GingerbreadStoryQuiz">
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

export default Gingerbread;