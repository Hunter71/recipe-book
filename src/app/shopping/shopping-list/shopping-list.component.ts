import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor() {
    this.ingredients.push(new Ingredient('Apples', 5));
    this.ingredients.push(new Ingredient('Carrots', 3));
  }

  ngOnInit(): void {
  }

}
