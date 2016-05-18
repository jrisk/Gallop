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
var http_1 = require('@angular/http');
var message_service_1 = require('./message.service');
var emoji = require('twemoji');
var vidoption_component_1 = require('./vidoption.component');
var style_component_1 = require('./style.component');
var VideoComponent = (function () {
    function VideoComponent(_messageService, http) {
        this._messageService = _messageService;
        this.http = http;
        this.colorPick = "red";
        this.youtube = false;
        this.hitbox = false;
        this.twitch = false;
        this.vidmsg = [{ msg: 'woah', sender: 'jeff', time: 'twopm' }];
        this.video = {
            youtube: {
                url: 'https://www.youtube.com/embed/eoPbjXJY5DI?autoplay=1'
            },
            twitch: {
                url: 'https://player.twitch.tv/?channel=dreamhacksc2'
            },
            hitbox: {
                url: 'http://www.hitbox.tv/aravingloon'
            }
        };
    }
    VideoComponent.prototype.colorChange = function (color) {
        this.colorPick = color;
    };
    VideoComponent.prototype.onSelect = function (value) {
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
    };
    VideoComponent.prototype.messageUpdate = function () {
        var _this = this;
        this._messageService.getMessages()
            .then(function (messages) { _this.vidmsg = messages; });
    };
    VideoComponent.prototype.ngOnInit = function () {
        this.messageUpdate();
    };
    VideoComponent.prototype.doParse = function () {
        emoji.parse(this.myMessageList.nativeElement.lastElementChild);
    };
    VideoComponent.prototype.ngAfterViewChecked = function () {
        this.doParse();
    };
    __decorate([
        core_1.ViewChild('videomessage'), 
        __metadata('design:type', core_1.ElementRef)
    ], VideoComponent.prototype, "myMessageList", void 0);
    VideoComponent = __decorate([
        core_1.Component({
            selector: 'vid',
            templateUrl: 'app/video.component.html',
            inputs: ['vidmsg', 'selection'],
            directives: [vidoption_component_1.OptionComponent, style_component_1.StyleComponent]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService, http_1.Http])
    ], VideoComponent);
    return VideoComponent;
}());
exports.VideoComponent = VideoComponent;
//# sourceMappingURL=video.component.js.map