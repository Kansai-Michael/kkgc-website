import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kansai Karate Gold Coast | Kids, Teens & Adult Karate in Upper Coomera",
  description: "Traditional Japanese karate for all ages in Upper Coomera, QLD. Cubs (3-4), Little Lions (5-7), Juniors (8-12), Teens & Adults. Book your free trial class today.",
  keywords: "karate upper coomera, kids karate gold coast, martial arts upper coomera, karate classes gold coast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
