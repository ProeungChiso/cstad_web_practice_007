import { Metadata } from "next";
import React from "react";
import { koulen } from "../font";
import { oswald } from "../font";
export const metadata: Metadata = {
  title: "Categories",
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
export default function categories() {
  return (
    <>
      <div className={koulen.className}>
        <div className="container mx-auto my-10">
          <h1 className="text-center text-blue-700 text-2xl mb-10 font-extrabold">
            <span className={oswald.className}>Categories</span>
          </h1>
          <p className="text-center">មិនមានមាតិកា</p>
        </div>
      </div>
    </>
  );
}
