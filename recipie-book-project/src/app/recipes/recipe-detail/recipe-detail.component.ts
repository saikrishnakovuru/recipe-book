import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {Ingredient} from "../../shared/ingredient.model";
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  id: number;

  constructor(private shoppingListService: ShoppingListService,
              private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.selectedRecipe = this.recipeService.getRecipe(this.id);
    })
  }

  public onToShoppingList(): void {
    let ingredients: Ingredient[] = this.selectedRecipe.ingredients;
    for (let ingredient of ingredients) {
      this.shoppingListService.addIngredient(ingredient);
    }


  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }
}
