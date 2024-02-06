import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    public getIngredients(): Ingredient[] {
        return this.ingredients;
    }

    public addIngredient(ingredient: Ingredient) {
        if (!this.ingredients.includes(ingredient))
            this.ingredients.push(ingredient);
    }

}