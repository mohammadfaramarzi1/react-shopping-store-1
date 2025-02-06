import { useEffect } from "react";
import { BiTransferAlt } from "react-icons/bi";
import { TbBrandFlightradar24 } from "react-icons/tb";
import { IoContractSharp } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import { TfiLayers } from "react-icons/tfi";
import { TbStarsFilled } from "react-icons/tb";
import AOS from "aos";

import { simpleWorksBoxesInfos } from "../../constants/data";

import "aos/dist/aos.css";

function SimpleWorksBoxSection() {
  const simpleWorksBoxsInfosArray = simpleWorksBoxesInfos;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="p-12 bg-zinc-800">
      <div className="-mt-24 flex justify-center gap-10 flex-wrap">
        {simpleWorksBoxsInfosArray.map((simpleWorksBoxesInfo) => (
          <div
            key={simpleWorksBoxesInfo.id}
            data-aos="flip-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            className="flex flex-col items-center justify-center gap-y-2 bg-zinc-700 rounded-md h-[150px] p-3"
          >
            <div className="bg-violet-500 w-12 h-12 rounded-full flex items-center justify-center text-3xl">
              {simpleWorksBoxesInfo.icon === "BiTransferAlt" && (
                <BiTransferAlt />
              )}
              {simpleWorksBoxesInfo.icon === "TbBrandFlightradar24" && (
                <TbBrandFlightradar24 />
              )}
              {simpleWorksBoxesInfo.icon === "IoContractSharp" && (
                <IoContractSharp />
              )}
              {simpleWorksBoxesInfo.icon === "ImExit" && <ImExit />}
              {simpleWorksBoxesInfo.icon === "TfiLayers" && <TfiLayers />}
              {simpleWorksBoxesInfo.icon === "TbStarsFilled" && (
                <TbStarsFilled />
              )}
            </div>
            <h2 className="text-md lg:text-2xl font-medium ">
              {simpleWorksBoxesInfo.title}
            </h2>
            <p className="opacity-70 text-xs md:text-sm text-center">{simpleWorksBoxesInfo.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimpleWorksBoxSection;
