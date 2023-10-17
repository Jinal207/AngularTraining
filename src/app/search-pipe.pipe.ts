import { compileNgModule } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(value: any[], query: string): any[] {
    if (!value.length) return value;
    if (!query) return value;

    query = query.toLowerCase();

    let res = value.filter((item: any) => {
      return item.firstname.toLowerCase().includes(query) || item.lastname.toLowerCase().includes(query) || item.address.toLowerCase().includes(query)
    });

    return res;
  }

}
