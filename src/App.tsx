import React, { FC } from "react";
import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import { Grid, GridItem, Text } from "@chakra-ui/react";

const App: FC = () => {
  return (
    <Grid
      templateRows="repeat(25 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem rowSpan={2} colSpan={1} bg="pink.50" />
      <GridItem colStart={2} colEnd={5} bg="papayawhip">
        <Header />
      </GridItem>
      <GridItem rowSpan={2} colSpan={1} bg="pink.50" />
      <Container />
    </Grid>
  );
};

export default App;
