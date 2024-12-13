import React from "react";

function ProductsBox({ products }) {
  const mainProducts = products.data.filter(
    (product) => product.title !== "New Product"
  );

  return (
    <>
      {mainProducts.map((product) => (
        <div key={product.id} className="w-80 border-2 border-zinc-800 p-6 rounded-md">
          <img src={product.images[0]} alt={product.title} className="rounded-md mb-5" />
          <h2 className="text-xl font-bold">{product.title}</h2>
          <p className="opacity-70 line-clamp-2 my-2 text-lg">{product.description}</p>
          <span className="inline-block bg-zinc-800 p-2 rounded-full my-2">{product.category.name}</span>
          <div className="flex justify-between mt-2">
            <div className="flex flex-col">
              <span className="opacity-70">Price</span>
              <span className="font-bold text-lg">${product.price}</span>
            </div>
            <button className="bg-violet-500 w-32 h-10 rounded-md hover:bg-violet-400 transition-colors delay-75">Add To Cart</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductsBox;
