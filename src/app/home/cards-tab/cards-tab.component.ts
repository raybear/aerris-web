import {Component, Input, OnInit} from '@angular/core';
import {CardsComponentModel} from './cards-tab.component.model';

@Component({
	selector: 'app-cards-tab',
	templateUrl: './cards-tab.component.html',
	styleUrls: ['./cards-tab.component.scss']
})
export class CardsComponent implements OnInit {

	constructor() {
	}

	tabs: any [] = [
		new CardsComponentModel('Tehnologija',
			'./assets/photos/quality.png',
			'Donec aliquet ipsum nec tincidunt fringilla.' +
			' Curabitur egestas, urna in condimentum pellentesque,' +
			' augue tellus posuere odio, et tincidunt magna neque sit' +
			' amet massa. Nullam at augue eget est congue hendrerit.' +
			' Nunc iaculis odio mauris, in ultrices felis eleifend quis.' +
			' Proin luctus augue at felis efficitur, vel sagittis arcu egestas.',
			'DETALJNIJE'),
		new CardsComponentModel('Plan Izgradnje',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeRV5mnmYVb0Hz43C7vIW6-h35MxljOG3t0hOI793tKGP-_Jzoxg',
			'Lorem Ipsum is simply ' +
			'dummy text of the printing and typesetting industry.' +
			'Lorem Ipsum has been the industrys standard dummy tex' +
			' ever since the 1500s, when an unknown printer tookLorem Ipsum.' +
			'Lorem Ipsum has been the Ipsum',
			'DETALJNIJE'),
		new CardsComponentModel('Investitori',
			'http://www.lavozdecataratas.com/contenido/fotos/23062015_090554.jpg',
			'Lorem Ipsum is simply ' +
			'dummy text of the printing and typesetting industry.' +
			'Lorem Ipsum has been the industrys standard dummy tex' +
			' ever since the 1500s, when an unknown printer tookLorem Ipsum.' +
			'Lorem Ipsum has been the Ipsum',
			'DETALJNIJE'),
	];

	ski = './assets/photos/skiing-icon.png';
	lake = './assets/photos/lake-icon.png';
	airport = './assets/photos/airport-icon.png';

	ngOnInit() {
	}

}
