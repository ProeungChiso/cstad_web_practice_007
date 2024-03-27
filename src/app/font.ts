import { Inter, Koulen, Oswald } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});
const oswald = Oswald({
  subsets: ["latin"],
  weight: "300",
  display: "swap",
});
const koulen = Koulen({
  weight: "400",
  subsets: ["khmer"],
});

export {inter, oswald, koulen}
