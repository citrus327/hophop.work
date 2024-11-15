import { Londrina_Solid, Poppins } from "next/font/google";

export const logoFont = Londrina_Solid({
  weight: ["100", "300", "400", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});
