import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'showArchived',
    pure: false  //make the pipe impure so that data will refresh whenever there's a change
})

export class ShowArchivedPipe implements PipeTransform {
    transform(value: any, args: boolean): string {
        return value.filter(item => !item.isArchived || item.isArchived === args);
    }
}