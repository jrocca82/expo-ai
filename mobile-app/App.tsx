import { NativeBaseProvider, Box, Text } from "native-base";
import { customTheme } from "./constants/style";
import { windowHeight, windowWidth } from "./constants/dimensions";
import Header from "./components/Header";

export default function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <Box
        alignItems="center"
        justifyContent="flex-start"
        paddingTop="70"
        height={windowHeight}
        width={windowWidth}
        backgroundColor="black"
      >
        <Header />
      </Box>
    </NativeBaseProvider>
  );
}
