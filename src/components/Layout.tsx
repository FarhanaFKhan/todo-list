import React, { FC } from "react";
import Header from "./Header";
import Container from "./Container";
import { Grid, GridItem, Text } from "@chakra-ui/react";

const Layout: FC = () => {
  return (
    <Grid
      templateRows="repeat(25 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem rowSpan={2} colSpan={1} />
      <GridItem colStart={2} colEnd={5} bg="black">
        <Header />
      </GridItem>
      <GridItem rowSpan={2} colSpan={1} />
      <Container />
    </Grid>
  );
};

export default Layout;
