import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Tasty shnitzel',
            'A super  tasty shnitzel',
            'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg',
            [
                new Ingredient('Meat', 2),
                new Ingredient('French fries', 20)
            ]),
        new Recipe('Big burger',
            'Best burger in maxico',
            'https://www.seriouseats.com/recipes/images/2015/07/20150728-homemade-whopper-food-lab-35-1500x1125.jpg',
            [
                new Ingredient('Meat', 2),
                new Ingredient('Buns', 2),
                new Ingredient('French fries', 20)
            ])
    ];

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.shoppingListService.addIngredients(ingredients);
    }
}
