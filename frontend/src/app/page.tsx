
import RecipeCard from "@/component/recipeCard"
import { recipes } from '@/data/recipes'
import SearchRecipes from "@/component/searchBar"

export default function Home() {
  return (
    <>

      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
          padding: "30px 20px",
        }}
      >


        <div style={{ marginBottom: "28px",marginLeft:"60px" }}>
          <p style={{ color: "grey" }}>
            Home / Recipes
          </p>

          <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
            All Recipes
          </h1>

          <p style={{ color: "grey", lineHeight: 1.6 }}>
            Discover delicious recipes for your everyday cooking.
            Find something wonderful to make today.
          </p>

          <p>{recipes.length} recipes to explore</p>
        </div>


       <SearchRecipes />

      </div>
    </>
  )
}