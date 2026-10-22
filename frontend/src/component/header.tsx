import Link from "next/link"

const Header = () => {
    return (
        <>

            <header style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "200px",
                flexWrap: "wrap",
                padding: "20px",
                backgroundColor: "white",
                border: "1px solid grey",
                borderRadius:"10px",
                margin: "5px"

            }} >

                <Link href="/"

                    style={{
                        fontSize: "22px",
                        fontWeight: "bold",
                        color: "black",
                    }}

                >
                    EVERYDAY-RECIPES
                </Link>

                <nav

                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "24px"
                    }}

                >
                    <Link href="/">Recipe</Link>
                    <Link href="/cuisines">Cuisines</Link>
                    <Link href="/about">About</Link>
                </nav>

                <Link
                    href="/recipes/new"

                    style={{
                        backgroundColor: "brown",
                        color: "#ffffff",
                        padding: "12px 16px",
                        borderRadius: "5px",
                    }}

                >
                    Add-Recipe +
                </Link>

            </header>

        </>
    )
}

export default Header