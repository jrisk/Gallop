"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var message_service_1 = require('./message.service');
var emoji = require('twemoji');
var ChatComponent = (function () {
    function ChatComponent(_messageService) {
        this._messageService = _messageService;
    }
    ChatComponent.prototype.getMessages = function () {
        var _this = this;
        this._messageService.getMessages().then(function (messages) { _this.messages = messages; });
    };
    ChatComponent.prototype.onPost = function (msg) {
        this.messages.push({ msg: msg.message, sender: 'joe', time: '144pm' });
        this.myInput.nativeElement.value = '';
    };
    ChatComponent.prototype.ngOnInit = function () {
        this.getMessages();
        this.scrollToBottom();
    };
    ChatComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    ChatComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
            emoji.parse(this.myMessageList.nativeElement.lastElementChild);
        }
        catch (err) { }
    };
    __decorate([
        core_1.ViewChild('scrollMe'), 
        __metadata('design:type', core_1.ElementRef)
    ], ChatComponent.prototype, "myScrollContainer", void 0);
    __decorate([
        core_1.ViewChild('msglist'), 
        __metadata('design:type', core_1.ElementRef)
    ], ChatComponent.prototype, "myMessageList", void 0);
    __decorate([
        core_1.ViewChild('inputvar'), 
        __metadata('design:type', core_1.ElementRef)
    ], ChatComponent.prototype, "myInput", void 0);
    ChatComponent = __decorate([
        core_1.Component({
            selector: 'mychat',
            templateUrl: 'app/chat.component.html'
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map