

var answer = prompt("How big would you like the drawing space to be? Choose up to 50");
var yourNumber = parseInt(answer);

alert('To start drawing -- select one of the coloring options!')
 

 
$(document).ready(function() {
	generateGrid(yourNumber);
	graphSize();
	clearGraph();
	colored();
	getRandomColor();
	standard();
	choose();
	});
	

	
function clearGraph(){
	$('#clear').click(function(){
		$('.grid').css("background", "white");
	});
	mouseOverDefault();
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
		$(this).css("background", 'black'); 
	});
};


function standard (){
$('#black').click(function(){
    mouseOverDefault();
});

};





function getRandomColor() {
var letters = '0123456789ABCDEF'.split(''); 
var color = '#'; 
for (var i =0; i < 6; i++){
	color += letters[Math.floor(Math.random()*16)]
	}; 
	return color; 
};

function colored(){
$('#multicolor').click(function(){
var randomColor = getRandomColor();
 $('.grid').mouseover(function(){
   $(this).css("background", randomColor);
 });
});
}; 

function choose(){
$('#choose').click(function(){
alert('Remember to choose a color the internet can understand. \n Examples include: black, blue, yellow, purple, grey, etc.');
var yourColor = prompt('Choose a color!'); 
 $('.grid').mouseover(function(){
   $(this).css("background", yourColor);
 });
});
};





 


 
	



