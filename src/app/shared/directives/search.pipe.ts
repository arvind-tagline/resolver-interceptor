import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args: any): any {
    // if(!args) return value;
    //   const re = new RegExp("\\b("+args+"\\b)", 'ig');
    //   value= value.replace(re, '<span class="text-danger fw-bold">$1</span>');
    //   return value;
    if(!args) return value;
      const re = new RegExp(args, 'igm');
      value= value.replace(re, `<span class="text-danger fw-bold">${args}</span>`);
      return value;
  }

}
