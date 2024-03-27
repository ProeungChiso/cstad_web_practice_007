import ProductCardComponent from '@/components/Cards/ProductCardComponent';
import { ProductType } from '@/types/product';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react'

export const metadata: Metadata = {
    title: "All Products",
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
  async function fetchProducts(){
    const data = await fetch('https://dummyjson.com/products?limit=20',
    {
      cache: "no-store"
    });
    const res = await data.json();
    return res.products;
  }
  export default async function AllProducts() {
    const prod = await fetchProducts();
    return (
      <>
        <div className="container mx-auto my-10">
          <h1 className="text-center text-blue-700 text-2xl mb-10 font-extrabold">All Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-3">
            {prod.map((pro: ProductType)=>(
              <Link key={pro.id} href={`/all-products/${pro.id}`}>
              <ProductCardComponent 
              title={pro.title} 
              thumbnail={pro.thumbnail}
              description={pro.description}/>
              </Link>
            ))}
          </div>
        </div>
      </>
    );
  }
