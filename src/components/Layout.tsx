import { Box } from "@chakra-ui/react";
import React from "react";
import Nav from "./Nav";

interface Props {}

const Layout: React.FC<Props> = ({ children }) => (
  <Box height="100vh" display="flex" flexDirection="column">
    <Box position="sticky" top={0} zIndex={1}>
      <Nav />
    </Box>
    {children}
  </Box>
);

export default Layout;
