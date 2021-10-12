<<<<<<< HEAD
// Jump-scroll
ScrollRate = 1;
EndWord = 700;

setTimeout(scrollDiv_init, 7000);
=======
// Auto-scroll
ScrollRate = 150;

setTimeout(scrollDiv_init, 8000);
>>>>>>> 471aa6b154ed906a739078f8d076636636fabe5e

function scrollDiv_init() {
    DivElmnt = document.getElementById('story-scroll');
	reachedMaxScroll = false;
	
    DivElmnt.scrollTop = 0;
	previousScrollTop  = 0;
<<<<<<< HEAD

	DivElmnt.word = 0;
=======
>>>>>>> 471aa6b154ed906a739078f8d076636636fabe5e
    
	scrollInterval = setInterval('scrollDiv()', ScrollRate);
}

function scrollDiv() {
	if (!reachedMaxScroll) {
<<<<<<< HEAD
		if (DivElmnt.word >= EndWord) {
			console.log(DivElmnt.word);
			DivElmnt.scrollTop = previousScrollTop;
			previousScrollTop += 60;
			DivElmnt.scrollTop += 60;
	
			reachedMaxScroll = DivElmnt.scrollTop >= DivElmnt.scrollHeight;
			DivElmnt.word = 0;
		}
		DivElmnt.word++;
		console.log(DivElmnt.word);
    } else {
		reachedMaxScroll = (DivElmnt.scrollTop == 0) ? false:true;
	}

	// Auto-Scroll
	// if (!reachedMaxScroll) {
	// 	DivElmnt.scrollTop = previousScrollTop;
	// 	previousScrollTop++;

    //     reachedMaxScroll = DivElmnt.scrollTop >= DivElmnt.scrollHeight;
    // } else {
	// 	reachedMaxScroll = (DivElmnt.scrollTop == 0) ? false:true;
	// }
=======
		DivElmnt.scrollTop = previousScrollTop;
		previousScrollTop++;

        reachedMaxScroll = DivElmnt.scrollTop >= DivElmnt.scrollHeight;
        console.log(reachedMaxScroll);
        console.log(DivElmnt.scrollTop);
        console.log(reachedMaxScroll);
    } else {
		reachedMaxScroll = (DivElmnt.scrollTop == 0) ? false:true;
	}
>>>>>>> 471aa6b154ed906a739078f8d076636636fabe5e
}