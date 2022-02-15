import { VFC } from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { FcHome, FcServices, FcReading } from "react-icons/fc";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

import { NavLink } from "../components/NavLink";

export const Nav: VFC = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(auto-fit,50px)",
        sm: "repeat(auto-fit,80px)",
        lg: "repeat(3,80px)",
      }}
      gap={2}
      justifyContent={{ base: "center", lg: "end" }}
    >
      <GridItem>
        <NavLink path="/">
          <Box fontSize={{ base: "30px", sm: "40px" }}>
            <FcHome />
          </Box>
        </NavLink>
      </GridItem>
      <GridItem>
        <NavLink path="/products/">
          <Box fontSize={{ base: "30px", sm: "40px" }}>
            <FcServices />
          </Box>
        </NavLink>
      </GridItem>
      <GridItem>
        <NavLink path="/blogs/">
          <Box fontSize={{ base: "30px", sm: "40px" }}>
            <FcReading />
          </Box>
        </NavLink>
      </GridItem>
      <GridItem>
        <NavLink path="https://github.com/niiharamegumu" isBlank={true}>
          <Box fontSize={{ base: "30px", sm: "40px" }}>
            <AiFillGithub />
          </Box>
        </NavLink>
      </GridItem>
      <GridItem>
        <NavLink path="https://twitter.com/lmgm_m" isBlank={true}>
          <Box fontSize={{ base: "30px", sm: "40px" }} color="blue.500">
            <AiOutlineTwitter />
          </Box>
        </NavLink>
      </GridItem>
    </Grid>
  );
};
