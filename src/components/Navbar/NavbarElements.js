import { FaBars} from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: black;
  height: 150px;
  display: flex;
  justify-content: center;
  font-weight: bold;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;
 
export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-size: 200%;
  cursor: pointer;
  &.active {
    color: white;
  }
`;
 
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
 
export const NavMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: -24px;
    @media screen and (max-width: 768px) {
    display: none;
  }
`;