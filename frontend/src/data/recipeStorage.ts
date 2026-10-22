import { Recipe } from "@/types/recipe";


export function getSavedRecipes(): Recipe[]{ 

if(typeof window == "undefined"){
    return[];
}

const saved = localStorage.getItem("everyDayRecipe");

return saved ? JSON.parse(saved):[];

}


export function saveRecipe(recipe:Recipe){

const recipes = getSavedRecipes();
recipes.push(recipe);

localStorage.setItem("everyDayRecipe",JSON.stringify(recipes));

}