# swingprint

Hardware required 

• 360° swing with a circle seat and a rope
![swing](/assets/3Dmodelisation.png)
![swing](/assets/Iwona-Kosicka.jpg)
https://grabcad.com/library/swing-chair-2/details?folder_id=1377697

• :iphone: an Iphone (sorry for the Android's purist)


### Project

#### How to write human movements ?
Create a connected and interactive swing that translates movements into forms, lines, colors (thanks to a gyroscope and an accelerometer incorporated in the seat).

### Scenario

User decides to swing in his own way. He can see directly the producted draw with the screen in front of him. When he decides to stop, he inputs his name with a keyboard
Every player will have his own memory of this experience, with the print
of the result of his experience and his name.



## GyrOSC
![screen1](/assets/GyrOSC.jpg)

1. Download "GyroOSC" (it costs 1,09€) on App Store.

2. Open the app.

3. Check that "Gyroscope" and different options are activated.
![screen1](/assets/options.jpg)

4. Connect the telephone and the computer on the same network.

5. Input in "Adresse IP Cible" the same IP address of the computer.
![screen1](/assets/IPaddress.jpg)


6. Input in "Port" '8000'.
![screen1](/assets/port.jpg)



## Swing

Keep the app open and hang solidly the telephone under or on the seat with the unlocked screen.

## p5js-osc

Click on the link, dowload the library and follow the instructions.
https://github.com/genekogan/p5js-osc

When you want to work again, open Terminal :

		`cd 'insert folder where there is the file *bridge.js* and the node'`  
		`node bridge.js` 

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

## Evolutions

:disappointed: V.0.1
:confused:
:hushed:
:no_mouth:
:simple_smile:
:smiley:

## More ...

STOP & START

- [ ] When you click on "Submit", the experience stop
- [ ] Create a Start button (for the experience begins when you decide)

GOODIES :gift:

- [ ] Print
- [ ] Incorporate an image and a font
- [ ] Superpoze all the saved results to create a global creation
- [ ] Superpoze all the saved results to create a global creation
