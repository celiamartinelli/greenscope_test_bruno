import { Inter, Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "700"], // Utilisez les poids nécessaires
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "900"],
});

const neueMontreal = localFont({
  src: [
    {
      path: "fonts/NeueMontreal/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/NeueMontreal/NeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue-montreal",
});

export const metadata = {
  title: "Greenscope",
  description: "Greenscope web app pixel perfect",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable}${neueMontreal.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
