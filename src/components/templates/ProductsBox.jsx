import { Link } from "react-router-dom";
import { BsBasket } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

import { useProducts } from "../../context/ProductsContext";
import { productQuantity } from "../../utils/utils";

function ProductsBox({ product }) {
  const [state, dispatch] = useProducts();

  const clickHandler = (type, data) => {
    dispatch({ type, payload: data });
  };

  const quantity = productQuantity(state, product.id);

  return (
    <div className="w-96 border-2 border-zinc-800 p-6 rounded-md">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.images[0]}
          alt={product.title}
          className="rounded-md mb-5"
        />
      </Link>
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
        <div className="flex items-center gap-x-2">
          {quantity === 0 && (
            <button
              onClick={() => clickHandler("ADD_ITEM", product)}
              className="flex items-center justify-center bg-violet-500 w-10 h-10 rounded-md hover:bg-violet-400 transition-colors delay-75"
            >
              <BsBasket className="text-2xl" />
            </button>
          )}
          {quantity >= 1 && (
            <button
              onClick={() => clickHandler("INCREASE", product)}
              className="flex items-center justify-center bg-violet-500 w-10 h-10 rounded-md hover:bg-violet-400 transition-colors delay-75"
            >
              <IoMdAdd className="text-2xl" />
            </button>
          )}
          {quantity !== 0 && <span className="text-xl">{quantity}</span>}
          {quantity === 1 && (
            <button
              onClick={() => clickHandler("REMOVE_ITEM", product)}
              className="flex items-center justify-center bg-violet-500 w-10 h-10 rounded-md hover:bg-violet-400 transition-colors delay-75"
            >
              <MdDelete className="text-2xl" />
            </button>
          )}
          {quantity >= 2 && (
            <button
              onClick={() => clickHandler("DECREASE", product)}
              className="flex items-center justify-center bg-violet-500 w-10 h-10 rounded-md hover:bg-violet-400 transition-colors delay-75"
            >
              <FaMinus className="text-2xl" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsBox;
