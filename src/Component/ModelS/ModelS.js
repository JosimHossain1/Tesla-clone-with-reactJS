import React from "react";
import CardHero from "../CarHeroCard/CardHero";

const ModelS = () => {
  return (
    <div>
      <CardHero
        images="https://tesla-cdn.thron.com/delivery/public/image/tesla/8a74d206-66dc-4386-8c7a-88ff32174e7d/bvlatuR/std/4096x2560/Model-S-Main-Hero-Desktop-LHD"
        title="Model S"
        des="Plaid"
        range="396mi"
        rangeDes="Range (EPA est. )"
        mph="1.99s"
        mphDes="0-60 mph*"
        speed="200mph"
        speedDes="Top Speed*"
        power="1,020hp"
        powerDes="Peak Power"
      />
    </div>
  );
};

export default ModelS;
