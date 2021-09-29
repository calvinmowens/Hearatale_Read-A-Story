
let sound = document.getElementById("story");

sound.onplay = function () {
    let storyDuration = Math.round(Math.floor(sound.duration));
    sound.ontimeupdate = function () { highlight() };

    function highlight() {
        let counter = Math.round(sound.currentTime);
        switch (counter) {
            case 1:
                //initial highlight
                console.log("reached " + counter);
                break;
            case 5:
                console.log("reached " + counter);
                document.getElementById("line1").classList.remove('highlight-line');
                document.getElementById("line2").classList.add('highlight-line');
                break;
            case 10:
                console.log("reached " + counter);
                document.getElementById("line2").classList.remove('highlight-line');
                document.getElementById("line3").classList.add('highlight-line');
                document.getElementById("picHolder").style = "background: url(../img/exampleImg2.jpg); background-size: contain; background-position: center; background-repeat: no-repeat";
                break;
            case 15:
                console.log("reached " + counter);
                document.getElementById("line3").classList.remove('highlight-line');
                document.getElementById("line4").classList.add('highlight-line');
                break;
            //continue and add more cases...
        }
    }
}

sound.onpause = function () {
    let currentTimeSec = sound.currentTime.toPrecision(3);
    alert("The story is paused and the paused time in second is " + currentTimeSec);
}





// Auto-scroll
ScrollRate = 100;

function scrollDiv_init() {
    DivElmnt = document.getElementById('story-scroll');
	reachedMaxScroll = false;
	
    DivElmnt.scrollTop = 0;
	previousScrollTop  = 0;
    
	scrollInterval = setInterval('scrollDiv()', ScrollRate);
}

function scrollDiv() {
	if (!reachedMaxScroll) {
		DivElmnt.scrollTop = previousScrollTop;
		previousScrollTop++;

        reachedMaxScroll = DivElmnt.scrollTop >= DivElmnt.scrollHeight;
        console.log(reachedMaxScroll);
        console.log(DivElmnt.scrollTop);
        console.log(reachedMaxScroll);
    } else {
		reachedMaxScroll = (DivElmnt.scrollTop == 0) ? false:true;
	}
}