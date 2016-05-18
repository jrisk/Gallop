import {Component, EventEmitter, Output}from '@angular/core';

@Component({
	selector: 'my-style',
	templateUrl: './app/style.component.html',
	inputs: ['colorPick', 'animationPick'],
	outputs: ['colorType']
})

export class StyleComponent {

	public colorType = new EventEmitter();

	styles = ['red', 'blue', 'green', 'purple', 'orange'];

	stylePress = false;
	colorPick = 'grey';
	animationPick = 'rtol 4s';

	changeSpeed(val) {
		this.animationPick = 'rtol ' + val;
	}

	changeColor(val) { //val cant be passed to the emitting function
		this.colorPick = val;
		this.colorType.emit(val);
	}

	stylePick() {
		(this.stylePress == true) ?
			this.stylePress = false :
			this.stylePress = true;
	}
}