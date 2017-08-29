import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-lokacije',
	templateUrl: './lokacije.component.html',
	styleUrls: ['./lokacije.component.scss']
})
export class LokacijeComponent implements OnInit {
	txt: string = "The Shiba Inu is the smallest of the six original\n" +
		"\t\t\t\tand distinct spitz breeds of dog from Japan."
	img: string = 'http://www.hotel-president.biz/images/gallery/zlatibor/Zlatibor_jezero.jpg';

	constructor() {
	}

	ngOnInit() {
	}

}
