
import Link from "next/link";
import { notFound } from "next/navigation";
import { recipes } from "../../../data/recipes";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CuisinePage({ params }: Props) {
  const { slug } = await params;

  const cuisine = slug.charAt(0).toUpperCase() + slug.slice(1);

  const cuisineRecipes = recipes.filter(
    (recipe) => recipe.cuisine === cuisine
  );

  if (cuisineRecipes.length === 0) {
    notFound();
  }

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      <p style={{ color: "gray" }}>
        <Link href="/" style={{ color: "gray" }}>
          Home
        </Link>{" "}
        /{" "}
        <Link href="/cuisines" style={{ color: "gray" }}>
          Cuisines
        </Link>{" "}
        / {cuisine}
      </p>

      <h1 style={{ fontSize: "32px" }}>{cuisine} Recipes</h1>

      <p style={{ color: "gray", lineHeight: 1.6 }}>
        Explore our delicious {cuisine} recipes.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "22px",
          marginTop: "30px",
        }}
      >
        {cuisineRecipes.map((recipe) => (
          <article
            key={recipe.id}
            style={{
              width: "100%",
              maxWidth: "350px",
              border: "1px solid lightgray",
              borderRadius: "10px",
              overflow: "hidden",
              backgroundColor: "white",
            }}
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "16px" }}>
              <h2>{recipe.title}</h2>

              <p style={{ color: "gray", lineHeight: 1.6 }}>
                {recipe.description}
              </p>

              <Link
                href={`/recipes/${recipe.id}`}
                style={{ color: "firebrick", fontWeight: "bold" }}
              >
                View recipe
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
