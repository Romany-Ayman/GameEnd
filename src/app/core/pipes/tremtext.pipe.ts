import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tremtext',
  standalone: true,
})
export class TremtextPipe implements PipeTransform {
  transform(
    text: string,
    startWordIndex: number,
    endWordIndex: number
  ): string {
    const words = text.split(' ');

    if (
      startWordIndex < 0 ||
      endWordIndex > words.length ||
      startWordIndex >= endWordIndex
    ) {
      return text;
    }

    const selectedWords = words.slice(startWordIndex, endWordIndex);

    return selectedWords.join(' ');
  }
}
