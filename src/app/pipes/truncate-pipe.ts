import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(
    value: string,
    limit: number = 95,
    completeWords: boolean = false,
    ellipsis: string = '...'
  ): string {
    if (!value) return '';

    if (value.length <= limit) return value;

    if (completeWords) {
      // Находим последний пробел перед лимитом
      const lastSpaceIndex = value.slice(0, limit).lastIndexOf(' ');
      if (lastSpaceIndex > 0) {
        return value.slice(0, lastSpaceIndex) + ellipsis;
      }
    }

    return value.slice(0, limit) + ellipsis;
  }
}
