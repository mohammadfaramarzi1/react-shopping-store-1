import { BiTransferAlt } from "react-icons/bi";
import { TbBrandFlightradar24 } from "react-icons/tb";
import { IoContractSharp } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import { TfiLayers } from "react-icons/tfi";
import { TbStarsFilled } from "react-icons/tb";

import { simpleWorksBoxesInfos } from "../../constants/data";

function SimpleWorksBoxSection() {
  const simpleWorksBoxsInfosArray = simpleWorksBoxesInfos;

  return (
    <div className="p-12 bg-zinc-800">
      <div className="-mt-24 grid grid-cols-3 gap-10">
        {simpleWorksBoxsInfosArray.map((simpleWorksBoxesInfo) => (
          <div
            key={simpleWorksBoxesInfo.id}
            className="flex flex-col items-center justify-center gap-y-2 bg-zinc-700 rounded-md h-[150px]"
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
            <h2 className="text-2xl font-medium ">
              {simpleWorksBoxesInfo.title}
            </h2>
            <p className="opacity-70">{simpleWorksBoxesInfo.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimpleWorksBoxSection;
