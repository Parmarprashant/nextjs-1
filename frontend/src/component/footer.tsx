
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "grey",
        color: "white",
        padding: "35px 20px",
        marginTop: "50px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "25px",
        }}
      >
       
        <div style={{ flex: "1 1 250px" }}>
          <h2 style={{ marginTop: 0 }}>Everyday Recipes</h2>

          <p style={{ color: "lightgray", lineHeight: 1.7 }}>
            Discover delicious recipes and make every meal special.
          </p>
        </div>

        
        <div style={{ flex: "1 1 200px" }}>
          <h3 style={{ marginTop: 0 }}>Quick Links</h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <Link href="/" style={{ color: "lightgray", textDecoration: "none" }}>
              Home
            </Link>

            <Link
              href="/cuisines"
              style={{ color: "lightgray", textDecoration: "none" }}
            >
              Cuisines
            </Link>

            <Link
              href="/about"
              style={{ color: "lightgray", textDecoration: "none" }}
            >
              About
            </Link>

            <Link
              href="/recipes/new"
              style={{ color: "lightgray", textDecoration: "none" }}
            >
              Add a Recipe
            </Link>
          </div>
        </div>
      </div>

      
      <div
        style={{
          maxWidth: "1200px",
          margin: "30px auto 0",
          paddingTop: "20px",
          borderTop: "1px solid gray",
          textAlign: "center",
          color: "lightgray",
          fontSize: "14px",
        }}
      >
        © 2026 Everyday Recipes. All rights reserved.
      </div>
    </footer>
  );
}