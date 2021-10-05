import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearAgeConvert'
})
export class YearAgeConvertPipe implements PipeTransform {

  transform(value: number): number {
    var today = new Date()
    var year:number = Number(today.getFullYear())
    console.log(year + "/" + value)

    var age = year - value

    return age;
  }

}
