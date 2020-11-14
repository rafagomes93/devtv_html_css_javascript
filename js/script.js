(function js(win, doc){
	'use strict';
	
	doc.querySelector('#menu-mobile').addEventListener('click', function(){
		document.querySelector('.menu').style.transform = 'translateX(0)';
	});
	
	doc.querySelector('#close-menu').addEventListener('click', function(){
		document.querySelector('.menu').style.transform = 'translateX(-290px)';
	});
})(window, document);