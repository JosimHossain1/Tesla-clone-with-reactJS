import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/HomePage/Home";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Model3 from "./Component/Model3/Model3";
import ModelS from "./Component/ModelS/ModelS";
import ModelX from "./Component/ModelX/ModelX";
import ModelY from "./Component/ModelY/ModelY";
import SolarRoof from "./Component/SolarRoof/SolarRoof";
import SolarPanel from "./Component/SolarPanel/SolarPanel";
import Shop from "./Component/Shop/Shop";
import Account from "./Component/Account/Account";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model3" element={<Model3 />} />
        <Route path="/models" element={<ModelS />} />
        <Route path="/modelx" element={<ModelX />} />
        <Route path="/modely" element={<ModelY />} />
        <Route path="/solarroof" element={<SolarRoof />} />
        <Route path="/solarpanel" element={<SolarPanel />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
