import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    console.log(value)
    console.log(args[0])

    if(!value){
       return
    }

    if(args[0] === "m"){
      return value * 1609.34;
    }
    
    if(args[0] === "mm"){
      return value * 1609339.99997549;
    }

    return value * 1.60934;
  }

}
