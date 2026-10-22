import type { Recipe } from "@/types/recipe";
import Link from "next/link";

type Props = {
    recipe: Recipe
}

export default function RecipeCard({ recipe }: Props) {
    return (
        <>
            <div style={{
                backgroundColor: "white",
                border: "grey",
                borderRadius: "10px",
                overflow: "hidden",
                maxWidth: "350px"
            }}>
                <img src={recipe.image} alt={recipe.title} style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    display: "block",
                }} />

                <div style={{ padding: "16px" }} >

                    <p style={{ color: "brown", fontSize: "12px" }} >{recipe.cuisine} - {recipe.difficulty} </p>

                    <h2 style={{ fontSize: "20px", margin: "10px 0" }} >
                        {recipe.title}
                    </h2>

                    <p
                        style={{ color: "grey", lineHeight: 1.6 }}
                    >{recipe.description}</p>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            borderTop: "1px solid white",
                            paddingTop: "12px",
                        }}
                    >
                        <span>{recipe.prepTime} mins</span>

                        <Link
                            href={`/recipes/${recipe.id}`}
                            style={{
                                color: "brown",
                                fontWeight: "bold",
                                textDecoration: "none",
                            }}
                        >
                            View recipe
                        </Link>

                    </div>

                </div>

            </div>
        </>
    )
}