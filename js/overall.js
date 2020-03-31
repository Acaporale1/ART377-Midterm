// JavaScript Document

window.addEventListener('load',(event)=>{
	var toTop=document.getElementById('toTop');
	window.onscroll= function(e){
		console.log("scroll");
		if(window.pageYOffset> 340){
		toTop.style.visibility="visible";	
		}
		else{
			toTop.style.visibility="hidden";
		}
	}
	
		toTop.addEventListener('click',(event)=>{
			window.scroll(0,0);
		});
			
	
});
	
	