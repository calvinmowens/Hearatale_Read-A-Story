import React, { useEffect, useState } from "react";
import './Popup.css';
import './Quiz.css';
import QuizData from '../data/exampleQuestions.json';


const TargetQuiz = ({ isQuizVisible, closeQuiz, targetWord, quizzedWord }) => {

    console.log(quizzedWord);
    const wordToFindInJson = QuizData.filter(
        (post) => post.word?.toLowerCase() === quizzedWord?.toLowerCase()
    )[0];
    console.log(wordToFindInJson);


    const submitQuiz = (event) => {
        console.log('testbykush');
        //const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        var radios = document.getElementsByTagName('input');
        var value;
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].type === 'radio' && radios[i].checked) {
                // get value, set checked flag or do whatever you need to
                value = radios[i].value;   
                console.log('inside');    
            }

        }


        if(value == "correct") {
           console.log('works???');
                //$("input[name=group1]").next().css('color', 'black')
                //$("input[name=group]:checked").next().css('color', 'green');
        } else {
            console.log('doesnt works???');
            console.log(value);

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
                            <div className="answerInput"><input id="answer" className="radio" type="radio" name="group1" defaultValue="wrong" /><p>{wordToFindInJson.wrongone}</p></div>
                            <div className="answerInput"><input id="answer" className="radio" type="radio" name="group1" defaultValue="wrong" /><p>{wordToFindInJson.wrongtwo}<br /></p></div>
                            <div className="answerInput"><input id="answer" className="radio" type="radio" name="group1" defaultValue="correct" /><p>{wordToFindInJson.correct}</p></div>
                            
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
