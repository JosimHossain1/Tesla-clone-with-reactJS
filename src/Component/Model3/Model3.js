import React from "react";
import CardHero from "../CarHeroCard/CardHero";

const Model3 = () => {
  return (
    <div>
      <CardHero
        images="https://tesla-cdn.thron.com/delivery/public/image/tesla/b314365b-e41d-4682-b890-608bdbdfa49e/bvlatuR/std/2560x2204/Model-3-Range-Hero-Desktop-LHD"
        title="Model 3"
        range="358mi"
        rangeDes="Range (EPA est. )"
        mph="3.1s"
        mphDes="0-60 mph*"
        speed="AWD"
        speedDes="Dual Motor"
      />
    </div>
  );
};

export default Model3;
