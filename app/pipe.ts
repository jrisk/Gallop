import {Pipe} from '@angular/core';

@Pipe({
	name: 'search'
})

export class SearchPipe {
	transform(value) {
		return value;
	}

	something() {
		console.log('hello search');
	}
}