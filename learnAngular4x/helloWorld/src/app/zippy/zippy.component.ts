import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  myTitle;
  showDetails = false;

  toggleMe(){
    this.showDetails = (!this.showDetails);
  }
  constructor(elRef: ElementRef) {
    this.myTitle = elRef.nativeElement.title;
  }
}
