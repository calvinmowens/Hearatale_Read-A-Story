import React, { useEffect, useState, useLayoutEffect } from "react";
import './Popup.css';
import './Quiz.css';
import QuizData from '../data/exampleQuestions.json';
import RandomAnswer from '../data/randomAnswers.json';
import PostData from '../data/targetwords.json';
// import $ from 'jquery';


const TargetQuiz = ({ isQuizVisible, closeQuiz, targetWord, quizzedWord }) => {

    useEffect(() => {
        //randomize answer choices.
        let choices = document.getElementsByClassName("answerInput");
        for (let i = 0; i < choices.length; i++) {
            let target = Math.floor(Math.random() * choices.length - 1) + 1;
            let target2 = Math.floor(Math.random() * choices.length - 1) + 1;
            //choices.eq(target).before(choices.eq(target2));
            choices[target].before(choices[target2]);
        }
    })

    function randomIntFromInterval(min, max, otherkey) { // min and max included 
        var rnum = Math.floor(Math.random() * (max - min) + min);


        while (rnum == otherkey) {
            console.log("inside while");
            rnum = Math.floor(Math.random() * (max - min) + min);
        }

        return rnum;
    }
    /*
    //CREATE RANDOM KEY1 TO ACCESS FROM JSON
    const randomValues = randomIntFromInterval(1, 5, null);
    const randomValues2 = randomIntFromInterval(1, 5, randomValues);
    console.log(randomValues);
    let n = randomValues.toString();
    let m = randomValues2.toString();


    //GET RANDOM ANSWER OBJECT FROM JSON1
    let randomAnswers = RandomAnswer.filter(
        (post) => post.id === n)[0];
    console.log(randomAnswers);

    //GET RANDOM ANSWER OBJECT FROM JSON2
    let randomAnswer2 = RandomAnswer.filter(
        (post) => post.id === m)[0];
    console.log(randomAnswer2);
    */

    //GET CORRECT ANSWER FROM JSON
    const word = PostData.filter(
        (post) => post.word?.toLowerCase() === quizzedWord?.toLowerCase()
    )[0];

    const allTargets = PostData.filter(
        (post) => post.word?.toLowerCase().charAt(0) === quizzedWord?.toLowerCase().charAt(0)
    );
    
    /*
    console.log('Target Test:\n')
    console.log(targetWord)
    console.log('Quiz Test')
    console.log(quizzedWord)
    */
    let randomAnswers = 'RA';
    let randomAnswers2 = 'RA2';

    if (allTargets.length > 0) {
        console.log(allTargets)
        let randomValues = randomIntFromInterval(0, allTargets.length, null);
        let randomValues2 = randomIntFromInterval(0, allTargets.length, randomValues);
        console.log(randomValues)
        console.log(randomValues2)
        randomAnswers = allTargets[randomValues].word;
        if (randomAnswers?.toLowerCase() === quizzedWord?.toLowerCase()) {
            allTargets.splice(randomValues, 1)
            randomValues = randomIntFromInterval(0, allTargets.length, null);
            randomAnswers = allTargets[randomValues].word;
        }
        randomAnswers2 = allTargets[randomValues2].word;
        if (randomAnswers2?.toLowerCase() === quizzedWord?.toLowerCase()) {
            allTargets.splice(randomValues2, 1)
            randomValues2 = randomIntFromInterval(0, allTargets.length, randomValues);
            randomAnswers2 = allTargets[randomValues2].word;
        }
    }

    //Use state for coins 
    const [coins, incrementCoins] = useState(0);


    const submitQuiz = (event) => {
        console.log('testbykush');
        //const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        let radios = document.getElementsByTagName('input');
        let value;
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].type === 'radio' && radios[i].checked) {
                // get value, set checked flag or do whatever you need to
                value = radios[i].value;
                console.log('inside');
            }

        }

        if (value == "correct") {
            console.log('works???');
            document.getElementById("choice3").style.color = "green";
            incrementCoins(coins + 1);
            randomAnswers2 = 'RA2';
            randomAnswers = 'RA';
        } else if (value == "wrong1") {
            console.log('doesnt works???');
            console.log(value);
            document.getElementById("choice1").style.color = "red";
        } else if (value == "wrong2") {
            document.getElementById("choice2").style.color = "red";
        } else {
            alert("please choose an answer");
        }

    };

    return (isQuizVisible) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="popupContainer quizContainer">
                    <h3 className="coinHolder"><span className="iconM">💰</span><span id="coin">{coins}</span></h3>
                    <form>
                        <h1 className="question">Definition: {word.definition} ?</h1>
                        <div className="answerChoices">
                            <div id="choice1" className="answerInput"><input required id="answer" className="radio" type="radio" name="group1" defaultValue="wrong1" />
                                <p>{randomAnswers}</p>
                            </div>
                            <div id="choice2" className="answerInput"><input required id="answer" className="radio" type="radio" name="group1" defaultValue="wrong2" />
                                <p>{randomAnswers2}<br /></p>
                            </div>
                            <div id="choice3" className="answerInput"><input required id="answer" className="radio" type="radio" name="group1" defaultValue="correct" />
                                <p>{quizzedWord.toLowerCase()}</p>
                            </div>

                        </div>
                        <input className="turnin" type="button" onClick={submitQuiz} value="Submit" ></input>
                    </form>
                </div>
                <a id="closeBtn" className="close close-btn" onClick={closeQuiz}></a>
            </div >
        </div >
    ) : null;




};

export default TargetQuiz;
