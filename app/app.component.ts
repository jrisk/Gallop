import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes, Router} from '@angular/router';
import {MESSAGE} from './message';
import {MessageService} from './message.service';
import {OptionComponent} from './vidoption.component';
import { ChatComponent } from './chat.component';
import { VideoComponent } from './video.component';
import {SearchComponent} from './search.component';

@Component({
	selector: 'my-app',
	template: `<search></search>
	<vid></vid>
		<mychat></mychat>`,
	directives: [ChatComponent, VideoComponent, SearchComponent],
  providers: [MessageService]
})
		@Routes([
		{
			path: '/video',
			component: VideoComponent
		}
])

export class AppComponent implements OnInit {

	constructor(private router: Router) {}

	test: MESSAGE[] = [{ msg: 'hmmm', sender: 'ted', time: 'pm' }];

	ngOnInit() {
		//this.router.navigate(['/video'])
	}

}