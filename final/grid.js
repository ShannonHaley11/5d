
function drawRectangle(x,y,w,h, color) {
	context.rect(x, y, w, h);
	context.fillStyle = color;
	context.fill();
}

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var z = 1;
var x = 240;
var y = 300;


function counter() {
 	
	makeRect();

	console.log(z);
	z += 1;
}


function makeRect() {
	if (z<=2) {
		drawRectangle(240,345,10,50, 'blue');
	}
	
	if (z>=2 && z<=3) {
		drawRectangle(50,345,200,10, 'blue');
	}

	if (z>=3 && z<=4) {
		drawRectangle(50,275,10,75, 'blue');
	}

	if (z>=4 && z<=5) {
		drawRectangle(50,275,160,10, 'blue');
	}

	if (z>=5 && z<=6) {
		drawRectangle(200,190,10,90, 'blue');
	}

	if (z>=6 && z<=7) {
		drawRectangle(160,180,50,10, 'blue');
	}

	if (z>=7 && z<=8) {
		drawRectangle(160,120,10,60, 'blue');
	}

	if (z>=8 && z<=9) {
		drawRectangle(160,110,50,10, 'blue');
	}

	if (z>=9 && z<=10) {
		drawRectangle(200,50,10,60, 'blue');
	}

	if (z>=10 && z<=11) {
		drawRectangle(200,50,160,10, 'blue');
	}

	if (z>=11 && z<=12) {
		drawRectangle(350,50,10,100, 'blue');
	}

	if (z>=12 && z<=13) {
		drawRectangle(280,140,70,10, 'blue');
	}

	if (z>=13 && z<=14) {
		drawRectangle(280,140,10,60, 'blue');
	}

	if (z>=14 && z<=15) {
		drawRectangle(280,200,70,10, 'blue');
	}

	if (z>=15 && z<=16) {
		drawRectangle(350,200,10,150, 'blue');
	}

	if (z>=16 && z<=17) {
		drawRectangle(350,340,50,10, 'blue');
	}

}

timer = setInterval(counter, 500);
