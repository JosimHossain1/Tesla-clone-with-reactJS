import React from "react";
import CardHero from "../CarHeroCard/CardHero";
import solarroof from "../../Assets/images/solar-roof.jpg";

const SolarRoof = () => {
  return (
    <div>
      <CardHero
        images={solarroof}
        title="Solar Roof"
        des="Transform your roof and produce clean energy"
        range="Solar"
        rangeDes="Beautiful Solar
        Without Compromise"
        mph="25-Years"
        mphDes="Tile
        Warranty"
        speed="24/7"
        speedDes="Outage
        Protection"
      />
    </div>
  );
};

export default SolarRoof;
