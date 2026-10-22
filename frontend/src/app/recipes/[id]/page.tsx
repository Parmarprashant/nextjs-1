import { recipes } from "@/data/recipes"
import { notFound } from "next/navigation"
import Link from "next/link"

type Props = {
    params: Promise<{ id: string }>
}

export default async function RecipeDetailsPage({ params }: Props) {

    const { id } = await params;

    const data = recipes.find((item) => (item.id === id));

    if (!data) {
        notFound();
    }

    return (
        <>
            <div
                style={{
                    maxWidth: "1000px",
                    margin: "0 auto",
                    padding: "30px 20px",
                }}
            >
                <Link
                    href="/"
                    style={{
                        color: "brown",
                        textDecoration: "none",
                    }}
                >
                    Back to recipes
                </Link>

                <div style={{ marginTop: "24px" }}>
                    <p style={{ color: "brown" }}>
                        {data.cuisine} · {data.category} · {data.difficulty}
                    </p>

                    <h1 style={{ fontSize: "36px", marginBottom: "12px" }}>
                        {data.title}
                    </h1>

                    <p style={{ color: "grey", lineHeight: 1.7 }}>
                        {data.description}
                    </p>

                    <img
                        src={data.image}
                        alt={data.title}
                        style={{
                            width: "100%",
                            height: "400px",
                            objectFit: "cover",
                            borderRadius: "12px",
                            marginTop: "20px",
                        }}
                    />

                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "30px",
                            padding: "20px 0",
                            borderBottom: "1px solid grey",
                        }}
                    >
                        <p>Prep time: {data.prepTime} minutes</p>
                        <p>Servings: {data.servings}</p>
                        <p>Difficulty: {data.difficulty}</p>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "40px",
                            marginTop: "30px",
                        }}
                    >
                        <section style={{ flex: "1 1 250px" }}>
                            <h2>Ingredients</h2>

                            <ul style={{ lineHeight: 2 }}>
                                {data.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                        </section>

                        <section style={{ flex: "2 1 350px" }}>
                            <h2>Instructions</h2>

                            <ol style={{ lineHeight: 2 }}>
                                {data.instructions.map((instruction, index) => (
                                    <li key={index} style={{ marginBottom: "12px" }}>
                                        {instruction}
                                    </li>
                                ))}
                            </ol>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}