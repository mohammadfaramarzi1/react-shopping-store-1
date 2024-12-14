import { SlBasket } from "react-icons/sl";

import { sumQuantity } from "../utils/utils";


import { useProducts } from "../context/ProductsContext";
import SidebarCheckout from "../components/templates/SidebarCheckout";
import ProductCheckout from "../components/templates/ProductCheckout";

function CheckOutPage() {
  const [state, dispatch] = useProducts();
  const quantity = sumQuantity(state.selectedItems);

  const clickHandler = (type, data) => {
    dispatch({ type, payload: data });
  };

  console.log(state);

  return (
    <div className="px-12">
      {quantity === 0 ? (
        <div className="h-[500px] flex flex-col items-center justify-center">
          <h2 className="font-bold text-3xl">
            There is Nothing at the cart...
          </h2>
          <SlBasket className="text-4xl" />
        </div>
      ) : (
        <div className="flex mt-5 gap-x-8">
          <SidebarCheckout state={state} quantity={quantity} clickHandler={clickHandler} />
          <div className="w-full h-screen">
            {state.selectedItems.map((item) => (
              <ProductCheckout item={item} key={item.id} clickHandler={clickHandler} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckOutPage;
