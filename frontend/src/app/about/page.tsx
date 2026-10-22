
import Link from "next/link";

export default function AboutPage() {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      <p style={{ color: "gray" }}>Home / About</p>

      <section
        style={{
          textAlign: "center",
          padding: "50px 20px",
          backgroundColor: "cornsilk",
          borderRadius: "12px",
          marginTop: "25px",
        }}
      >
        <h1 style={{ fontSize: "36px", marginBottom: "16px" }}>
          About Everyday Recipes
        </h1>

        <p
          style={{
            maxWidth: "650px",
            margin: "0 auto",
            color: "dimgray",
            lineHeight: 1.8,
            fontSize: "18px",
          }}
        >
          Everyday Recipes helps you discover delicious meals that are simple
          to prepare. Whether you are a beginner or an experienced cook,
          there is always something new to try.
        </p>

        <Link
          href="/"
          style={{
            display: "inline-block",
            marginTop: "25px",
            padding: "12px 24px",
            backgroundColor: "firebrick",
            color: "white",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Explore Recipes
        </Link>
      </section>

      <section style={{ marginTop: "45px" }}>
        <h2 style={{ fontSize: "26px", marginBottom: "20px" }}>
          What We Believe
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div
            style={{
              flex: "1 1 220px",
              padding: "24px",
              border: "1px solid lightgray",
              borderRadius: "10px",
            }}
          >
            <h3>Simple Cooking</h3>
            <p style={{ color: "dimgray", lineHeight: 1.7 }}>
              Easy-to-follow recipes that make cooking less stressful.
            </p>
          </div>

          <div
            style={{
              flex: "1 1 220px",
              padding: "24px",
              border: "1px solid lightgray",
              borderRadius: "10px",
            }}
          >
            <h3>Everyday Ingredients</h3>
            <p style={{ color: "dimgray", lineHeight: 1.7 }}>
              Delicious ideas using ingredients you can find easily.
            </p>
          </div>

          <div
            style={{
              flex: "1 1 220px",
              padding: "24px",
              border: "1px solid lightgray",
              borderRadius: "10px",
            }}
          >
            <h3>Discover New Flavors</h3>
            <p style={{ color: "dimgray", lineHeight: 1.7 }}>
              Explore recipes and cuisines from around the world.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
