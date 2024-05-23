// App's Internal Imports
import { root } from "@/constants";
import { Home } from "@/components";

// App's External Imports
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = root;

export const viewport: Viewport = {
  minimumScale: 1,
  initialScale: 1,
  userScalable: true,
  viewportFit: "cover",
  width: "device-width",
  themeColor: "#090E34",
};

const Root: React.FC = async () => {
  return <Home />;
};

export default Root;
