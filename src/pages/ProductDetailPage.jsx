import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import { getAllProducts } from "../services/products";

function ProductDetailPage( ) {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery({
    queryKey: ["all-products"],
    queryFn: () => getAllProducts,
  });
  const mainProduct = data.data.find((product) => product.id === +id);
  console.log(mainProduct);

  return (
    <div className="p-12 bg-zinc-800 mt-10">
      <Link
        to="/products"
        className="inline-flex items-center justify-center gap-x-2 bg-zinc-900 w-20 h-10 rounded-full"
      >
        <IoIosArrowBack />
        Back
      </Link>
      <div className="mt-10 flex justify-between">
        <div className="flex gap-x-5">
          <div>
            <img
              src={mainProduct.images[0]}
              alt={mainProduct.title}
              className="w-32 rounded-md mb-2"
            />
            <img
              src={mainProduct.images[1]}
              alt={mainProduct.title}
              className="w-32 rounded-md mb-2"
            />
            <img
              src={mainProduct.images[2]}
              alt={mainProduct.title}
              className="w-32 rounded-md mb-2"
            />
          </div>
          <div>
            <img
              src={mainProduct.images[0]}
              alt={mainProduct.title}
              className="w-80 h-[400px] rounded-md"
            />
          </div>
        </div>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold">{mainProduct.title}</h2>
          <span className="inline-block bg-zinc-900 p-2 rounded-full my-4">
            {mainProduct.category.name}
          </span>
          <p className="opacity-70 mb-5">{mainProduct.description}</p>
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-2xl opacity-70 font-medium">Price</span>
              <span className="font-bold text-2xl">${mainProduct.price}</span>
            </div>
            <button
              onClick={clickHandler}
              className="bg-violet-500 w-32 h-10 rounded-md hover:bg-violet-400 transition-colors delay-75"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
