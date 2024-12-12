import React from "react";
import { Link } from "react-router-dom";

function HomeSection() {
  return (
    <div className="text-center py-24 flex flex-col gap-5">
      <h1 className="text-6xl font-medium">
        Make your Outfit <span className="text-violet-500">wonderful</span>
      </h1>
      <p className="max-w-lg mx-auto text-2xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere soluta
        iusto expedita veniam asperiores, cumque id, tempora numquam
        voluptatibus.
      </p>
      <div className="flex gap-3 justify-center child:inline-block child:w-36 child:px-4 child:py-2 child:rounded-sm">
        <Link to="/products" className=" bg-violet-500  hover:bg-violet-400">
          Start Shopping
        </Link>
        <Link to="/about" className="bg-zinc-800 hover:bg-zinc-700">
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default HomeSection;
