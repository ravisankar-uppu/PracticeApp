import {ShoppingListItem} from '../shopping-list/shoppingList.model';

export class Recipe{
    public name:string;
    public description:string;
    public imagePath:string;
    public ingredients:ShoppingListItem[];

    constructor (name:string,description:string,imagePath:string,ingredients:ShoppingListItem[]){
        this.name=name;
        this.description=description;
        this.imagePath=imagePath;
        this.ingredients=ingredients;
    }
}