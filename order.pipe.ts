import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(array: any, args: string): any {
    if (!Array.isArray(array)) {
      return array;
    }
    if(args == 'Ascending'){
      return array.sort((a, b) => {
        if (a.firstname < b.firstname) {
          return -1;
        } else if (a.firstname > b.firstname) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    else if(args == 'Descending'){
      return array.sort((a, b) => {
        if (a.firstname < b.firstname) {
          return 1;
        } else if (a.firstname > b.firstname) {
          return -1;
        } else {
          return 0;
        }
      });
    }
  }

}
