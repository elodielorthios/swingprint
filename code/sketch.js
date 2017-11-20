var x, y;
var myFont;
var img1;
var img2;
var input, button, greeting;
var cnv;
var zone = 10;
var taillePoint = 2;
var c = x/10;
var contour = 1;
var tousLesRonds = [];

function preload() {
  // myFont = loadFont('font/Roboto-Thin.ttf');
}

function setup() {
	cnv = createCanvas(windowWidth, windowHeight);
	setupOsc(8000, 3334);
	background(255, 255, 255);
	frameRate(30);

  input = createInput();
  input.position(600, 350);

  button = createButton('Submit');
  button.position(input.x + input.width, 350);
  button.mousePressed(greet);

	greeting = createElement('h2', 'Finished? What is your name?');
  greeting.position(600, 300);

}

function draw() {
	//image(img1, 250, 500);
  //image(img2, 250, 500);
	//fill(0, 0, 0);
	background(255,1);
	//contour = random(1,5);
	//strokeWeight(contour);
	//ellipse(y+width/2+random(-zone,zone),x+height/2+random(-zone,zone), taillePoint, taillePoint);
	//stroke(c);
	tousLesRonds.push(new rond(y+width/2+random(-zone,zone),x+height/2+random(-zone,zone)));

	for (var i=0; i<tousLesRonds.length; i++) {
		tousLesRonds[i].move();
		tousLesRonds[i].display();
		stroke('black');
		if(i>0){
		line(tousLesRonds[i-1].x,tousLesRonds[i-1].y,tousLesRonds[i].x,tousLesRonds[i].y);
	  }
	}
}


function receiveOsc(address, value) {

	if (address == '/gyrosc/accel') {
		// console.log("received OSC: " + address + ", " + value);
		x = value[0]*1000;
		y = value[1]*700;
	}
}

function sendOsc(address, value) {
	socket.emit('message', [address].concat(value));
}

function setupOsc(oscPortIn, oscPortOut) {
	var socket = io.connect('http://127.0.0.1:8081', { port: 8000, rememberTransport: false });
	socket.on('connect', function() {
		socket.emit('config', {
			server: { port: oscPortIn,  host: '127.0.0.1'},
			client: { port: oscPortOut, host: '127.0.0.1'}
		});
	});
	socket.on('message', function(msg) {
		if (msg[0] == '#bundle') {
			for (var i=2; i<msg.length; i++) {
				receiveOsc(msg[i][0], msg[i].splice(1));
			}
		} else {
			receiveOsc(msg[0], msg.splice(1));
		}
	});
}

function greet() {
  var name = input.value();
  greeting.html('See you soon '+name+'!');
  input.value('');
	// textSize(50);
	textAlign(RIGHT, BOTTOM);
  text(name, width-20, height-20);
  save(cnv, name+'.jpg');
	background('white');
}

// Jitter class
function rond(_x,_y) {
  this.x = _x;
  this.y = _y;
  this.diameter = random(10, 30);
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
		noStroke();
		fill('blue');
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}
