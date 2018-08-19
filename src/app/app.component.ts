import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-http-service';

 
  constructor(private http: HttpClient){

  }

  ngOnInit(){
    let observabcleData = this.http.get('https://api.github.com/users/beingsagir');
    observabcleData.subscribe((responseData) => {
      console.log(responseData);
    });
  }

}
