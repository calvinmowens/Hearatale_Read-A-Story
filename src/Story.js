import React, { useEffect, useState } from "react";
import './Story.css';
import Popup from "./component/Popup";

function Story() {
    const [buttonPopup, setWordPopup] = useState(false);
    const [resourceType, setResourceType] = useState('posts')

    useEffect(() => {
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
            // let storyDuration = Math.round(Math.floor(sound.duration));
            // sound.ontimeupdate = function () { highlight() };

            // function highlight() {
            //     let counter = Math.round(Math.floor(sound.currentTime));
            //     switch (counter) {
            //         case 1:
            //             document.getElementById("title").classList.add('highlight-line');
            //             break;
            //         case 8:
            //             document.getElementById("title").classList.remove('highlight-line');
            //             document.getElementById("line1").classList.add('highlight-line');
            //             console.log("reached " + counter);
            //             break;
            //         case 11:
            //             console.log("reached " + counter);
            //             document.getElementById("line1").classList.remove('highlight-line');
            //             document.getElementById("line2").classList.add('highlight-line');
            //             break;
            //         case 13:
            //             console.log("reached " + counter);
            //             document.getElementById("line2").classList.remove('highlight-line');
            //             document.getElementById("line3").classList.add('highlight-line');
            //             document.getElementById("picHolder").style = "background: url(../img/exampleImg2.jpg); background-size: contain; background-position: center; background-repeat: no-repeat";
            //             break;
            //         case 16:
            //             console.log("reached " + counter);
            //             document.getElementById("line3").classList.remove('highlight-line');
            //             document.getElementById("line4").classList.add('highlight-line');
            //             break;
            //         case 18:
            //             console.log("reached " + counter);
            //             document.getElementById("line4").classList.remove('highlight-line');
            //             document.getElementById("line5").classList.add('highlight-line');
            //             break;
            //         case 22:
            //             console.log("reached " + counter);
            //             document.getElementById("line5").classList.remove('highlight-line');
            //             document.getElementById("line6").classList.add('highlight-line');
            //             break;
            //         case 24:
            //             console.log("reached " + counter);
            //             document.getElementById("line6").classList.remove('highlight-line');
            //             document.getElementById("line7").classList.add('highlight-line');
            //             break;
            //         case 26:
            //             console.log("reached " + counter);
            //             document.getElementById("line7").classList.remove('highlight-line');
            //             document.getElementById("line8").classList.add('highlight-line');
            //             break;
            //         case 28:
            //             console.log("reached " + counter);
            //             document.getElementById("line8").classList.remove('highlight-line');
            //             document.getElementById("line9").classList.add('highlight-line');
            //             break;
            //         case 30:
            //             console.log("reached " + counter);
            //             document.getElementById("line9").classList.remove('highlight-line');
            //             document.getElementById("line10").classList.add('highlight-line');
            //             break;
            //         //continue and add more cases...
            //     }
            // }
        }
        sound.onpause = function () {
            // let currentTimeSec = sound.currentTime.toPrecision(3);
            // alert("The story is paused and the paused time in second is " + currentTimeSec);
        }

        //autoscroll
        let ScrollRate = 1;
        let EndWord = 700;
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
            scrollInterval = setInterval(()=>{

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


                DivElmnt.addEventListener('wheel', function(e) {
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
    });

    return (
        <div>

            <div className="nav">
                <div className="back-to-bookshelf">
                    <a href="bookshelf.html">
                        <div className="arrow" />
                    </a>
                    <a href="bookshelf.html">
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
                                    <h1 id="title" className="story-title">LITTLE RED RIDING HOOD</h1>
                                    <audio id="story" controls autoPlay controlslist="nodownload noplaybackrate">
                                        <source src="audio/LR1_cut.mp3" type="audio/mpeg" />
                                    </audio>
                                </div>
                                <div className="highlight-line" id="highlight-line"></div>
                                <div id="story-scroll" className="story-mid">
                                    {/* <div class="story-mid"> */}
                                    <p className="story-text">
                                        <span id="line1" className><span className="targetWord" onClick={() => setWordPopup(true)}>Once</span> upon a time there was a sweet little</span> <br />
                                        <span id="line2" className> girl who was loved by everyone who knew</span>
                                        <br />
                                        <span id="line3" className> her, but most of all by her grandmother, </span>
                                        <br />
                                        <span id="line4" className> and there was nothing that she would not</span>
                                        <br />
                                        <span id="line5" className> have given to the child. Once she gave the </span>
                                        <br />
                                        <span id="line6" className> girl a little cape with a hood of red velvet, </span>
                                        <br />
                                        <span id="line7" className> which suited her so well that she would</span>
                                        <br />
                                        <span id="line8" className>  never wear anything else; so she was always</span>
                                        <br />
                                        <span id="line9" className>  called 'Little Red Riding Hood.’
                                        </span>
                                        <br />
                                        <span id="line10" className> </span>
                                        <br />
                                        <span id="line11" className> </span>
                                        <br />
                                        <span id="line12" className> </span>
                                        <br />
                                        <span id="line13" className> </span>
                                        <br />
                                        <span id="line14" className> </span>
                                        <br />
                                        <span id="line15" className> </span>
                                        <br />
                                        <span id="line16" className> </span>
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-page">
                        <div id="picHolder" className="story-pic" />
                    </div>
                </div>
            </section>
            <Popup id="popup" trigger={buttonPopup} setTrigger={setWordPopup}>
                <h3>popup</h3>
            </Popup>
        </div>
    );
}

export default Story;
