import React, { useEffect, useState } from "react";
import './Story.css';
import Popup from "./component/Popup";
import PostData from './data/targetwords.json'



function Story() {
    const story = 'Once upon a time a family of bears lived together in a house of their own in a wood. First there was Baby Bear who was the smallest, and next Momma Bear who was medium sized, and last came Poppa Bear, who was the biggest.  They had each a bowl for their porridge, a little bowl for Baby Bear, and a middle-sized bowl for Momma Bear, and a great big bowl for Poppa Bear. And they had each a chair to sit in, a little chair for Baby Bear; and a middle-sized chair for Momma Bear; and a great big chair for Poppa Bear. And they had each a bed to sleep in, a little bed for Baby Bear; and a middle-sized bed for Momma Bear; and a great big bed for Poppa Bear. \n One day, after Momma Bear had made the hot porridge for their breakfast, and poured it into their porridge bowls, they walked out into the wood while the porridge was cooling, so that they wouldn’t burn their mouths by beginning too soon to eat it. \n And while they were walking, Goldilocks came to the house, but there was no one to be seen.  First, she looked in at the window, and then she peeped in at the keyhole, and, seeing nobody in the house, she opened the door. The door was not locked because the bears were good bears, who did nobody any harm, and never suspected that anybody would bother them. So Goldilocks opened the door and went in, and was very well pleased when she saw the porridge on the table. Goldilocks should have waited till the bears came home, and then, perhaps, they would have invited her to breakfast; for they were good bears—perhaps a little rough, as the way of bears is, but still very good-natured and hospitable. But Goldilocks was an impatient little girl, and not as polite as she should have been, and she set about helping herself. \n So first she tasted the porridge of Poppa Bear, and that was too hot for her.  And then she tasted the porridge of Momma Bear; and that was too cold for her.  And finally she went to Baby Bear’s porridge, and tasted that, and that was just right.  And Goldilocks liked it so well, that she ate it all up and left the bowl empty. \n Then Goldilocks sat down in Poppa Bear’s chair, and that was too hard for her. And then she sat down in Momma Bear’s chair, and that was too soft for her.  And then she sat down in Baby Bear’s chair, and that was just right, so there she sat till the bottom of the chair came out, and down came she, plump upon the ground. \n Then Goldilocks went up stairs into the bedroom in which the three bears slept. And first she lay down upon Poppa Bear’s bed, but there were too many covers.  And next she lay down upon Momma Bear’s bed, but there weren’t enough covers. And then she lay down upon Baby Bear’s bed, and that was just right. So she covered herself up comfortably, and lay there till she fell fast asleep. \n By this time the three bears thought their porridge would be cool enough, so they came home to breakfast. Now Goldilocks had left Poppa Bear’s wooden spoon standing in his porridge, and when he saw it he said his great gruff voice, “SOMEBODY HAS BEEN EATING MY PORRIDGE!” \n And when Momma Bear looked at hers, she saw that her silver spoon was standing in it too, and in her sweet voice she said, “Somebody has been eating my porridge!” \n Then Baby Bear looked at his, and there was the little spoon in the porridge bowl, but the porridge was all gone, and in his little, small, wee voice Baby Bear said, “Somebody has been eating my porridge, and has eaten it all up!” \n When they noticed all this the three bears realized that someone had come into their house and bothered their things and they began to look all around them.  Now Goldilocks had not put the hard cushion straight when she got up from Poppa Bear’s chair, and in his great gruff voice he said, “SOMEBODY HAS BEEN SITTING IN MY CHAIR!” \n And Goldilocks had squatted down Momma Bear’s soft cushion and in her sweet voice she said, “Somebody has been sitting in my chair!” \n And you know what Goldilocks had done to the third chair, and in his little, small, wee voice Baby Bear said, “Somebody has been sitting in my chair, and has broken it all to pieces!” \n Then the three bears thought they needed to make a careful search, so they went up stairs into their bedroom.  Now Goldilocks had pulled the pillow of Poppa Bear out of its place, and when he saw that Poppa Bear said in his great gruff voice, “SOMEBODY HAS BEEN LYING IN MY BED!” \n And Goldilocks had left a hollow empty place in Momma Bear’s bed, and in her sweet voice she said, “Somebody has been lying in my bed!” \n And when Baby Bear came to look at his bed, there wasn’t a hollow empty place but a round high place under the cover, and there was the pillow in its place but it wasn’t empty, for there upon the pillow was Goldilocks’s face covered by her golden hair, and in his little, small, wee voice Baby Bear said, “Somebody has been lying in my bed, there she is!” \n Goldilocks had heard in her sleep the great, rough, gruff voice of Poppa Bear, but she was so fast asleep that it was no more to her than the roaring of wind or the rumbling of thunder. And she had heard the sweet voice of Momma Bear, but it was only as if she had heard birds singing in a dream. But when she heard the little, small, wee voice of Baby Bear, it was so surprising that it awakened her at once. Up she popped, and when she saw the three bears on one side of the bed, she tumbled herself out at the other side, and ran to the window.  Now the window was open, because the bears, like good, tidy bears as they were, always opened their bedroom window when they got up in the morning. Out Goldilocks jumped and she ran away as fast as her legs would carry her, and the three little bears never ever saw again even one little golden hair of her golden locks. \n';

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
                                    <h1 id="title" className="story-title">Goldilocks and The Three Bears</h1>
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