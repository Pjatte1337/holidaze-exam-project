import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  width: 12rem;
  height: 3rem;
  font-size: 1.4em;
  font-weight: bolder;
  border: 0;
  border-radius: 10px;
  background-color: #32de84;
  box-shadow: 2px 2px 5px grey;

  :hover {
    color: black;
    background-color: #ffffff;
    border: solid 3px #32de84;
  }
`;

const Button2 = styled.button`
  width: 12rem;
  height: 3rem;
  font-size: 1.4em;
  font-weight: bolder;
  border: 0;
  border-radius: 10px;
  background-color: #32de84;
  box-shadow: 2px 2px 5px grey;

  :hover {
    color: black;
    background-color: #ffffff;
    border: solid 3px #32de84;
  }
`;

const ButtonSmaller = styled(Link)`
  width: 8rem;
  height: 2.5rem;
  font-size: 1.4em;
  font-weight: bolder;
  border: 0;
  border-radius: 10px;
  background-color: #32de84;
  box-shadow: 2px 2px 5px grey;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;

  :hover {
    color: black;
    background-color: #ffffff;
    border: solid 3px #32de84;
  }
`;

const ButtonSmaller2 = styled(Link)`
  width: 8rem;
  height: 2.5rem;
  font-size: 1.4em;
  font-weight: bolder;
  border: 0;
  border-radius: 10px;
  background-color: #32de84;
  box-shadow: 2px 2px 5px grey;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;

  :hover {
    color: black;
    background-color: #ffffff;
    border: solid 3px #32de84;
  }
`;

export { Button, Button2, ButtonSmaller, ButtonSmaller2 };
