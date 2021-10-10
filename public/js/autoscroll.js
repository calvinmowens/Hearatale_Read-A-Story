// Jump-scroll
ScrollRate = 1;
EndWord = 700;

setTimeout(scrollDiv_init, 7000);

function scrollDiv_init() {
    DivElmnt = document.getElementById('story-scroll');
	reachedMaxScroll = false;
	
    DivElmnt.scrollTop = 0;
	previousScrollTop  = 0;

	DivElmnt.word = 0;
    
	scrollInterval = setInterval('scrollDiv()', ScrollRate);
}

function scrollDiv() {
	if (!reachedMaxScroll) {
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
}