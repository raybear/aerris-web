import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Apartman} from '../apartman.model';
import * as ApartMock from '../apartmans.mock';

@Component({
	selector: 'app-apartmani-detail',
	templateUrl: './apartmani-detail.component.html',
	styleUrls: ['./apartmani-detail.component.scss']
})
export class ApartmaniDetailComponent implements OnInit {
	header = 'http://www.hometec.info/wp-content/uploads/2017/08/elegant-vintage-style-apartment-on-nice-vintage-' +
		'interior-design-vintage-interior-design-wallpaper-hd-download-for-desktop.jpg';

	id: number;
	apartment: Apartman;

	constructor(private route: ActivatedRoute) {}

	ngOnInit() {

		this.route.params.subscribe(params => {
			this.id = params['id'];

			const fetchId = this.id < 10 ? '0' + this.id : this.id;

			this.apartment = ApartMock['APP_' + fetchId];
		});
	}
}
