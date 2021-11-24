import React, { useEffect, useState } from "react";
import '../Story.css';
import Popup from "../component/Popup";
//will need to change to a new json file.
import PostData from '../data/targetwords.json'
import sound from "./rumplestiltskin/audio.mp3"
import image1 from "./rumplestiltskin/art/1.png"
import image2 from "./rumplestiltskin/art/2.png"
import image3 from "./rumplestiltskin/art/3.png"
import image4 from "./rumplestiltskin/art/4.png"
import image5 from "./rumplestiltskin/art/5.png"
import image6 from "./rumplestiltskin/art/6.png"
import image7 from "./rumplestiltskin/art/7.png"
import image8 from "./rumplestiltskin/art/8.png"
import image9 from "./rumplestiltskin/art/9.png"
import image10 from "./rumplestiltskin/art/10.png"
import image11 from "./rumplestiltskin/art/11.png"
import image12 from "./rumplestiltskin/art/12.png"
import image13 from "./rumplestiltskin/art/13.png"



function Rumplestiltskin() {
    const story = "By the side of a forest, in a country a long way off, ran a fine stream of water.  And upon the stream there stood a mill house with a big wooden wheel that the water turned round and round to grind the wheat into flour for people to cook and make their bread. In the mill house lived the miller, and he had a very beautiful daughter. She was, moreover, very shrewd and smart and clever; and the miller was so proud of her, that he one day told the king of the land, who used to come and hunt in the wood, that his daughter could spin gold out of straw. Now this king was very fond of money; and when he heard the miller boasting and bragging, the king began to feel especially greedy, and he sent for the girl to be brought before him. Then he led her to a chamber in his palace where there was a great heap of straw, and the king gave her a spinning-wheel—that’s a wooden wheel that spinster women would use to twist sheep’s wool into yarn for making sweaters and coats and mittens. The king told the miller’s daughter, “All this straw must be spun into gold before morning, if you don’t want to lose your life.” It was in vain and didn’t help when the poor maiden said that her father had been only bragging and making a silly boast, and that she could do no such thing as spin straw into gold.  The king locked her chamber door, and she was left alone with the spinning wheel. She sat down in one corner of the room, and began to cry and bewail her hard fate, when suddenly the door opened, and a strange, droll-looking little man hobbled in, and said, “Good morning to you, my young lady.  What are you weeping for?” “Alas!” said she, “I must spin this straw into gold, and I know not how.'” “What will you give me,” said the little hobgoblin man, “to do it for you?” “My necklace,” replied the maiden. He took her at her word, that is, he believed her, and he sat himself down to work at the spinning wheel, and whistled and sang: “Round about, round about, Lo and behold! Reel away, spin away, Straw into gold!” And round about the wheel went merrily, the work was quickly done, and the straw was all spun into gold. When the king came and saw this, he was greatly astonished and surprised, and was very pleased, but his heart grew still more greedy for gold, and he shut up the poor miller’s daughter again with a fresh new task. Then she knew not what to do, and sat down once more to weep and bewail her fate, but the dwarf man soon opened the door, and said, “What will you give me to do your task?” “The ring on my finger,” said she. So her little friend took the ring, and began to work at the wheel again, and whistled and sang: “Round about, round about, Lo and behold! Reel away, spin away, Straw into gold!” He worked through the night and long before morning, all was done again. The king was greatly delighted to see all this glittering treasure, but still he wasn’t satisfied, so he took the miller’s daughter to a yet larger heap of straw, and said, “All this straw must be spun into gold tonight, and if it is, I shall marry you and you shall be my queen.” As soon as she was alone that hobgoblin dwarf man came in, and said, “What will you give me to spin gold for you this third time?” “I have nothing left,” said she. “Then say you will give me,” said the little man, “the first little child that you may have when you are queen.” “That may never be,” thought the miller’s daughter, and as she knew no other way to get her task done, she said she would do what he asked. Round went the wheel again to the old song: “Round about, round about, Lo and behold! Reel away, spin away, Straw into gold!” And the strange little man once more spun the heap of straw into gold.  The king came in the morning, and, finding all he wanted, was forced to keep his word—so he married the miller’s daughter, and she really became queen. Some time later, at the birth of her first little child, she was very glad, and forgot the little hobgoblin dwarf man, and what she had promised him. But one day he came into her room, where she was sitting playing with her baby, and he reminded her of it all. Then she cried and grieved sorely and sadly at her unhappiness and misfortune, and he said if she would give him all the wealth and gold of the kingdom he would leave her alone. Finally, her tears softened him, and he said, “I will give you three days to wait, and if during that time you tell me my name, you shall keep your child.” Now the queen lay awake all night, thinking of all the odd strange names that she had ever heard, and she sent messengers all over the land to find out new ones. The next day the little man came, and she began guessing: TIMOTHY, ICHABOD, BENJAMIN, JEREMIAH, and all the names she could remember, but to all and each of them he said, Madam, that is not my name.” On the second day she began with all the comical, funny names she could think of: BOWLEGS, NUMBSKULL, GOOFBALL, and so on.  But the little gentleman still said to every one of her guesses, “Madam, that is not my name.” The third day one of the messengers came back, and said, “I have traveled two days without hearing of any other names, but yesterday, as I was climbing a high hill, among the trees of the forest, by the poison ivy, where the fox and the rabbit tell each other good night, I saw a little hut, a tiny house made of thorn sticks and branches, and in front of the hut burnt a little campfire, and round about the little campfire a funny little dwarf hobgoblin man was dancing upon one leg, and singing: “Happily the feast I’ll make. Today I’ll cook, tomorrow bake— Merrily I’ll dance and sing, For next day will a stranger bring. Little does my lady dream Rumpelstiltskin is my name!” When the queen heard this she jumped for joy, and as soon as her little hobgoblin dwarf friend came she sat down upon her throne, and called all her court around to enjoy the fun.  And the babysitter stood by her side with the baby in her arms, as if it was quite ready to be given up. Then the little man began to chuckle at the thought of having the poor child to take home with him to his hut in the woods, and he cried out, “Now, lady, what is my name?” “Is it JOHN?” asked she. “No, madam!” “Is it TOM?” “No, madam!” “Is it JIMMY?” “It is not.” “Can your name be— RUMPELSTILTSKIN?” said the lady slyly. “Some witch told you that—   Some witch told you that!”cried the little hobgoblin dwarf man, and in a rage slammed his right foot so deep into the floor that it went into the basement and he couldn’t pull it out, no matter how hard he tried.  And that made him so mad that he slammed his left foot even deeper into the ground, and it went so deep that it didn’t stop and it kept on going and pulled him after it, and he disappeared and nobody ever saw him again and he never, ever bothered anybody ever again.  And the babysitter laughed and the baby giggled and all the queen’s friends smiled, and the queen and king and their little baby lived happily ever after.";
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
                    case 32:
                        picHolder.style.background = "url(" + image2 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 69:
                        picHolder.style.background = "url(" + image3 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 149:
                        picHolder.style.background = "url(" + image4 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 100:
                        picHolder.style.background = "url(" + image5 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 200:
                        picHolder.style.background = "url(" + image6 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 232:
                        picHolder.style.background = "url(" + image7 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 262:
                        picHolder.style.background = "url(" + image8 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 324:
                        picHolder.style.background = "url(" + image9 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 358:
                        picHolder.style.background = "url(" + image10 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 381:
                        picHolder.style.background = "url(" + image11 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 401:
                        picHolder.style.background = "url(" + image10 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 454:
                        picHolder.style.background = "url(" + image12 + ")"
                        document.getElementById("picHolder").style.backgroundSize = "contain"
                        document.getElementById("picHolder").style.backgroundPosition = "center"
                        document.getElementById("picHolder").style.backgroundRepeat = "no-repeat"
                        break;
                    case 486:
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
                                    <h1 id="title" className="story-title">Rumplestiltskin</h1>
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

export default Rumplestiltskin;