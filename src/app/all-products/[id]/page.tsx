import React from 'react';
import ProductCardComponent from '@/components/Cards/ProductCardComponent';

export type ParamProps = {
    params: {
        id: number
    }
}

async function fetchProducts(id: number){
    const data = await fetch(`https://dummyjson.com/products/${id}`,
    {
        method: "GET",
        cache: "no-store"
    });
    return data.json();
}


async function productDetail({params}:ParamProps){
    const id = params.id;
    const product = await fetchProducts(id);
    return(
        <>
            <div className='container mx-auto my-10 p-3'>
                <h1 className="text-center text-blue-700 text-2xl mb-10 font-extrabold">Product Detail</h1>
                <ProductCardComponent 
                title={product.title}
                thumbnail={product.thumbnail}
                description={product.description}
                />
            </div>
        </>
    )
}

export default productDetail