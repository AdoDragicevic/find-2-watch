import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceAll'
})
export class ReplaceAllPipe implements PipeTransform {

  transform(value: string, remove: string, add: string): string {
    return value.split(remove).join(add);
  }

}
