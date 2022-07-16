import React from "react";

import styled from "styled-components";

const CardHero = ({ images, title, des, range, rangeDes, mph, mphDes, speed, speedDes, power, powerDes }) => {
  return (
    <Wrap bgImage={images} className="text-white">
     
     <ModelBox>
        <h1>{title}</h1>
        <p>
         {des}
        </p>
      </ModelBox>

      <DetailsBox>
     
        <div className="grid px-10 gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center mx-auto justify-center">
          <div>
            <h1 className="text-2xl">{range}</h1>
            <p className="opacity-70">{rangeDes}</p>
          </div>
          <div>
            <h1 className="text-2xl">{mph}</h1>
            <p className="opacity-70">{mphDes}</p>
          </div>
          <div>
            <h1 className="text-2xl">{speed}</h1>
            <p className="opacity-70">{speedDes}</p>
          </div>
          <div className="hidden lg:block">
            <h1 className="text-2xl">{power}</h1>
            <p className="opacity-70">{powerDes}</p>
          </div>
        <button className="border-2 border-white hover:bg-white hover:text-black cursor-pointer h-[30px] w-[200px] rounded-full">
              ORDER NOW
          </button>
        </div>
      </DetailsBox>
   
    </Wrap>
  );
};

export default CardHero;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ModelBox = styled.div`
  padding-top: 15vh;
  text-align: center;
  h1 {
    color: black;
    font-size: 2.4rem;
    font-weight: bold;
  }
  p {
    font-size: 17px;
    color: gray;
  }
`;

const DetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 10vh;
`;





