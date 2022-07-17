import React from "react";
import CardHero from "../CarHeroCard/CardHero";
import models from "../../Assets/images/model-s.jpg";
 
const ModelS = () => {
  return (
    <div>
      <CardHero
        images={models}
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
