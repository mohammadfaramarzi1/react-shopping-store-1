import { Link } from "react-router-dom";
import { FaBasketShopping } from "react-icons/fa6";
import { useProducts } from "../../context/ProductsContext";
import { sumQuantity } from "../../utils/utils";

function Navbar() {
  const [state] = useProducts();

  const quantity = sumQuantity(state.selectedItems);

  return (
    <div className="container py-4 flex items-center justify-between">
      <Link
        to="/"
        className="font-DosisBold text-5xl text-violet-500 hover:text-violet-700 transition-colors delay-75"
      >
        <h2>Shopping Store</h2>
      </Link>
      <ul className="flex justify-center gap-4 w-80 py-2 px-4 border-2 border-zinc-800 rounded-full text-2xl child-hover:text-violet-400 child:transition-colors child:delay-75">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Link
        to="checkout"
        className="relative flex items-center gap-2 text-2xl hover:text-violet-400 transition-colors delay-75"
      >
        <FaBasketShopping />
        Checkout
        {quantity > 0 && <span className="absolute -top-2 -left-2 text-[20px] bg-violet-500 w-5 h-5 rounded-full flex items-center justify-center">{quantity}</span>}
      </Link>
    </div>
  );
}

export default Navbar;
