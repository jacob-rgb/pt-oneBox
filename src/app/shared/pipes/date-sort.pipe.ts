import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateSort',
  standalone: true
})
export class DateSortPipe implements PipeTransform {

  transform(array: any[], key:string, ascending: boolean = true): any[] {
    if (!array || array.length <= 1) {
      return array;
    }
    array.sort((a, b) => {
      if (ascending) {
        return Number(a[key]) - Number(b[key]);
      } else {
        return Number(b[key]) - Number(a[key]);
      }
    });
    return array;
  }

}
