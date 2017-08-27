import {ShoppingListItem} from '../shopping-list/shoppingList.model';

export interface IRecipe{
    id:number;
    name:string;
    description:string;
    imagePath:string;
    ingredients:ShoppingListItem[];
}

export class Recipe implements IRecipe{
    public id:number;
    public name:string;
    public description:string;
    public imagePath:string;
    public ingredients:ShoppingListItem[];

    constructor (id:number,name:string,description:string,imagePath:string,ingredients:ShoppingListItem[]){
        this.id=id;
        this.name=name;
        this.description=description;
        this.imagePath=imagePath;
        this.ingredients=ingredients;
    }
}