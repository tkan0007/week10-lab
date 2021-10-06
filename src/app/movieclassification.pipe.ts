import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'class'
})
export class MovieclassificationPipe implements PipeTransform {

  transform(value: Number): String {
    var oldClass:String = "OLD"
    var newClass:String = "NEW"

    if(value >= 2000){
      return newClass
    }else{
      return oldClass
    }

  }

}
