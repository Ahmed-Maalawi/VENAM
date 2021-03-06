import { Component } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'project_1';
  router: any;

  constructor(private _TranslateService:TranslateService)
  {
    this._TranslateService.addLangs(['en', 'ar']);
    this._TranslateService.setDefaultLang('en');
  }


  onActivate(event: any)
  {
    // window.scroll(0,0);
 
    window.scroll({ 
      top: 0, 
      left: 0, 
       
    });
 
     //or document.body.scrollTop = 0;
     //or document.querySelector('body').scrollTo(0,0)
     
  }

  translateLanguageTo(lang: string): void 
  {
    this._TranslateService.use(lang);
  }
}

