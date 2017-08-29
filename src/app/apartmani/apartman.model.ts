export class Apartman {

	constructor(public id: number,
				public floor: number,
				public area: number,
				public style: ApartmanStyle,
				public type: ApartmanType,
				public posittion: ApartmanPosition,
				public terace: boolean,
				public available: boolean,
				public images?: Image[]) {
	}
}

export type ApartmanType = 'Lux' | 'Standard';

export type ApartmanStyle = 'Modern' | 'Etno' | 'Neo Baroque';

export type ApartmanPosition = 'Sever / Istok' | 'Sever / Zapad' | 'Jug / Zapad';

export class Image {

	constructor(public image: string,
				public title?: string) {}
}
