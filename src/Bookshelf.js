import React, { useEffect, useState } from "react";
import './Bookshelf.css';

function Bookshelf() {

    useEffect(() => {
        document.getElementById("pigeon").addEventListener("mouseover", function () {
            document.getElementById("pigeon-title").style.color = "white";
            document.getElementById("pigeon-overlay").style.opacity = .5;
        });

        document.getElementById("nightBefore").addEventListener("mouseover", function () {
            document.getElementById("night-title").style.color = "white";
            document.getElementById("night-overlay").style.opacity = .5;
        });

        document.getElementById("crayon").addEventListener("mouseover", function () {
            document.getElementById("crayon-title").style.color = "white";
            document.getElementById("crayon-overlay").style.opacity = .5;
        });

        document.getElementById("bindergarten").addEventListener("mouseover", function () {
            document.getElementById("bindergarten-title").style.color = "white";
            document.getElementById("bindergarten-overlay").style.opacity = .5;
        });

        document.getElementById("king").addEventListener("mouseover", function () {
            document.getElementById("king-title").style.color = "white";
            document.getElementById("king-overlay").style.opacity = .5;
        });

        document.getElementById("chicka").addEventListener("mouseover", function () {
            document.getElementById("chicka-title").style.color = "white";
            document.getElementById("chicka-overlay").style.opacity = .5;
        });

        document.getElementById("hungry").addEventListener("mouseover", function () {
            document.getElementById("hungry-title").style.color = "white";
            document.getElementById("hungry-overlay").style.opacity = .5;
        });

        document.getElementById("classmate").addEventListener("mouseover", function () {
            document.getElementById("classmate-title").style.color = "white";
            document.getElementById("classmate-overlay").style.opacity = .5;
        });

        document.getElementById("dragons").addEventListener("mouseover", function () {
            document.getElementById("dragons-title").style.color = "white";
            document.getElementById("dragons-overlay").style.opacity = .5;
        });

        document.getElementById("clifford").addEventListener("mouseover", function () {
            document.getElementById("clifford-title").style.color = "white";
            document.getElementById("clifford-overlay").style.opacity = .5;
        });

        document.getElementById("pigeon").addEventListener("mouseout", function () {
            document.getElementById("pigeon-title").style.color = "transparent";
            document.getElementById("pigeon-overlay").style.opacity = 0;
        });

        document.getElementById("nightBefore").addEventListener("mouseout", function () {
            document.getElementById("night-title").style.color = "transparent";
            document.getElementById("night-overlay").style.opacity = 0;
        });

        document.getElementById("crayon").addEventListener("mouseout", function () {
            document.getElementById("crayon-title").style.color = "transparent";
            document.getElementById("crayon-overlay").style.opacity = 0;
        });

        document.getElementById("bindergarten").addEventListener("mouseout", function () {
            document.getElementById("bindergarten-title").style.color = "transparent";
            document.getElementById("bindergarten-overlay").style.opacity = 0;
        });

        document.getElementById("king").addEventListener("mouseout", function () {
            document.getElementById("king-title").style.color = "transparent";
            document.getElementById("king-overlay").style.opacity = 0;
        });

        document.getElementById("chicka").addEventListener("mouseout", function () {
            document.getElementById("chicka-title").style.color = "transparent";
            document.getElementById("chicka-overlay").style.opacity = 0;
        });

        document.getElementById("hungry").addEventListener("mouseout", function () {
            document.getElementById("hungry-title").style.color = "transparent";
            document.getElementById("hungry-overlay").style.opacity = 0;
        });

        document.getElementById("classmate").addEventListener("mouseout", function () {
            document.getElementById("classmate-title").style.color = "transparent";
            document.getElementById("classmate-overlay").style.opacity = 0;
        });

        document.getElementById("dragons").addEventListener("mouseout", function () {
            document.getElementById("dragons-title").style.color = "transparent";
            document.getElementById("dragons-overlay").style.opacity = 0;
        });

        document.getElementById("clifford").addEventListener("mouseout", function () {
            document.getElementById("clifford-title").style.color = "transparent";
            document.getElementById("clifford-overlay").style.opacity = 0;
        });
    })

    return (
        <section className="bookshelf_container">
            <div className="bookshelf_container_header">
                <div className="bookshelf_container_header_menu_container">
                    <div className="bookshelf_container_header_menu_container_img">
                    </div>
                    <div className="bookshelf_container_header_menu_container_info">
                        <p>
                            Elijah White <br /> 26💰 12⭐
                        </p>
                    </div>
                </div>
                {/* Why are we doing this like this? Why not button? */}
                <div className="bookshelf_container_header_logout">
                    <form action="index.html">
                        <input type="submit" name id value="log out" />
                    </form>
                </div>
            </div>
            <div className="bookshelf-grid-container">
                <a href="/story" id="pigeon" className="grid-item book-1">
                    <div id="pigeon-overlay" />
                    <h2 className="book-title" id="pigeon-title">Goldilocks and The Three Bears</h2>
                </a>
                <a href="/RedHen" id="nightBefore" className="grid-item book-2">
                    <div id="night-overlay" />
                    <h2 className="book-title" id="night-title">Little Red Hen</h2>
                </a>
                <a href="/peterrabbit" id="crayon" className="grid-item book-3">
                    <div id="crayon-overlay" />
                    <h2 className="book-title" id="crayon-title">Peter Rabbit</h2>
                </a>
                <a href="/rumplestiltskin" id="bindergarten" className="grid-item book-4">
                    <div id="bindergarten-overlay" />
                    <h2 className="book-title" id="bindergarten-title">Rumplestiltskin</h2>
                </a>
                <a href="/TheBoyWhoCriedWolf" id="king" className="grid-item book-5">
                    <div id="king-overlay" />
                    <h2 className="book-title" id="king-title">The Boy Who Cried Wolf</h2>
                </a>
                <a href="/Gingerbread" id="chicka" className="grid-item book-6">
                    <div id="chicka-overlay" />
                    <h2 className="book-title" id="chicka-title">The Gingerbread Man</h2>
                </a>
                <a href="/LionandMouse" id="hungry" className="grid-item book-7">
                    <div id="hungry-overlay" />
                    <h2 className="book-title" id="hungry-title">The Lion and The Mouse</h2>
                </a>
                <a href="/Engine" id="classmate" className="grid-item book-8">
                    <div id="classmate-overlay" />
                    <h2 className="book-title" id="classmate-title">The Little Engine That Could</h2>
                </a>
                <a href="/Goats" id="dragons" className="grid-item book-9">
                    <div id="dragons-overlay" />
                    <h2 className="book-title" id="dragons-title">The Three Billy Goats Gruff</h2>
                </a>
                <a href="/TurtleRabbit" id="clifford" className="grid-item book-10">
                    <div id="clifford-overlay" />
                    <h2 className="book-title" id="clifford-title">The Turtle and The Rabbit</h2>
                </a>
            </div>
        </section>
    );
}

export default Bookshelf;