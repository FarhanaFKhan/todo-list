import React from "react";
import { Text } from "@chakra-ui/react";

// const Header = () => {
//   return (
//     <Grid h="80px" templateColumns="repeat(5, 1fr)" gap={4}>
//       <GridItem colSpan={1} bg="tomato" />
//       <GridItem colStart={2} colEnd={5} bg="papayawhip">
//         <Text fontSize="3xl">Todo App</Text>
//       </GridItem>
//       <GridItem colSpan={1} bg="tomato" />
//     </Grid>
//   );
// };
// export default Header;
const Header = () => {
  return (
    <Text color="white" fontSize="3xl">
      Todo App
    </Text>
  );
};
export default Header;
