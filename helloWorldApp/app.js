System.register(["angular2/platform/browser", "angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1;
    var GoogleMaps;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GoogleMaps = (function () {
                function GoogleMaps() {
                }
                GoogleMaps = __decorate([
                    core_1.Component({
                        selector: 'my-google-comp',
                        template: "\n  <div>\n      Hello World\n  </div>\n  ",
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], GoogleMaps);
                return GoogleMaps;
            })();
            browser_1.bootstrap(GoogleMaps);
        }
    }
});
//# sourceMappingURL=app.js.map