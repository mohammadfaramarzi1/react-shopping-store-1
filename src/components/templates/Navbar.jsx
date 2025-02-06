import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBasketShopping } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { MdCancel } from "react-icons/md";

import { useProducts } from "../../context/ProductsContext";
import { sumQuantity } from "../../utils/utils";

function Navbar() {
  const [state] = useProducts();
  const mobileMenuRef = useRef(null);
  const loaction = useLocation();

  const quantity = sumQuantity(state.selectedItems);

  useEffect(() => {
    mobileMenuRef.current.classList.remove("mobile-menu--show");
  }, [loaction.pathname]);

  const openMenuHandler = () => {
    mobileMenuRef.current.classList.add("mobile-menu--show");
  };

  const closeMenuHandler = () => {
    mobileMenuRef.current.classList.remove("mobile-menu--show");
  };

  return (
    <div className="container py-4 ">
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between">
        <Link
          to="/"
          className="font-DosisBold text-2xl lg:text-5xl text-violet-500 hover:text-violet-700 transition-colors delay-75"
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
          {quantity > 0 && (
            <span className="absolute -top-2 -left-2 text-[20px] bg-violet-500 w-5 h-5 rounded-full flex items-center justify-center">
              {quantity}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile */}
      <div className="flex items-center justify-between md:hidden">
        <Link
          to="/"
          className="font-DosisBold text-center text-2xl text-violet-500 hover:text-violet-700 transition-colors delay-75"
        >
          <h2>Shopping Store</h2>
        </Link>
        <button
          className="text-2xl hover:text-violet-700 transition-colors delay-75"
          onClick={openMenuHandler}
        >
          <IoMenu />
        </button>
      </div>
      <div className="mobile-menu" ref={mobileMenuRef}>
        <div className="flex justify-between">
          <button
            className="text-3xl hover:text-violet-400 transition-colors delay-75"
            onClick={closeMenuHandler}
          >
            <MdCancel />
          </button>
          <Link
            to="checkout"
            className="relative flex items-center gap-2 text-2xl hover:text-violet-400 transition-colors delay-75"
          >
            <FaBasketShopping />
            Checkout
            {quantity > 0 && (
              <span className="absolute -top-2 -left-2 text-[20px] bg-violet-500 w-5 h-5 rounded-full flex items-center justify-center">
                {quantity}
              </span>
            )}
          </Link>
        </div>
        <ul className="flex flex-col items-center justify-center mt-[80px] py-2 gap-y-8 text-4xl child-hover:text-violet-400 child:transition-colors child:delay-75">
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
      </div>
    </div>
  );
}

export default Navbar;
