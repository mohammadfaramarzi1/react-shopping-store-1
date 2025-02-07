import { FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { BsBasket } from "react-icons/bs";
import { Link } from "react-router-dom";

function ProductCheckout({ item, clickHandler }) {
  return (
    <div className="flex flex-col md:flex-row justify-between border-2 border-zinc-800 rounded-md p-4 mb-5">
      <Link to={`/products/${item.id}`} className="flex items-center w-full md:w-[600px] h-[200px]">
        <img src={item.images[0]} alt={item.title} className="rounded-md w-[220px]" />
        <h3 className="ml-5 md:ml-2 md:mt-auto md:mb-auto font-bold text-sm md:text-2xl text-center md:line-clamp-1">
          {item.title}
        </h3>
      </Link>
      <div className="flex gap-x-2 items-center justify-center my-5 md:my-0">
        <span className="opacity-70 text-xl">Price:</span>
        <span className="font-bold text-2xl">${item.price}</span>
      </div>
      <div className="flex items-center justify-center gap-x-2">
        {item.quantity === 0 && (
          <button
            onClick={() => clickHandler("ADD_ITEM", item)}
            className="flex items-center justify-center bg-violet-500 w-10 h-10 rounded-md hover:bg-violet-400 transition-colors delay-75"
          >
            <BsBasket className="text-2xl" />
          </button>
        )}
        {item.quantity >= 1 && (
          <button
            onClick={() => clickHandler("INCREASE", item)}
            className="flex items-center justify-center bg-violet-500 w-10 h-10 rounded-md hover:bg-violet-400 transition-colors delay-75"
          >
            <IoMdAdd className="text-2xl" />
          </button>
        )}
        {item.quantity !== 0 && (
          <span className="text-xl">{item.quantity}</span>
        )}
        {item.quantity === 1 && (
          <button
            onClick={() => clickHandler("REMOVE_ITEM", item)}
            className="flex items-center justify-center bg-violet-500 w-10 h-10 rounded-md hover:bg-violet-400 transition-colors delay-75"
          >
            <MdDelete className="text-2xl" />
          </button>
        )}
        {item.quantity >= 2 && (
          <button
            onClick={() => clickHandler("DECREASE", item)}
            className="flex items-center justify-center bg-violet-500 w-10 h-10 rounded-md hover:bg-violet-400 transition-colors delay-75"
          >
            <FaMinus className="text-2xl" />
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCheckout;
