import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { MetaService } from 'src/app/services/meta.service';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent {
	
	public contactAnimationOptions: AnimationOptions = {
		path: 'assets/animations/contact-mail.json'
	};
	
	public itAnimationOptions: AnimationOptions = {
		path: 'assets/animations/about-it.json'
	};
	
	public codeAnimationOptions: AnimationOptions = {
		path: 'assets/animations/about-code.json'
	};

	public designAnimationOptions: AnimationOptions = {
		path: 'assets/animations/about-design.json'
	};

	constructor(
        private metaService: MetaService
    ) { 
        this.metaService.updateTitle('About');
    }

}
