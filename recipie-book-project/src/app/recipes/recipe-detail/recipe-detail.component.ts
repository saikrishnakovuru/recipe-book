import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {
  }
  ngOnInit() {

  }

  public onToShoppingList(): void {
    let ingredients: Ingredient[] = this.selectedRecipe.ingredients;
    for (let ingredient of ingredients) {
      this.shoppingListService.addIngredient(ingredient);
    }


  }

}
