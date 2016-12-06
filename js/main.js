
 

 
$(document).ready(function() {
	backGroundSet();
	generateGrid();
	mouseDrawOn("black");
	mouseDrawOff(); 
	clearGraph();
	colored();
	getRandomColor();
	standard();
	choose();
	}); 

	
function clearGraph(){
	$('#clear').click(function(){
		$('.column').css("background", "white");
	});
}


function generateGrid(){
  var gridSize = 12;
  	$('.container').append("<div class='grid-container'></div>");

  	for(rows = 0; rows < gridSize; rows++){
  		$('.grid-container').append("<tr class='row'></tr>");
  	}

  	for(columns = 0; columns < gridSize; columns++){
  		$('.row').append("<td class='column'></td>");
 	 	}
}

function backGroundSet(){
	$('body').css("background", "#536895");
}



 function mouseOver(selectedColor){
 $(".column").mouseover(function(){
 		$(this).css("background", selectedColor);
 }); 
}

function mouseDrawOn (color){
	var selectedColor = color; 

	$(".column").mousedown(function(){
		mouseOver(selectedColor);  
	});  
}

function mouseDrawOff(){
	$(".column").mouseup(function(){
		$(".column").off("mouseover");
	}); 
}




function standard (){
	$('#black').click(function(){
		mouseDrawOn("black"); 
	});

}



function getRandomColor() {
	var letters = '0123456789ABCDEF'.split(''); 
	var color = '#'; 

	for (var i =0; i < 6; i++){
	  color += letters[Math.floor(Math.random()*16)] 
	} 
	return color; 
}

function colored(){
	$('#multicolor').click(function(){

	var randomColor = getRandomColor();
	mouseDrawOn(randomColor); 

	});
} 

function choose(){
	$('#choose').click(function(){
		alert('Remember to choose a color the internet can understand. \n Examples include: black, blue, yellow, purple, grey, etc.');
		var yourColor = prompt('Choose a color!'); 
		mouseDrawOn(yourColor); 
});
}






 


 
	



