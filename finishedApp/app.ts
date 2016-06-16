import { bootstrap } from "angular2/platform/browser";
import { EventEmitter, Output, Component } from "angular2/core";
 
@Component({
  selector: 'my-google-comp',
  template: `
  
  <div>
       <google-map latitude={{lat}} longitude={{long}} disableDefaultUI>
          <google-map-poly closed fill-color="red" stroke-weight="1"  fill-opacity="0.25" click-events="true"  click-events="true" >
          <google-map-point latitude="52.352462821730896" longitude="4.954640865325928"></google-map-point>
          <google-map-point latitude="52.3561193548165" longitude="4.960734844207764"></google-map-point>
          <google-map-point latitude="52.35794095553145" longitude="4.950671195983887"></google-map-point>
          <google-map-point latitude="52.35435010238913" longitude="4.951379299163818"></google-map-point>
          </google-map-poly>
    </google-map>
    <div (click)="switch2()">Clickstuff</div>
   <paper-button toggles class="fancy" (click)="switch()" >Switch places</paper-button>
  </div>
  `,
  directives: [] 
})
class GoogleMaps {
 lat:string;
 long:string;
 title:string;
 constructor(){
  
     this.lat="52.0355031"
     this.long="5.0978835"
     this.title="AMIS";
 }
 
 
 clickedMarker(){
     this.switch();
 }
 
 switch2(){ 
     console.log('I clicked on the click stuff!');
     if(this.title=="AMIS"){   
        this.lat="37.779"
        this.long="-122.3892"
        this.title="San Fransisco!";}
     else{       
        this.lat="52.0355031"
        this.long="5.0978835"
        this.title="AMIS";
     }
 }
 
 switch(){ 
     console.log(this.title, 'I clicked on the large button thingy');
     if(this.title=="AMIS"){   
        this.lat="37.779"
        this.long="-122.3892"
        this.title="San Fransisco!";
    console.log(this.title,'amis');}
     else{       
        this.lat="52.0355031"
        this.long="5.0978835"
        this.title="AMIS";
     }
 }
}


bootstrap(GoogleMaps);
