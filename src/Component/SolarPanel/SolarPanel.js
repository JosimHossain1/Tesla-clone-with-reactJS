import React from "react";
import CardHero from "../CarHeroCard/CardHero";
import solarpanel from "../../Assets/images/solar-panel.jpg";

const SolarPanel = () => {
  return (
    <div>
      <CardHero
        images={solarpanel}
        title="Solar Roof"
        des="Transform your roof and produce clean energy"
        range="Solar"
        rangeDes="Beautiful Solar
        Without Compromise"
        mph="$"
        mphDes="Guaranteed Lowest
        Price for Solar"
        speed="24/7"
        speedDes="Energy
        Monitoring"
      />
    </div>
  );
};

export default SolarPanel;
