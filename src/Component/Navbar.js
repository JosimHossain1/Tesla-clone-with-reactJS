import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../Assets/images/logo.svg";
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {

  const [isOpen, setIsOpen] = React.useState(false);

  const CloseHandler = () => {
    setIsOpen(!isOpen);
  }
  const NavItems = [
    { name: "Model S", path: "/models" },
    { name: "Model 3", path: "/model3" },
    { name: "Model X", path: "/modelx" },
    { name: "Model Y", path: "/modely" },
    { name: "Solar Roof", path: "/solarroof" },
    { name: "Solar Panel", path: "/solarpanel" },
  ];

  return (
    <>
      <Navigation>
        <Logo>
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </Logo>

        <NavList>
          <ul>
            {NavItems.map((item, index) => (
              <NavLink
                to={item.path}
                className="px-3 py-1 rounded duration-600 font-[600] opacity-60 hover:bg-[#ffffff57] cursor-pointer "
              >
                {item.name}
              </NavLink>
            ))}
          </ul>
        </NavList>

        <RightItems>
          <ul>
            <NavLink
              to="/shop"
              className="px-3 py-1 rounded duration-600 font-[600] opacity-60 hover:bg-[#ffffff57] "
            >
              Shop
            </NavLink>
            <NavLink
              to="/account"
              className="px-3 py-1 rounded duration-600 font-[600] opacity-60 hover:bg-[#ffffff57] "
            >
              Account
            </NavLink>
          </ul>
          <ToogleButton>
            <span onClick={CloseHandler} >Menu</span>
          </ToogleButton>
        </RightItems>
      </Navigation>
    
      <div className={`fixed z-20 right-0 bg-white drop-shadow-lg p-4 ${!isOpen? "w-0 opacity-0 " : "w-[50%] h-screen md:w-[30%] lg:w-[25%]"}`}>
        <ul className="">
          <li className="flex justify-end mb-3">
            <AiOutlineClose className="block cursor-pointer mr-3 text-2xl" onClick={CloseHandler} />
          </li>
          {NavItems.map((item, index) => (
            <NavLink to={item.path} className="block py-2 border-b" key={index}>
              {item.name}
            </NavLink>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;

const Navigation = styled.nav`
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.div``;
const NavList = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }

  ul {
    display: flex;
    align-items: center;
  }
`;

const RightItems = styled.div`
  display: flex;

  ul {
    display: flex;
    align-items: center;
  }
  li {
    margin-left: 20px;
    font-weight: 600;
    opacity: 0.7;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    ul {
      display: none;
    }
  }
`;

const ToogleButton = styled.button`
  margin-left: 20px;
  font-weight: 600;
  opacity: 0.6;
`;
