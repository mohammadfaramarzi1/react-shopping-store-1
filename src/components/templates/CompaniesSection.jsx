import { useEffect } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { SiTinder } from "react-icons/si";
import { SiAirbnb } from "react-icons/si";
import { SiHubspot } from "react-icons/si";
import { GrAmazon } from "react-icons/gr";
import AOS from "aos";

import SharedTopSection from "../shared/SharedTopSection";
import { Link } from "react-router-dom";

import "aos/dist/aos.css";

function CompaniesSection() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="px-12">
      <div
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
      >
        <SharedTopSection
          title="Trusted by over 20,000 companies all over the world"
          desc="Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis blandit libero cursus mattis."
        />
      </div>
      <div className="flex justify-between child:flex child:flex-col child:items-center child:gap-y-1.5 child:text-3xl">
        <Link to="https://www.facebook.com/">
          <FaFacebookF />
          <h4>Facebook</h4>
        </Link>
        <Link to="https://tinder.com/">
          <SiTinder />
          <h4>Tinder</h4>
        </Link>
        <Link to="https://www.airbnb.com/">
          <SiAirbnb />
          <h4>Airbnb</h4>
        </Link>
        <Link to="https://www.hubspot.com/">
          <SiHubspot />
          <h4>Hubspot</h4>
        </Link>
        <Link to="https://www.amazon.com/">
          <GrAmazon />
          <h4>Amazon</h4>
        </Link>
      </div>
    </div>
  );
}

export default CompaniesSection;
