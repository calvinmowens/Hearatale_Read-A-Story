import React from "react";
import './Home.css';

function Home() {
    return (
        <section onLoad={window['test']} className="home_wrapper">
            {/* <img src={"img/WelcomeScreen.png"} className="home_backgroundImage" alt=""></img> */}
            <div className="home_header">
                <div className="home_nav">
                    <ul className="nav-area">
                        <li className="flex1">{<a href="#">Read-A-Story</a>}</li>
                        <li className="flex2">{<a href="#">Brainy Phonics</a>}</li>
                        <li className="flex3">{<a href="#">Brainy Sight Words</a>}</li>
                        <li className="flex4">{<a href="#">Brainy Words 2000 </a>}</li>
                        <li className="flex5">{<a href="#">Rhyme A Zoo</a>}</li>
                    </ul>
                </div>
            </div>
            <div className="home_article">
                <a href="student-login.html" className="btn-student">Student Login</a>
                <a href="#" className="btn-parent-teacher">Parent & Teacher Login</a>
            </div>
        </section>
    );
}

export default Home;