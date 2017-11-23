import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'upperCase'
})
export class UpperCasePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let space = " ";
    let splitString = value.split(space);
    let newString = ""
    let first = true;
    for (let word of splitString) {
      word = word.toLowerCase();
      if (word === '')
        continue;
      if ((word !== 'of' && word !== 'the') || (first === true)) {
        newString = newString + space + word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() ;
      }
      else {
        newString = newString + space +  word ;
      }
      first = false;
    }
    return newString;
  }
}


