import React from "react";
import SharedTopSection from "../shared/SharedTopSection";
import ToolsSection from "./ToolsSection";

function SolutionSection() {
  return (
    <div className="bg-zinc-800">
      <SharedTopSection
        title="Explore the solutions"
        desc=" Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
      />
      <ToolsSection />
    </div>
  );
}

export default SolutionSection;
