import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() chooseRecipe = new EventEmitter<Recipe>()
  

  recipes: Recipe[] = [
    new Recipe('SourDough', 'Bread Recipe', 'https://www.theclevercarrot.com/wp-content/uploads/2013/12/sourdough-bread-round-1-of-1.jpg'),
    new Recipe('More bread', 'some Bread Recipe', 'https://www.theclevercarrot.com/wp-content/uploads/2013/12/sourdough-bread-round-1-of-1.jpg')
  ]

  handleChooseRecipe(recipe: Recipe){
    this.chooseRecipe.emit(recipe)
  }

}
