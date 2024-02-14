import { CommonColors } from "@mui/material/styles/createPalette";

/* declare module '@mui/material/styles' {
  interface Palette {
    specific: {
      [k: string]: string;
      model: string;
      pipeline: string;
    }
  }
  interface PaletteOptions {
    specific: {
      model: string;
      pipeline: string;
    }
  }
} */

declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    gray: string;
  }
}
