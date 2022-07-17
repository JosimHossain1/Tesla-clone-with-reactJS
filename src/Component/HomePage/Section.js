import React from "react";

import styled from "styled-components";

const Section = ({ image, title, description, anchore, button, button2 }) => {
  return (
    <Wrap bgImage={image}>
  
     <ModelBox>
        <h1>{title}</h1>
        <p>
          {description} <a href="https://google.com">{anchore}</a>{" "}
        </p>
      </ModelBox>

      <BottomBox>
        <ButtonGroup>
          <LeftButton>{button}</LeftButton>
          {
            button2 && 
              <RightButton>{button2}</RightButton>
          }
        </ButtonGroup>
      </BottomBox>
    </Wrap>
  );
};

export default Section;

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
  padding-bottom: 2vh;
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
