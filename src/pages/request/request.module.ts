import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { RequestListComponent }   from './request-list/request-list.component';
import { RequestDetailComponent }   from './request-detail/request-detail.component';
import { ShowArchivedPipe } from './filter/showArchived-pipe';

@NgModule({
    imports: [
            IonicModule.forRoot(RequestListComponent),
    ],
    exports: [RequestDetailComponent],
    entryComponents: [RequestDetailComponent],
    declarations: [RequestListComponent, RequestDetailComponent, ShowArchivedPipe],
    providers: [],
})
export class RequestModule { }
