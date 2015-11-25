var answer = prompt("How big would you like the drawing space to be? Choose up to 50");
var yourNumber = parseInt(answer);
 
$(document).ready(function() {
	generateGrid(yourNumber);
	graphSize();
	mouseOverDefault();
	clearGraph();
	});

	
function clearGraph(){
	$('.clear').click(function(){
		$('.colored').removeClass().addClass('grid');
		$('.grid').css("background", "white");
	});
};


function generateGrid(yourNumber)  {
	for (var rows = 0; rows < yourNumber; rows++) {
		for (var columns =0; columns < yourNumber; columns++){
			$(".container").append("<div class='grid'></div>");
		};
	};
};

function graphSize(){
	$('.grid').height(60).width(60);
};

function mouseOverDefault(){
	$(".grid").mouseover(function(){
		$(this).removeClass().addClass("colored"); 
	});
};




function getRandomColor() {
var letters = '0123456789ABCDEF'.split(''); 
var color = '#'; 
for (var i =0; i < 6; i++){
	color += letters[Math.floor(Math.random()*16)];
	}
	$('.colored').mouseover(function(){
		$(this).css("background", color);
	}); 
}; 


 


 
	



