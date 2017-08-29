import {Component, OnInit} from '@angular/core';
import {AppService, IMessage} from '../app.service';

@Component({
	selector: 'app-kontakt',
	templateUrl: './kontakt.component.html',
	styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent implements OnInit {
	message: IMessage = {};

	constructor(private appService: AppService) {
	}

	sendEmail(message: IMessage) {
		this.appService.sendEmail(message).subscribe(res => {
			console.log('KontaktComponent Success', res);
		}, error => {
			console.log('KontaktComponent Error', error);
		});
	};

	ngOnInit() {
	}

}
