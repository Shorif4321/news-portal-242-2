import Navbar from "@/components/shared/Navbar/Navbar";
import "./globals.css";
import Footer from "@/components/shared/Footer/Footer";

export const metadata = {
  title: "News Portal | Home ",
  description: "The news portal is an authentic and the best news portal in the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=""
      >
        <Navbar></Navbar>
        <div className="min-h-screen">
          {children}
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}
