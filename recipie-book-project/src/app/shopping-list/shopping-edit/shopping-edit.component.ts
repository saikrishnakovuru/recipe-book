import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  public onAddButtonClick(ingredientName: HTMLInputElement, ingredientQuantity: HTMLInputElement) {
    if (ingredientName.value !== '' && ingredientQuantity.value !== '') {
      // this.passIngredients.emit(new Ingredient(this.ingredientName, +this.ingredientQuantity));
      this.shoppingListService.setIngredient(ingredientName.value, +ingredientQuantity.value);
    }
  }

}
