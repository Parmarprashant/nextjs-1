
import Link from "next/link";
import { recipes } from "../../data/recipes";

export default function CuisinesPage() {
  const cuisines = [...new Set(recipes.map((recipe) => recipe.cuisine))];

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      <p style={{ color: "gray" }}>Home / Cuisines</p>

      <h1 style={{ fontSize: "32px", marginBottom: "12px" }}>
        Explore Cuisines
      </h1>

      <p style={{ color: "gray", lineHeight: 1.6 }}>
        Discover recipes from different cuisines around the world.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {cuisines.map((cuisine) => {
          const count = recipes.filter(
            (recipe) => recipe.cuisine === cuisine
          ).length;

          return (
            <Link
              key={cuisine}
             href={`/cuisines/${cuisine.toLowerCase()}`}
              style={{
                flex: "1 1 220px",
                maxWidth: "280px",
                padding: "28px 20px",
                backgroundColor: "white",
                border: "1px solid lightgray",
                borderRadius: "10px",
                textDecoration: "none",
                color: "black",
              }}
            >
              <h2 style={{ marginTop: 0 }}>{cuisine}</h2>

              <p style={{ color: "gray" }}>
                {count} {count === 1 ? "recipe" : "recipes"}
              </p>

              <span style={{ color: "firebrick", fontWeight: "bold" }}>
                Explore recipes
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
