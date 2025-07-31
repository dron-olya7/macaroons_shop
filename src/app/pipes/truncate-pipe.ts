import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 95, ellipsis: string = '...'): string {
    if (!value) return '';
    return value.length > limit ? value.slice(0, limit) + ellipsis : value;
  }
}
