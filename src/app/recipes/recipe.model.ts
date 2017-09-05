import {ShoppingListItem} from '../shopping-list/shoppingList.model';

export interface IRecipe{
    guid:string;
    id:number;
    name:string;
    description:string;
    imagePath:string;
    ingredients:ShoppingListItem[];
}

export class Recipe implements IRecipe{
    public guid:string;
    public id:number;
    public name:string;
    public description:string;
    public imagePath:string;
    public ingredients:ShoppingListItem[];

    // constructor (guid:string,id:number,name:string,description:string,imagePath:string,ingredients:ShoppingListItem[]){
    //     this.guid=guid;
    //     this.id=id;
    //     this.name=name;
    //     this.description=description;
    //     this.imagePath=imagePath;
    //     this.ingredients=ingredients;
    // }

    constructor(){}
}