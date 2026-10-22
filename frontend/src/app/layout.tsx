
import Header from "../component/header";
import Footer from "@/component/footer";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, backgroundColor: "#faf9f6" }}>
        <Header />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
