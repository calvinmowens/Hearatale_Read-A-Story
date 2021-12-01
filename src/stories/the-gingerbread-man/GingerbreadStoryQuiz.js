import React, { useEffect, useState } from "react";
import '../StoryQuiz.css';
import '../../Story.css'
import '../../component/Quiz.css'
import '../../data/targetwords.json'

function GingerbreadStoryQuiz() {

    const questions = [
        {
            questionText: "Something not supposed to happen",
            answerOptions: [
                { answerText: 'Alive ', isCorrect: false },
                { answerText: 'Accident ', isCorrect: true },
                { answerText: 'Along ', isCorrect: false },
            ],
            audioPath: "file....1"
        },
        {
            questionText: "Not dead, still living",
            answerOptions: [
                { answerText: 'Accident', isCorrect: false },
                { answerText: 'Altogether ', isCorrect: false },
                { answerText: 'Alive ', isCorrect: true },
            ],
            audioPath: "file....2"
        },
        {
            questionText: "Beside or with",
            answerOptions: [
                { answerText: 'Accident', isCorrect: false },
                { answerText: 'Altogether ', isCorrect: false },
                { answerText: 'Along', isCorrect: true },
            ],
            audioPath: "file....3"
        }
    ]

    const [showScore, setShowScore] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const handleAnsBTNClick = (isCorrect) => {
        if (isCorrect === true) {
            setScore(score + 1);
        }

        const nextQ = currentQuestion + 1;
        if (nextQ < questions.length) {
            setCurrentQuestion(nextQ);
        } else {
            setShowScore(true);
        }
    }
    return (
        <div>
            <div className="nav">
                <div className="back-to-bookshelf">
                    <a href="/Gingerbread">
                        <div className="arrow" />
                    </a>
                    <a href="/Gingerbread">
                        <p>BACK TO STORY</p>
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
            <div className="questionWrapper">
                <div className="holder">
                    {
                        showScore ? (
                            <div className="scoreSection">
                                <p className="score">You scored {score} out of {questions.length} </p>
                            </div>
                        ) : (
                            <>

                                <div className="questionSection">
                                    <div className="counter">
                                        <span className="questionNum">Question {currentQuestion + 1} / {questions.length}</span>
                                    </div>
                                    <audio id="story" controls autoPlay controlslist="nodownload noplaybackrate noremoteplayback">
                                        <source src={questions[currentQuestion].audioPath} type="audio/mp3" />
                                    </audio>
                                    <div className="questionText">{questions[currentQuestion].questionText}</div>
                                </div>
                                <div className="answerSection">
                                    {questions[currentQuestion].answerOptions.map((answerOptions) => (
                                        <button className="ansBTN" onClick={() => handleAnsBTNClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
                                    ))}
                                </div>
                            </>
                        )}
                </div>
            </div>
        </div>
    )
}



export default GingerbreadStoryQuiz;