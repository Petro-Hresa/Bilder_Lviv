let querSell = x => document.querySelector(x);

(function(){

	querSell('.header__border-burger').addEventListener('click', function(){
     querSell('.nav').classList.toggle('nav_active');
     
	});

})()