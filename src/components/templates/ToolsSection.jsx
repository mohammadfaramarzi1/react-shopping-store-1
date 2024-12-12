import { toolsItems } from "../../constants/data";
import ToolsBoxSection from "./ToolsBoxSection";

function ToolsSection() {
  const toolsItemsArray = toolsItems;
  console.log(toolsItemsArray);
  return (
    <div>
      <div>
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
    </div>
  );
}

export default ToolsSection;
