import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: any): any {
    // if(value.length>0)
    //   return value.split("").reverse().join("");
    // else
    //   return null;
    if(value.length>0)
      return value.sort();
    else
      return null;
  }

}
