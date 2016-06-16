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
                    this.lat = "52.0355031";
                    this.long = "5.0978835";
                    this.title = "AMIS";
                }
                GoogleMaps.prototype.clickedMarker = function () {
                    this.switch();
                };
                GoogleMaps.prototype.switch2 = function () {
                    console.log('I clicked on the click stuff!');
                    if (this.title == "AMIS") {
                        this.lat = "37.779";
                        this.long = "-122.3892";
                        this.title = "San Fransisco!";
                    }
                    else {
                        this.lat = "52.0355031";
                        this.long = "5.0978835";
                        this.title = "AMIS";
                    }
                };
                GoogleMaps.prototype.switch = function () {
                    console.log(this.title, 'I clicked on the large button thingy');
                    if (this.title == "AMIS") {
                        this.lat = "37.779";
                        this.long = "-122.3892";
                        this.title = "San Fransisco!";
                        console.log(this.title, 'amis');
                    }
                    else {
                        this.lat = "52.0355031";
                        this.long = "5.0978835";
                        this.title = "AMIS";
                    }
                };
                GoogleMaps = __decorate([
                    core_1.Component({
                        selector: 'my-google-comp',
                        template: "\n  \n  <div>\n       <google-map latitude={{lat}} longitude={{long}} disableDefaultUI>\n          <google-map-poly closed fill-color=\"red\" stroke-weight=\"1\"  fill-opacity=\"0.25\" click-events=\"true\"  click-events=\"true\" >\n          <google-map-point latitude=\"52.352462821730896\" longitude=\"4.954640865325928\"></google-map-point>\n          <google-map-point latitude=\"52.3561193548165\" longitude=\"4.960734844207764\"></google-map-point>\n          <google-map-point latitude=\"52.35794095553145\" longitude=\"4.950671195983887\"></google-map-point>\n          <google-map-point latitude=\"52.35435010238913\" longitude=\"4.951379299163818\"></google-map-point>\n          </google-map-poly>\n    </google-map>\n    <div (click)=\"switch2()\">Clickstuff</div>\n   <paper-button toggles class=\"fancy\" (click)=\"switch()\" >Switch places</paper-button>\n  </div>\n  ",
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