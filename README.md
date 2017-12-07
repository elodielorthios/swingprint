# swingprint

Hardware required 

• 360° swing with a circle seat and a rope.This model (designed by Iwona Kosicka) is interesting. A compartment in the seat to place the Iphone is missing.
<p>
	<img src="/assets/3Dmodelisation.png" width="75">
	<img src="/assets/Iwona-Kosicka.jpg" width="200">
</p>
Link of the 3D modelisation here : https://grabcad.com/library/swing-chair-2/details?folder_id=1377697

• :iphone: an Iphone (sorry for the Android's purist)


### Definition of the project

#### Context

This work enters into the context of the future event "Interaction 18" in Lyon (France). 

#### How to write human movements ?

To answer this question, I created a connected and interactive swing that translates movements into forms, lines, colors (thanks to a gyroscope and an accelerometer incorporated in the seat).

### Scenario

User decides to swing in his own way. He can see directly the producted draw with the screen in front of him. When he decides to stop, he inputs his name with a keyboard
Every player will have his own memory of this experience, with the print
of the result of his experience and his name.


## How to proceed ?


### 1. <img src="/assets/GyrOSC.jpg" width="20"> GyrOSC


1. Download "GyroOSC" (it costs 1,09€) on App Store.

2. Open the app.

3. Check that "Gyroscope" and different options are activated.
<img src="/assets/options.jpg" width="200">

4. Connect the telephone and the computer on the same network.

5. Input in "Adresse IP Cible" the same IP address of the computer.
<img src="/assets/IPaddress.jpg" width="200">


6. Input in "Port" '8000'.
<img src="/assets/port.jpg" width="200">



### 2. Swing

Keep the app open and hang solidly the telephone under or on the seat with the unlocked screen.


### 3. p5js-osc

Click on the link, dowload the library and follow the instructions.
https://github.com/genekogan/p5js-osc
(if you are lazy : 
1. Install ![node]https://nodejs.org/en/

2. Open Terminal. Clone this repo and run npm to get required libraries.

		$ git clone https://github.com/genekogan/p5js-osc
		$ cd p5js-osc/
		$ npm install

3. Start node
		```
		$ node bridge.js
		```


When you want to work again, open Terminal :

		cd 'insert folder where there is the file *bridge.js* and the node'  
		node bridge.js

## Program

The work-file is 'sketch.js' in the folder 'p5-basic'.
1. In the setup, you must change the first value of 'setupOsc' to correspond with the value of the port of the telephone's app.
```javascript
	function setup() {
	setupOsc(8000, 3334);
	}
```

2. In the same time, you must change the value of port in the function 'setupOsc'
```javascript
	function setupOsc(oscPortIn, oscPortOut) {
	var socket = io.connect('http://127.0.0.1:8081', { port: 8000, rememberTransport: false });
	}
```

## Work evolutions

*:disappointed: V.0.1 : cercles follow the cursor. Firstly I worked on the print of the mouse's movement. 


*:no_mouth: V.0.2 : connect gyroscop's phone and computer


*:blush: V.1.0 : input the name. This action saves the file and erases/resets the experience.
https://p5js.org/examples/dom-input-and-button.html

I copied and pasted the piece of code of this example. The principal function is **function greet()**.
But I didn't want that my name appears everywhere on the canvas. 

Firstly, I substituted 'hello' with 'See you soon !'. It looks like a triviatly, but user enters his name at the end of his experience, and the SwingPrint is courteous.

Secondly, the loop is useless.

```javascript
		function greet() {
		var name = input.value();
		greeting.html('See you soon '+name+'!');
		input.value('');
		textAlign(RIGHT, BOTTOM);
		text(name, width-20, height-20);
		save(cnv, name+'.jpg');
		background('white');
		}
```

*:smiley: V.1.2 : introduce the amazing world of objects.

## More ...

STOP & START

- [ ] When you click on "Submit", the experience stop
- [ ] Create a Start button (for the experience begins when you decide)

GOODIES :gift:

- [ ] Print
- [ ] Incorporate an image and a font
- [ ] Superpoze all the saved results to create a global creation
- [ ] Superpoze all the saved results to create a global creation
