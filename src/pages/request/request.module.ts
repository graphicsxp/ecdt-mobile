import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { RequestListComponent }   from './request-list/request-list.component';
import { RequestDetailComponent }   from './request-detail/request-detail.component';
import { ShowArchivedPipe } from './filter/showArchived-pipe';
import { Vibration } from '@ionic-native/vibration';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { FileOpener } from '@ionic-native/file-opener';

@NgModule({
    imports: [IonicPageModule.forChild(RequestListComponent)],
    exports: [RequestListComponent, RequestDetailComponent],
    entryComponents: [RequestListComponent, RequestDetailComponent],
    declarations: [RequestListComponent, RequestDetailComponent, ShowArchivedPipe],
    providers: [Vibration, File, FileTransfer, FileOpener],
})
export class RequestModule { }
