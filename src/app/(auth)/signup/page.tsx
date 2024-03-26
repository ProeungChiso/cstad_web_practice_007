import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
    title: "Signup",
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
export default function signUp(){
    return(
        <h1>Sign up</h1>
    )
}