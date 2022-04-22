import React, { FC } from "react";
import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <div>
        <Container />
      </div>
    </div>
  );
};

export default App;
