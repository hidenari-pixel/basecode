import React from "react";
import Header from "./Header";
import ModalSelect from "./ModalSelect";
import Timer from "./Timer";
import Show from "./Show";
import SPDisplay from "./SPDisplay";
import "../App.css";
import styled from "styled-components";

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <ModalSelect />
      <Timer />
      <Show />
      <SPDisplay />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  position: relative;
  text-align: center;
  height: 100%;
  width: 100%;
`;

export default App;
