import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
  standalone: true
})
export class PhonePipe implements PipeTransform {
  transform(rawNum: string): string {
    // Проверяем, что номер строго соответствует белорусскому формату
    if (!rawNum || !/^375\d{9}$/.test(rawNum)) {
      console.warn('PhonePipe: Номер должен содержать 12 цифр и начинаться с 375');
      return rawNum || '';
    }

    // Форматируем по шаблону +375 (XX) XXX-XX-XX
    return `+${rawNum.slice(0, 3)} (${rawNum.slice(3, 5)}) ${rawNum.slice(5, 8)}-${rawNum.slice(8, 10)}-${rawNum.slice(10)}`;
  }
}
