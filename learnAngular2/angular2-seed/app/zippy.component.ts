import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {ZippyService} from './zippy.service';
import {ZipLineComponent} from './zippyLine.component';

@Component({
    selector: 'zippy',
    template: `
            <div  *ngFor="#zippy of zippys">
                 <zipline [myZippy]=zippy></zipline>
            </div>
        `,
    directives:[ZipLineComponent],
    providers: [ZippyService]
})
export class

    ZippyComponent {
    zippys = [];
    constructor(zippyService: ZippyService) {
        this.zippys = zippyService.getZippys();
    }

}
