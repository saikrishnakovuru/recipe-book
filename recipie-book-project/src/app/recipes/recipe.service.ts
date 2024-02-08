import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'Chicken Biryani',
            'Dum Biryani',
            'https://b3067249.smushcdn.com/3067249/wp-content/uploads/2023/03/chicken-Biryani-848x477.jpg?lossy=0&strip=1&webp=1',
            [new Ingredient('chicken', 3), new Ingredient('Chicken Masala', 1)]
        ),
        new Recipe(
            'Mutton Biryani',
            'Fry Peace',
            'https://paattiskitchen.com/wp-content/uploads/2023/03/kmc_20230323_230721.jpg',
            [new Ingredient('Mutton', 3), new Ingredient('Mutton Masala', 1)]
        )
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number): Recipe {
        return this.recipes[index];
    }
}