import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { RequestListComponent }   from './request-list/request-list.component';
import { RequestDetailComponent }   from './request-detail/request-detail.component';
import { ShowArchivedPipe } from './filter/showArchived-pipe';

@NgModule({
    imports: [IonicModule],
    exports: [RequestListComponent, RequestDetailComponent],
    entryComponents: [RequestListComponent, RequestDetailComponent],
    declarations: [RequestListComponent, RequestDetailComponent, ShowArchivedPipe],
    providers: [],
})
export class RequestModule { }
