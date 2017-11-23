import { Component} from '@angular/core';

@Component({
    selector: 'favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent {

    isFavorite = false;
    myCounter = 0;

    toggleMe() {
        this.isFavorite = this.isFavorite ? false : true;
    }
}

