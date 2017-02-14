import { Component } from '@angular/core';
import { CorporateService } from './shared/corporate.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private corporateService: CorporateService){
    this.corporateService.getToken();
    this.corporateService.teste('10884221440').subscribe(data => {
      console.log(data);
    });
  }
}
