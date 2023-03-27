import { Box, HamburgerIcon, Menu, Pressable, Text } from "native-base";

const NavMenu = () => (
  <Box alignItems="center">
    <Menu
      trigger={(triggerProps) => {
        return (
          <Pressable accessibilityLabel="More options menu" {...triggerProps}>
            <HamburgerIcon color="white" />
          </Pressable>
        );
      }}
      backgroundColor="black"
      borderWidth="1"
      borderColor="white"
      color="white"
    >
      <Menu.Item borderBottomColor="grey" borderBottomWidth="1">
        <Text color="white">Home: Generate Images</Text>
      </Menu.Item>
      <Menu.Item borderBottomColor="grey" borderBottomWidth="1">
        <Text color="white">About the Project</Text>
      </Menu.Item>
      <Menu.Item>
        <Text color="white">About the Builder</Text>
      </Menu.Item>
    </Menu>
  </Box>
);

export default NavMenu;
