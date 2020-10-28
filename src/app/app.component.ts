import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  loadedFeature = 'recipe';

  title = 'decoration-website';

  constructor (private authService: AuthService){}
  ngOnInit(): void {
    this.authService.autoLogin();
  }

}
