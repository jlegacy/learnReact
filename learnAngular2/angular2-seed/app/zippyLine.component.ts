import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'zipline',
    template: `
            
                <div class="outer">
                    <div>{{myZippy.title}} 
                        <span *ngIf = "isActive" (click)="hideMessage($event)" class="pull-right glyphicon glyphicon-chevron-up" aria-hidden="true"></span>
                        <span *ngIf = "isHidden" (click)="showMessage($event)" class="pull-right glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
                     </div>
                        <ul [ngClass]="{
                                active: isActive,
                                hidden: isHidden
                            }" *ngFor="#zippyContent of myZippy.content">
                            <li>  {{zippyContent}} </li>
                        </ul>
                </div>

        `,
    styles: [
        `
        .outer {width:400px; border:1px solid black; border-radius:3px;}
        .active {color:orange;}
        .hidden {display:none;}
        `
    ],
})
export class

    ZipLineComponent {

    @Input() myZippy = {};

    zippys = [];
    isHidden = true;
    isActive = false;
   

      hideMessage(evt) {
        this.isHidden = true;
        this.isActive = false;
    }

      showMessage(evt) {
        this.isHidden = false;
        this.isActive = true;
    }

}
