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
var StyleComponent = (function () {
    function StyleComponent() {
        this.colorType = new core_1.EventEmitter();
        this.styles = ['red', 'blue', 'green', 'purple', 'orange'];
        this.stylePress = false;
        this.colorPick = 'grey';
        this.animationPick = 'rtol 4s';
    }
    StyleComponent.prototype.changeSpeed = function (val) {
        this.animationPick = 'rtol ' + val;
    };
    StyleComponent.prototype.changeColor = function (val) {
        this.colorPick = val;
        this.colorType.emit(val);
    };
    StyleComponent.prototype.stylePick = function () {
        (this.stylePress == true) ?
            this.stylePress = false :
            this.stylePress = true;
    };
    StyleComponent = __decorate([
        core_1.Component({
            selector: 'my-style',
            templateUrl: './app/style.component.html',
            inputs: ['colorPick', 'animationPick'],
            outputs: ['colorType']
        }), 
        __metadata('design:paramtypes', [])
    ], StyleComponent);
    return StyleComponent;
}());
exports.StyleComponent = StyleComponent;
//# sourceMappingURL=style.component.js.map