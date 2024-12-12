import { SlEnergy } from "react-icons/sl";
import { BsFillSendFill } from "react-icons/bs";
import { AiFillMoon } from "react-icons/ai";

function ToolsBoxSection({ title, desc, icon, id }) {
  const iconName = icon;
  return (
    <div className={id === 2 ? "bg-zinc-900 mb-4 rounded-md p-2 border-4 border-violet-500" : "bg-zinc-800 mb-4 rounded-md p-2 border-4 border-zinc-600"}>
      <h2 className="text-2xl font-medium mb-2">{title}</h2>
      <div className="flex items-center justify-between">
        <p className="text-lg opacity-70 max-w-80">{desc}</p>
        {iconName === "SlEnergy" && <SlEnergy />}
        {iconName === "BsFillSendFill" && <BsFillSendFill />}
        {iconName === "AiFillMoon" && <AiFillMoon />}
      </div>
    </div>
  );
}

export default ToolsBoxSection;
