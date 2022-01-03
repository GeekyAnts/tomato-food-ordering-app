import {  extendTheme } from "native-base";

export const ZomatoTheme = extendTheme({
  colors: {
    pinkZomato: {
      100: "#d92662",
    },
    cyanZomato:{
      200:"rgb(255, 126, 139)",
      300:"#E5F3F3",
      500:"#EF4F5F"
    },
    grayZomato:{    
      600:'#4F4F4F',
      650:"rgb(54, 54, 54)",
      700:'rgb(28, 28, 28)'
    },
    grayTransparentZomato:{
      400:'rgba(50,50,50,0)',
      600:'rgba(50,50,50,0.8)'
    }
  },
});