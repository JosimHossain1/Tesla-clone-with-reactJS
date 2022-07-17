import React from "react";
import CardHero from "../CarHeroCard/CardHero";
import modelY from "../../Assets/images/model-y.jpg";
const ModelY = () => {
  return (
    <div>
      <CardHero
        images={modelY}
        title="Model Y"
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

export default ModelY;
