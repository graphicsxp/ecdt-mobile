import { Component, Input } from '@angular/core';

@Component({
    selector: 'cdt-header',
    template: `<ion-header>
	<ion-grid>
		<ion-row>
			<ion-col width-10><img src="assets/images/favicon-32x32.png" /></ion-col>
			<ion-col>
				<ion-title>eCdT. Mobile </ion-title>
			</ion-col>
		</ion-row>
	</ion-grid>
</ion-header>
    `
})
export class HeaderComponent {
    @Input() headerTitle: string = '';
    constructor() { }
}