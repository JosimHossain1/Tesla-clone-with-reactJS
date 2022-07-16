import React from "react";
import CardHero from "../CarHeroCard/CardHero";

const ModelY = () => {
  return (
    <div>
      <CardHero
        images="https://tesla-cdn.thron.com/delivery/public/image/tesla/0cf18940-c0bf-45f7-b2d8-46c3bc693c65/bvlatuR/std/0x0/model-y_R1@2"
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
