import {  Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipesService {
    recipesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe(
    //      'A Test Recipe',
    //      'This is simply a test',
    //      'https://p0.pikist.com/photos/202/820/gastronomy-food-dishes-eat-recipe-lunch.jpg',
    //      [
    //         new Ingredient('Meat' ,1),
    //         new Ingredient('French Fries', 20)
    //      ]),
    //     new Recipe(
    //         'Another Test Recipe',
    //          'This is simply a test',
    //         'https://p0.pikist.com/photos/202/820/gastronomy-food-dishes-eat-recipe-lunch.jpg',
    //         [
    //             new Ingredient('Buns', 2),
    //             new Ingredient('Meat', 1)
    //         ])
    //   ]; 
      
    private recipes: Recipe[] = [];
      constructor(private slService: ShoppingListService) {}

      setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number){
        return this.recipes[index];
      }
      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredient(ingredients);
      }

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number ,newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
      }

}