// Auto-scroll
ScrollRate = 150;

setTimeout(scrollDiv_init, 8000);

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