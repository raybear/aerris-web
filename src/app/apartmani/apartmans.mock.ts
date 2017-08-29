import {Apartman, Image} from './apartman.model';

export const APP_01: Apartman = new Apartman(
	1,
	1,
	42,
	'Modern',
	'Standard',
	'Sever / Istok',
	false,
	true,
	[
		new Image('apartman11'),
		new Image('apartman12'),
		new Image('apartman13'),
		new Image('apartman14')
	]
);

export const APP_02: Apartman = new Apartman(2, 1, 63, 'Neo Baroque', 'Lux', 'Sever / Zapad', false, false);
export const APP_03: Apartman = new Apartman(3, 1, 66, 'Modern', 'Lux', 'Jug / Zapad', false, true, null);
export const APP_04: Apartman = new Apartman(4, 2, 46, 'Etno', 'Standard', 'Sever / Istok', true, true, null);

export const APARTMANS: Apartman[] = [

	APP_01,
	APP_02,
	APP_03,
	APP_04,
];
