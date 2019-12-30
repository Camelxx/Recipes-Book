import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})

export class RecipesService {

 private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
      ingredients: ['French Fries' , 'Pork Meat' , 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://www.errenskitchen.com/wp-content/uploads/2015/02/Quick-Easy-Spaghetti-Bolognese2-1.jpg',
      ingredients: ['Spaghetti' , 'Meat' , 'Tomamtoes']
    },
    {
      id: 'r3',
      title: 'T-Bone & Chips',
      imageUrl: 'https://previews.123rf.com/images/foodandmore/foodandmore1406/foodandmore140600058/29344457-tender-grilled-porterhouse-or-t-bone-steak-served-with-crisp-golden-french-fries-and-fresh-green-her.jpg',
      ingredients: ['500 g T-Bone' , 'Chips' , 'Salad']
    },
    {
      id: 'r4',
      title: 'Ribs & Chips',
      imageUrl: 'https://www.eatout.co.za/wp-content/uploads/2013/04/Hussar-Grill.jpg',
      ingredients: ['500 g Ribs' , 'Chips' , 'Buffalo wings']
    }
];

 constructor() { }

 getAllRecipes() {
    return [...this.recipes] ;
 }

 getRecipe(recipeId: string) {
   return {...this.recipes.find(recipe =>{
     return recipe.id === recipeId;
   })};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}

