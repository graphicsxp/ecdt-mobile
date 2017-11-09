import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { RequestListComponent }   from './request-list/request-list.component';
import { RequestDetailComponent }   from './request-detail/request-detail.component';
import { ShowArchivedPipe } from './filter/showArchived-pipe';

@NgModule({
    imports: [IonicPageModule.forChild(RequestListComponent)],
    exports: [RequestListComponent, RequestDetailComponent],
    entryComponents: [RequestListComponent, RequestDetailComponent],
    declarations: [RequestListComponent, RequestDetailComponent, ShowArchivedPipe],
    providers: [],
})
export class RequestModule { }
