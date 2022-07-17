import React from "react";
import CardHero from "../CarHeroCard/CardHero";
import modelThree from "../../Assets/images/model-3.jpg"

const Model3 = () => {
  return (
    <div>
      <CardHero
        images={modelThree}
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
