var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");


var drawRect = function(x, y) {

context.fillStyle="green";
context.fillRect(x, y, 80, 80);


context.fillStyle="yellow";
context.fillRect(x+190, y, 80, 80);


context.fillStyle="blue";
context.fillRect(x, y+150, 80, 80);


context.fillStyle="red";
context.fillRect(x+190, 150+y, 80, 80);
};

context.font="20px Arial";
context.fillText("Green", 20, 20);
context.fillText("Yellow", 210, 20);
context.fillText("Blue", 20, 180);
context.fillText("Red", 210, 180);

drawRect(10, 40);


/*var howBig =30;
for(var i = 0; i < 100; i++) {
var draw = function() {
	howBig++;
	
	context.font ="howBig Comic Sans MS";
	context.fillStyle = "red";
	context.fillText("tango", canvas.width/2, canvas.height/2);
	context.font="50px Arial";
	context.fillStyle = "purple";
	context.fillText("Where will this text go?", 40, 50);

	context.fillStyle = "green";
	context.fillRect(30, 60, 40, 50);
}
draw();
}
*/