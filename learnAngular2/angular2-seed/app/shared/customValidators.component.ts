import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {Control} from 'angular2/common'


export class

    CustomValidators {
    static cannotContainSpace(control: Control) {
        console.log(control.value.trim().length);
        if (control.value.trim().length > 0)
            return null;

        return {
            cannotContainSpace: true
        }

    }

      static validEmail(control: Control) {

         var patt =  /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i
        ;
        if (patt.test(control.value.trim()))
            return null;

        return {
            validEmail: true
        }

    }

}
