import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {
	MdButtonModule,
	MdCardModule,
	MdIconModule,
	MdInputModule,
	MdTableModule,
	MdTabsModule,
	MdToolbarModule
} from '@angular/material';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {SliderComponent} from './home/slider/slider.component';
import {CardsComponent} from './home/cards-tab/cards-tab.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';
import {NavComponent} from './nav/nav.component';
import {AgmCoreModule} from 'angular2-google-maps/core';
import {MapComponent} from './home/google-map/map.component';
import {FooterComponent} from './footer/footer/footer.component';
import {OnamaComponent} from './onama/onama.component';
import {LokacijeComponent} from './lokacije/lokacije.component';
import {GalerijaComponent} from './galerija/galerija.component';
import {KontaktComponent} from './kontakt/kontakt.component';
import {HeaderComponent} from './header/header.component';
import {AppService} from './app.service';
import {ApartmaniComponent} from './apartmani/apartmani.component';
import {ApartmaniDetailComponent} from './apartmani/apartmani-detail/apartmani-detail.component';

const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'onama', component: OnamaComponent},
	{path: 'lokacija', component: LokacijeComponent},
	{path: 'galerija', component: GalerijaComponent},
	{path: 'kontakt', component: KontaktComponent},
	{path: 'apartmani', component: ApartmaniComponent},
	{path: 'apartmani/:id', component: ApartmaniDetailComponent}
];

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		SliderComponent,
		CardsComponent,
		NavComponent,
		MapComponent,
		FooterComponent,
		OnamaComponent,
		LokacijeComponent,
		GalerijaComponent,
		KontaktComponent,
		HeaderComponent,
		ApartmaniComponent,
		ApartmaniDetailComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpModule,
		NgbModule.forRoot(),
		RouterModule.forRoot(appRoutes),
		MdTabsModule,
		MdTableModule,
		MdInputModule,
		MdToolbarModule,
		MdIconModule,
		MdInputModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyB7Z_4PjI8sZydVhET0DN17ScH20NiWdsk',
		}),
		MdButtonModule,
		MdCardModule
	],
	providers: [
		AppService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}
