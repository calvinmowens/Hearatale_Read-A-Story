
let sound = document.getElementById("story");

sound.onplay = function () {
    let storyDuration = Math.round(Math.floor(sound.duration));
    sound.ontimeupdate = function () { highlight() };

    function highlight() {
        let counter = Math.round(sound.currentTime);
        switch (counter) {
            case 1:
                document.getElementById("title").classList.add('highlight-line');
                break;
            case 8:
                document.getElementById("title").classList.remove('highlight-line');
                document.getElementById("line1").classList.add('highlight-line');
                console.log("reached " + counter);
                break;
            case 11:
                console.log("reached " + counter);
                document.getElementById("line1").classList.remove('highlight-line');
                document.getElementById("line2").classList.add('highlight-line');
                break;
            case 13:
                console.log("reached " + counter);
                document.getElementById("line2").classList.remove('highlight-line');
                document.getElementById("line3").classList.add('highlight-line');
                document.getElementById("picHolder").style = "background: url(../img/exampleImg2.jpg); background-size: contain; background-position: center; background-repeat: no-repeat";
                break;
            case 16:
                console.log("reached " + counter);
                document.getElementById("line3").classList.remove('highlight-line');
                document.getElementById("line4").classList.add('highlight-line');
                break;
            case 18:
                console.log("reached " + counter);
                document.getElementById("line4").classList.remove('highlight-line');
                document.getElementById("line5").classList.add('highlight-line');
                break;
             case 22:
                console.log("reached " + counter);
                document.getElementById("line5").classList.remove('highlight-line');
                document.getElementById("line6").classList.add('highlight-line');
                break;
            case 24:
                console.log("reached " + counter);
                document.getElementById("line6").classList.remove('highlight-line');
                document.getElementById("line7").classList.add('highlight-line');
                break;
            case 26:
                console.log("reached " + counter);
                document.getElementById("line7").classList.remove('highlight-line');
                document.getElementById("line8").classList.add('highlight-line');
                break;
            //continue and add more cases...
        }
    }
}

sound.onpause = function () {
    let currentTimeSec = sound.currentTime.toPrecision(3);
    alert("The story is paused and the paused time in second is " + currentTimeSec);
}