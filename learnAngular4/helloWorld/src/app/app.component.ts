import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  likes = 0;
  isFavorite = false;

   toggleMe() {
        this.isFavorite = this.isFavorite ? false : true;
        this.likes = this.isFavorite ? this.likes += 1 : this.likes -= 1;
    }
}
