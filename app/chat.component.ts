import { Component, Input, Output, OnInit, AfterViewChecked, ElementRef, ViewChild  } from '@angular/core';
import {NgForm} from '@angular/common';
import {MESSAGE} from './message';
import {MessageService} from './message.service'
import * as emoji from 'twemoji';

@Component({
	selector: 'mychat',
	templateUrl: 'app/chat.component.html'
})

export class ChatComponent implements OnInit, AfterViewChecked {

	private el: HTMLElement;

	constructor(private _messageService : MessageService) {}

	messages: MESSAGE[];

	getMessages() {
		this._messageService.getMessages().then(
			(messages) => { this.messages = messages; }
			);
	}

	@ViewChild('scrollMe') private myScrollContainer: ElementRef;
	@ViewChild('msglist') private myMessageList: ElementRef;
	@ViewChild('inputvar') private myInput: ElementRef;

	onPost(msg) {
		this.messages.push({ msg: msg.message, sender: 'joe', time: '144pm' });
		this.myInput.nativeElement.value = '';
	}

	ngOnInit() {
		this.getMessages();
        this.scrollToBottom();
    }

    ngAfterViewChecked() {
        this.scrollToBottom();
    }

    scrollToBottom(): void {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
			emoji.parse(this.myMessageList.nativeElement.lastElementChild);
        } catch (err) { }
    }
}