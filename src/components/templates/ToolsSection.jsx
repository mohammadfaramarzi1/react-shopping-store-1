import { useEffect } from "react";
import { toolsItems } from "../../constants/data";
import ToolsBoxSection from "./ToolsBoxSection";
import AOS from "aos";

import "aos/dist/aos.css";

function ToolsSection() {
  const toolsItemsArray = toolsItems;

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex gap-10">
      <div
        className="-mb-10 min-w-[600px]"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
      >
        <div className="pb-4">
          <h3 className="text-xl mb-3">Powerful suite of tools</h3>
          <p className="opacity-70 max-w-md text-lg">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa.
          </p>
        </div>
        <div>
          {toolsItemsArray.map((toolsItem) => (
            <ToolsBoxSection key={toolsItem.id} {...toolsItem} />
          ))}
        </div>
      </div>
      <div className="w-[600px] flex items-center justify-center">
        <img
          src="/illustration1-mvQYH-I0.svg"
          alt="cover"
          className="block"
        />
      </div>
    </div>
  );
}

export default ToolsSection;
