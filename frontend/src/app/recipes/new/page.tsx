"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveRecipe } from "../../../data/recipeStorage";
import type { Recipe } from "../../../types/recipe";

export default function NewRecipePage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [servings, setServings] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  function handleSubmit() {
    const recipe: Recipe = {
      id: Date.now().toString(),
      title,
      cuisine,
      category,
      difficulty,
      prepTime: Number(prepTime),
      servings: Number(servings),
      image,
      description,
      ingredients: ingredients.split("\n").filter((item) => item.trim()),
      instructions: instructions.split("\n").filter((item) => item.trim()),
    };

    saveRecipe(recipe);
    alert("Recipe saved successfully!");
    router.push("/");
  }

  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "30px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "firebrick", marginBottom: "10px" }}>
        Add a New Recipe
      </h1>

      <p style={{ color: "#666", marginBottom: "25px" }}>
        Share your favorite recipe!
      </p>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
        style={{
          padding: "25px",
          border: "1px solid #eee",
          borderRadius: "10px",
         
        }}
      >
        <label>Recipe Title</label>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Enter recipe title"
          required
          style={{
            display: "block",
            width: "100%",
            padding: "12px",
            margin: "8px 0 20px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            boxSizing: "border-box",
          }}
        />

        <label>Cuisine</label>
        <select
          value={cuisine}
          onChange={(event) => setCuisine(event.target.value)}
          required
          style={{
            display: "block",
            width: "100%",
            padding: "12px",
            margin: "8px 0 20px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            boxSizing: "border-box",
          }}
        >
          <option value="">Select cuisine</option>
          <option value="Asian">Asian</option>
          <option value="Italian">Italian</option>
          <option value="Indian">Indian</option>
          <option value="Mexican">Mexican</option>
          <option value="American">American</option>
        </select>

        <label>Category</label>
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          required
          style={{
            display: "block",
            width: "100%",
            padding: "12px",
            margin: "8px 0 20px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            boxSizing: "border-box",
          }}
        >
          <option value="">Select category</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Dessert">Dessert</option>
          <option value="Snack">Snack</option>
        </select>

        <label>Difficulty</label>
        <select
          value={difficulty}
          onChange={(event) => setDifficulty(event.target.value)}
          required
          style={{
            display: "block",
            width: "100%",
            padding: "12px",
            margin: "8px 0 20px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            boxSizing: "border-box",
          }}
        >
          <option value="">Select difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <label>Preparation Time (minutes)</label>
        <input
          type="number"
          min="1"
          value={prepTime}
          onChange={(event) => setPrepTime(event.target.value)}
          placeholder="e.g. 30"
          required
          style={{
            display: "block",
            width: "100%",
            padding: "12px",
            margin: "8px 0 20px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            boxSizing: "border-box",
          }}
        />

        <label>Servings</label>
        <input
          type="number"
          min="1"
          value={servings}
          onChange={(event) => setServings(event.target.value)}
          placeholder="e.g. 4"
          required
          style={{
            display: "block",
            width: "100%",
            padding: "12px",
            margin: "8px 0 20px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            boxSizing: "border-box",
          }}
        />

        <label>Image URL</label>
        <input
          type="url"
          value={image}
          onChange={(event) => setImage(event.target.value)}
          placeholder="https://example.com/recipe.jpg"
          required
          style={{
            display: "block",
            width: "100%",
            padding: "12px",
            margin: "8px 0 20px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            boxSizing: "border-box",
          }}
        />

        <label>Description</label>
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Describe your recipe"
          required
          rows={3}
          style={{
            display: "block",
            width: "100%",
            padding: "12px",
            margin: "8px 0 20px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            boxSizing: "border-box",
          }}
        />

        <label>Ingredients (one per line)</label>
        <textarea
          value={ingredients}
          onChange={(event) => setIngredients(event.target.value)}
          placeholder={"2 tomatoes\n1 onion\n1 teaspoon salt"}
          required
          rows={5}
          style={{
            display: "block",
            width: "100%",
            padding: "12px",
            margin: "8px 0 20px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            boxSizing: "border-box",
          }}
        />

        <label>Instructions (one step per line)</label>
        <textarea
          value={instructions}
          onChange={(event) => setInstructions(event.target.value)}
          placeholder={"Chop the vegetables\nHeat the pan\nCook and serve"}
          required
          rows={5}
          style={{
            display: "block",
            width: "100%",
            padding: "12px",
            margin: "8px 0 20px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            boxSizing: "border-box",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "14px",
            backgroundColor: "firebrick",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Save Recipe
        </button>
      </form>
    </main>
  );
}