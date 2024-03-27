import ProductCardComponent from "@/components/Cards/ProductCardComponent";
import { ProductType } from "@/types/product";

async function fetchProducts(){
  const data = await fetch('https://dummyjson.com/products?limit=8',
  {
    cache: "no-store"
  });
  const res = await data.json();
  return res.products;
}
export default async function Home() {
  const prod = await fetchProducts();
  return (
    <>
      <div className="container mx-auto my-10">
        <h1 className="text-center text-blue-700 text-2xl mb-10 font-extrabold">Best Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-3">
          {prod.map((pro: ProductType)=>(
            <ProductCardComponent 
            key={pro.id} 
            title={pro.title} 
            thumbnail={pro.thumbnail}
            description={pro.description}/>
          ))}
        </div>
      </div>
    </>
  );
}
