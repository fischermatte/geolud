import { Pipe, PipeTransform } from '@angular/core';
import {Interval} from './project.model';

@Pipe({
  name: 'projectPeriod',
})
export class ProjectPeriodPipe implements PipeTransform {
  transform(value: Interval, args?: any): string {
    const from = value && value.from ? new Date(value.from).getFullYear() : null;
    const to = value && value.to ? new Date(value.to).getFullYear() : null;
    if (from === to || !to) {
      return `${from}`;
    }
    return from && to ? `${from} - ${to}` : '';
  }
}
