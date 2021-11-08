import React, { useEffect, useState, useLayoutEffect } from "react";
import './Popup.css';
import './Quiz.css';
import QuizData from '../data/exampleQuestions.json';
import $ from 'jquery';

const TargetQuiz = ({ isQuizVisible, closeQuiz, targetWord, quizzedWord }) => {

    useEffect(() => {
        //randomize answer choices.
        let choices = $(".answerInput");
        for (let i = 0; i < choices.length; i++) {
            let target = Math.floor(Math.random() * choices.length - 1) + 1;
            let target2 = Math.floor(Math.random() * choices.length - 1) + 1;
            choices.eq(target).before(choices.eq(target2));
        }
    })

    console.log(quizzedWord);
    const wordToFindInJson = QuizData.filter(
        (post) => post.word?.toLowerCase() === quizzedWord?.toLowerCase()
    )[0];
    console.log(wordToFindInJson);

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
                    <h3 className="coinHolder"><span className="iconM">💰</span><span id="coin">200</span></h3>
                    <form>
                        <h1 className="question">What is the definition of {targetWord} ?</h1>
                        <div className="answerChoices">
                            <div id="choice1" className="answerInput"><input required id="answer" className="radio" type="radio" name="group1" defaultValue="wrong1" /><p>{wordToFindInJson.wrongone}</p></div>
                            <div id="choice2" className="answerInput"><input required id="answer" className="radio" type="radio" name="group1" defaultValue="wrong2" /><p>{wordToFindInJson.wrongtwo}<br /></p></div>
                            <div id="choice3" className="answerInput"><input required id="answer" className="radio" type="radio" name="group1" defaultValue="correct" /><p>{wordToFindInJson.correct}</p></div>

                        </div>
                        <input className="turnin" type="button" onClick={submitQuiz} value="Submit" ></input>
                    </form>
                </div>
                <a id="closeBtn" className="close close-btn" onClick={closeQuiz}></a>
            </div>
        </div>
    ) : null;
};

export default TargetQuiz;