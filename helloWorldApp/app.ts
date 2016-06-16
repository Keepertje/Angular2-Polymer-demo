import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";
@Component({
  selector: 'my-google-comp',
  template: `
  <div>
      Hello World
  </div>
  `,
  directives: [] 
})
class GoogleMaps {
    
}


bootstrap(GoogleMaps);
