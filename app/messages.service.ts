import {Injectable} from '@angular/core';
import {Messages} from './messages';
@Injectable()

export class MessageService {

	getMessages() {
		return Promise.resolve(Messages);
	}
}