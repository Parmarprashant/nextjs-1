"use client";


import { useState,useEffect } from "react";
import { recipes } from "../data/recipes";
import RecipeCard from "./recipeCard";
import { getSavedRecipes } from "@/data/recipeStorage";
import type { Recipe } from "@/types/recipe";

export default function SearchRecipes() {
  const [search, setSearch] = useState("");
  const [allRecipes, setAllRecipes] = useState<Recipe[]>(recipes);

  useEffect(() => {
    const savedRecipes = getSavedRecipes();
    setAllRecipes([...recipes, ...savedRecipes]);
  }, []);

  const filteredRecipes = allRecipes.filter((recipe) => {
    return (
      recipe.title.toLowerCase().includes(search.toLowerCase()) ||
      recipe.cuisine.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div>
      <div style={{ marginBottom: "30px", marginLeft:"60px" }}>
        <label
          style={{
            display: "block",
            marginBottom: "10px",
            fontWeight: "bold",
          }}
        >
          Search Recipes
        </label>

        <input
          id="recipe-search"
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by recipe name, cuisine, or description..."
          style={{
            width: "100%",
            maxWidth: "600px",
            padding: "14px",
            border: "1px solid lightgray",
            borderRadius: "8px",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />
      </div>

      <p style={{ color: "gray", marginBottom: "20px",marginLeft:"60px" }}>
        {filteredRecipes.length}{" "}
         found
      </p>

      {filteredRecipes.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "22px",
            justifyContent: "center",
          }}
        >
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p style={{ padding: "20px 0", color: "gray" }}>
          No recipes found. Try another search.
        </p>
      )}
    </div>
  );
}
