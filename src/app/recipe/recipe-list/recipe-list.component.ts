import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor() {
    this.recipes.push(
      new Recipe(
        'Test Recipe',
        'This is test recipe description',
        'https://p0.pxfuel.com/preview/431/473/191/noodle-dish-chicken-farmer-cook.jpg')
    );
    this.recipes.push(
      new Recipe(
        'Test Recipe 2',
        'This is test recipe 2 description',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnfFLUKS_sIeU0PngAkw6_lj98xOUQeYc03G1HLqz10G_tX_2XGw&s')
    );
  }

  ngOnInit(): void {
  }

}
