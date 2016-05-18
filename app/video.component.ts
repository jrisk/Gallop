import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {MESSAGE} from './message';
import {MessageService} from './message.service';
import * as emoji from 'twemoji';
import {OptionComponent} from './vidoption.component';
import {StyleComponent} from './style.component';

@Component({
	selector: 'vid',
	templateUrl: 'app/video.component.html',
	inputs: ['vidmsg', 'selection'],
	directives: [OptionComponent, StyleComponent]
})

export class VideoComponent implements OnInit, AfterViewChecked {

	colorChange(color) {
		this.colorPick = color;
	}

	colorPick: any = "red";

	selection: any;
	youtube = false;
	hitbox = false;
	twitch = false;
		
	onSelect(value) {

		this.selection = value;
			if (value == 'youtube') {
			this.youtube = true;
			this.hitbox = false;
			this.twitch = false;
		}
			else if (value == 'twitch') {
			this.youtube = false;
			this.hitbox = false;
			this.twitch = true;
		}
			else if (value == 'hitbox') {
			this.youtube = false;
			this.hitbox = true;
			this.twitch = false;
		}
	}

	@ViewChild('videomessage') private myMessageList: ElementRef;

	vidmsg: MESSAGE[] = [{ msg: 'woah', sender: 'jeff', time: 'twopm' }];

	constructor(private _messageService: MessageService,
		private http: Http) { }

	messageUpdate() {
		this._messageService.getMessages()
			.then((messages) => { this.vidmsg = messages; })
	}

	ngOnInit() {
		this.messageUpdate();
	}

	doParse() {
		emoji.parse(this.myMessageList.nativeElement.lastElementChild);
	}

	ngAfterViewChecked() {
		this.doParse();
	}

	video =
	{
		youtube: {
			url: 'https://www.youtube.com/embed/eoPbjXJY5DI?autoplay=1'
		},
		twitch: {
			url: 'https://player.twitch.tv/?channel=dreamhacksc2'
		},
		hitbox: {
			url: 'http://www.hitbox.tv/aravingloon'
		}
	}

}