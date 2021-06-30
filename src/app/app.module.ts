import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


/* Components */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

/* Directves */
import { FadeInOutDirective } from './directives/fade.directive';

/* Services */

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		NavBarComponent,
		GalleryComponent,
		AboutComponent,
		ContactComponent,

		FadeInOutDirective
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule,
		BrowserAnimationsModule
        
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
