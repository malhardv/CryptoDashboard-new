import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        purple: {
          500: "#5F00D9",
          700: "#553C9A",
          900: "#322659",
        },
        p: {
          purple: "#5F00D9",
          black: "#171717"
        },
        black: {
          5: "#F3F3F7",
          10: "#EEEEF4",
          20: "#D8DDE2",
          40: "#BABAC4",
          60: "#797E82",
          80: "#535D66",
        },
    },
    fonts: {
        heading: "Ubuntu, sans-serif",
        body: "Ubuntu, sans-serif"
    },
    styles: {
        global: {
          // styles for the `body`
          body: {
            bg: '#F3F3F7',
          },
        },
      },
    components: {
      Button: {
        baseStyle: {
          fontWeight: 'bold',
          borderRadius: '10px' // Normally, it is "semibold"
        },
      }
    }
},
withDefaultColorScheme({ colorScheme: "purple"})
)