import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'showArchived'
})

export class ShowArchivedPipe implements PipeTransform {
    transform(value: any, args: boolean): string {
        return value.filter(item => !item.isArchived || item.isArchived === args);
    }
}