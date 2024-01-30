import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[] = [
    new Recipe('Chicken Biryani', 'Dum Biryani', 'https://b3067249.smushcdn.com/3067249/wp-content/uploads/2023/03/chicken-Biryani-848x477.jpg?lossy=0&strip=1&webp=1'),
    new Recipe('Mutton Biryani', 'Fry Peace', 'https://paattiskitchen.com/wp-content/uploads/2023/03/kmc_20230323_230721.jpg')
  ];

  @Output() itemSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit() {
  }

  selectedRecipeItem(item: Recipe) {
    this.itemSelected.emit(item);
  }
}
