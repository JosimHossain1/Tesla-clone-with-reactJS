import React from "react";
import CardHero from "../CarHeroCard/CardHero";

const ModelX = () => {
  return (
    <div>
      <CardHero
        images="https://tesla-cdn.thron.com/delivery/public/image/tesla/8c26f779-11e5-4cfc-bd7c-dcd03b18ff88/bvlatuR/std/4096x2561/Model-X-Main-Hero-Desktop-LHD"
        title="Model X"
        des="Plaid"
        range="333mi"
        rangeDes="Range (EPA est. )"
        mph="2.5s"
        mphDes="0-60 mph*"
        speed="9.9s"
        speedDes="1/4 Miles"
        power="1020hp"
        powerDes="Peak Power"
      />
    </div>
  );
};

export default ModelX;
