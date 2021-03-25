import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): any {
    return Math.pow(value, 2);
  }

}
