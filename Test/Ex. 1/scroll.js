let scrollTime;
function up() {
	let top = (document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-60);
		scrollTime = setTimeout('up()',20);
	} else clearTimeout(scrollTime);
	return false;
}
