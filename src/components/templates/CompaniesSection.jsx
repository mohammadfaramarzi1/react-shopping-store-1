import { FaFacebookF } from "react-icons/fa6";
import { SiTinder } from "react-icons/si";
import { SiAirbnb } from "react-icons/si";
import { SiHubspot } from "react-icons/si";
import { GrAmazon } from "react-icons/gr";

import SharedTopSection from "../shared/SharedTopSection";

function CompaniesSection() {
  return (
    <div className="px-12">
      <SharedTopSection
        title="Trusted by over 20,000 companies all over the world"
        desc="Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis blandit libero cursus mattis."
      />
      <div className="flex justify-between child:flex child:flex-col child:items-center child:gap-y-1.5 child:text-3xl">
        <div>
            <FaFacebookF />
            <h4>Facebook</h4>
        </div>
        <div>
            <SiTinder />
            <h4>Tinder</h4>
        </div>
        <div>
            <SiAirbnb />
            <h4>Airbnb</h4>
        </div>
        <div>
            <SiHubspot />
            <h4>Hubspot</h4>
        </div>
        <div>
            <GrAmazon />
            <h4>Amazon</h4>
        </div>
      </div>
    </div>
  );
}

export default CompaniesSection;
