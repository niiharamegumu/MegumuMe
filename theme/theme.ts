import { extendTheme } from "@chakra-ui/react";

export const brightTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "white",
        color: "gray.900",
      },
    },
  },
});

export const darkTheme = extendTheme({
  components: {
    Link: {
      baseStyle: {
        _focus: {
          boxShadow: "none",
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "white",
      },
    },
  },
});
