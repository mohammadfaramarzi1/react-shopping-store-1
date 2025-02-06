import { GoListOrdered } from "react-icons/go";
import { SiSharp } from "react-icons/si";
import { LuCircleCheckBig } from "react-icons/lu";

function SidebarCheckout({ state, quantity, clickHandler }) {
  return (
    <div className="border-2 border-zinc-800 max-w-[700px] xl:w-[250px] h-[150px] xl:h-[250px] rounded-md py-7 px-3 my-5 xl:my-0 flex justify-center flex-wrap items-center mx-auto xl:block">
      <div>
        <div className="flex items-center gap-1 child:text-xl mb-3">
          <GoListOrdered className="text-violet-500" />
          <span className="w-[130px]">Total: ${state.totalPrice}</span>
        </div>
        <div className="flex items-center gap-1 child:text-xl mb-3">
          <SiSharp className="text-violet-500" />
          <span className="w-[130px]">Quantity: {quantity}</span>
        </div>
        <div className="flex items-center gap-1 child:text-xl">
          <LuCircleCheckBig className="text-violet-500" />
          <span className="w-[130px]">
            Status: {state.selectedItems.checkout ? "Compeleted" : "Pending..."}
          </span>
        </div>
      </div>
      <button
        onClick={() => clickHandler("CHECKOUT", state)}
        className="bg-violet-500 block w-[100px] xl:w-full text-xl mt-0 xl:mt-8 ml-3 xl:ml-0  rounded-sm hover:bg-violet-400 transition-colors delay-75"
      >
        CheckOut
      </button>
    </div>
  );
}

export default SidebarCheckout;
