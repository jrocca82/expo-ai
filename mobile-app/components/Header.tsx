import { Flex, Heading } from "native-base";
import NavMenu from "./NavMenu";
import { windowWidth } from "../constants/dimensions";

const Header = () => (
  <Flex
    flexDirection="row"
    alignItems="center"
    justifyContent="space-evenly"
    width={windowWidth}
    borderBottomColor="grey"
    borderBottomWidth="1"
    padding="30"
  >
    <Heading color="white">AI Image Generator</Heading>
    <NavMenu />
  </Flex>
);

export default Header;
