import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'colDate'
})
export class ColDatePipe extends
DatePipe implements PipeTransform {
transform(value: any, args?: any): any {
return super.transform(value, 'dd/MM/yyyy');
  }

}
