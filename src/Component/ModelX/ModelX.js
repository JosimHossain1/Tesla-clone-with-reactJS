import React from "react";
import CardHero from "../CarHeroCard/CardHero";
import modelX from "../../Assets/images/model-x.jpg";

const ModelX = () => {
  return (
    <div>
      <CardHero
        images={modelX}
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
