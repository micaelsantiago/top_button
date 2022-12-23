const returnTop = () => {
	window.scrollTo(0, 0);
};

const checkScroll = () => {
	if (window.scrollY > 0) {
		document.querySelector('.top').style.display = 'flex';
	}	else {
		document.querySelector('.top').style.display = 'none';
	};
};

window.addEventListener('scroll', checkScroll);