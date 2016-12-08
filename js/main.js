
 

 
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
  var gridSize = 40;

   for (var i = 0; i < gridSize; i++){
  	var rowToCreate = $('<div></div>');
  	rowToCreate.addClass('row');


	  for(var j=0; j < gridSize; j++){
	    rowToCreate.append("<div class='column'></div>");
	  }
    $('#container').append(rowToCreate);
  }

}

function backGroundSet(){
	$('body').css("background", "#536895");
} // overrides bootstrap default styles. 



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

	$(document).mouseup(function(){
		$(".column").off("mouseover"); 
	}); // prevents mouseover event from not being removed when 
	// mouseup occurs outside the drawing space! 
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






 


 
	



