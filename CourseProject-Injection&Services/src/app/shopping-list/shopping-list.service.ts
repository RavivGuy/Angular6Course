import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    ingredeintsChanged = new EventEmitter<Ingredient[]>();

    getIngredeients() {
        return this.ingredients.slice();
    }

    addNewIngredient(ingredientToAdd: Ingredient) {
        this.ingredients.push(ingredientToAdd);
        this.ingredeintsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
      this.ingredients.push(...ingredients);
      this.ingredeintsChanged.emit(this.ingredients.slice());
    }
}
