import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
