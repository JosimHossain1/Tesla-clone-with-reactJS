import React from "react";
import model3 from "../../Assets/images/model-3.jpg";
import {AiOutlineDown} from "react-icons/ai";
import styled from "styled-components";

const Hero = () => {
  return (
    <Wrap>
      <ModelBox>
        <h1>Model 3</h1>
        <p>
        Order Online for <a href="https://google.com">Touchless Delivery</a>
        </p>
      </ModelBox>

      <BottomBox>
        <ButtonGroup>
          <LeftButton>Custome Order</LeftButton>

          <RightButton>Existing Inventory</RightButton>
        </ButtonGroup>

        <div>
            <AiOutlineDown style={{animation: "down infinite 1.5s", fontSize: "20px", cursor : "pointer" }} />
        </div>
        
      </BottomBox>
    </Wrap>
  );
};

export default Hero;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${model3});
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
    font-size: 2.4rem;
    font-weight: bold;
  }
  p {
    font-size: 17px;
    color: gray;
    &:hover {
      color: #000;
    }
    a {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 5vh;
`;

const ButtonGroup = styled.div`
  display: flex;
  padding-bottom: 3vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  font-weight: 600;
  padding: 10px 50px;
  font-size: 13px;
  text-transform: uppercase;
  margin: 10px;
  border-radius: 100px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
`;
