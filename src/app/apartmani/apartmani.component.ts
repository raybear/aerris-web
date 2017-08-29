import {Component, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

import {Apartman} from './apartman.model';
import {APARTMANS} from './apartmans.mock';

@Component({
	selector: 'app-apartmani',
	templateUrl: './apartmani.component.html',
	styleUrls: ['./apartmani.component.scss']
})
export class ApartmaniComponent implements OnInit {

	header = 'http://www.hometec.info/wp-content/uploads/2017/08/elegant-vintage-style-apartment-on-nice-vintage-interior-design-vintage-interior-design-wallpaper-hd-download-for-desktop.jpg';
	apartmans: Apartman[] = APARTMANS;

	constructor() {
	}

	ngOnInit() {

	}
}

