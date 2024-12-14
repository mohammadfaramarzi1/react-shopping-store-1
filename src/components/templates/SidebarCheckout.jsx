import { GoListOrdered } from "react-icons/go";
import { SiSharp } from "react-icons/si";
import { LuCircleCheckBig } from "react-icons/lu";

function SidebarCheckout({state, quantity, clickHandler}) {
  return (
    <div className="border-2 border-zinc-800 w-[250px] h-[250px] rounded-md py-7 px-3">
      <div className="flex items-center gap-x-1 child:text-xl mb-3">
        <GoListOrdered className="text-violet-500" />
        <span>Total: ${state.totalPrice}</span>
      </div>
      <div className="flex items-center gap-x-1 child:text-xl mb-3">
        <SiSharp className="text-violet-500" />
        <span>Quantity: {quantity}</span>
      </div>
      <div className="flex items-center gap-x-1 child:text-xl">
        <LuCircleCheckBig className="text-violet-500" />
        <span>
          Status: {state.selectedItems.checkout ? "Compeleted" : "Pending..."}
        </span>
      </div>
      <button
        onClick={() => clickHandler("CHECKOUT", state)}
        className="bg-violet-500 block w-full text-xl mt-8 rounded-sm hover:bg-violet-400 transition-colors delay-75"
      >
        CheckOut
      </button>
    </div>
  );
}

export default SidebarCheckout;
