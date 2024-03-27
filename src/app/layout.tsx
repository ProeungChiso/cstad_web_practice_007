import type { Metadata } from "next";
import { Inter, Koulen, Oswald, Roboto } from "next/font/google";
import "./globals.css";
import NextUILayout from "./NextUIProvider";
import NavbarComponent from "@/components/Navbar/NavbarComponent";
import FooterComponent from "@/components/Footer/FooterComponent";

const inter = Inter({ 
  subsets: ["latin"] 
});
const oswald = Oswald({ 
  subsets: ["latin"], 
  weight:"300",
  display:"swap"
});
const koulen = Koulen({
  weight:"400",
  subsets:["khmer"]
})

export const metadata: Metadata = {
  title: {
    template: "%s - ACMEShop",
    default: "ACMEShop",
  },
  description: "Clothes Shop Website.",
  keywords: ["shop", "ecommerce", "sell"],
  openGraph: {
    title: {
      template: "%s - ACMEShop",
      default: "ACMEShop",
    },
    description: "Clothes Shop Website",
    images: [
      "https://img.freepik.com/free-photo/photocomposition-horizontal-shopping-banner-with-online-shop-smartphone_23-2151201769.jpg?t=st=1711445270~exp=1711448870~hmac=a9bdd24fb0e0c9bf61350249a48a4fba5bdac187bf6c2bba8f38a9f481ccf612&w=1480",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <NextUILayout>
          <NavbarComponent/>
          {children}
          <FooterComponent/>
        </NextUILayout>
      </body>
    </html>
  );
}
