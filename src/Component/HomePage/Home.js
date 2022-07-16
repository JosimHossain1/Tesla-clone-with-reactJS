import React from "react";
import HomePageData from '../../Data/HomePageData';
import Hero from './Hero';
import Section from "./Section";

const Home = () => {
 

  return (
    <>
    <Hero />
      {HomePageData.map((detail, index) => (
        <Section
          key={index}
          image={detail.image}
          title={detail.title}
          description={detail.description}
          anchore={detail.anchore}
          button={detail.button}
          button2={detail.button2}
        />
      ))}     
    </>
  );
};

export default Home;

