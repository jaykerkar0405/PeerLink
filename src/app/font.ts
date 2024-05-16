// App's External Imports
import { Poppins, Grand_Hotel } from "next/font/google";

const poppins = Poppins({
  display: "swap",
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const grand_hotel = Grand_Hotel({
  display: "swap",
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export { poppins, grand_hotel };
