import { Link } from "react-router-dom";

function ProductsBox({ products }) {
  const mainProducts = products.data.filter(
    (product) => !product.title.toLowerCase().includes("new" || "test")
  );

  return (
    <>
      {mainProducts.slice(0, 41).map((product) => (
        <Link
          to={`/products/${product.id}`}
          key={product.id}
          className="w-96 border-2 border-zinc-800 p-6 rounded-md"
        >
          <img
            src={product.images[0]}
            alt={product.title}
            className="rounded-md mb-5"
          />
          <h2 className="text-xl font-bold line-clamp-1">{product.title}</h2>
          <p className="opacity-70 line-clamp-2 my-2 text-lg">
            {product.description}
          </p>
          <span className="inline-block bg-zinc-800 p-2 rounded-full my-2">
            {product.category.name === "Change title"
              ? "Decoration"
              : product.category.name}
          </span>
          <div className="flex justify-between items-center mt-2">
            <div className="flex flex-col">
              <span className="opacity-70">Price</span>
              <span className="font-bold text-lg">${product.price}</span>
            </div>
            <button className="bg-violet-500 w-32 h-10 rounded-md hover:bg-violet-400 transition-colors delay-75">
              Add To Cart
            </button>
          </div>
        </Link>
      ))}
    </>
  );
}

export default ProductsBox;
