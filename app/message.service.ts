import {Injectable} from '@angular/core';
import {messages} from './messages';

@Injectable()

export class MessageService {

	getMessages() {
		return Promise.resolve(messages);
	}
}