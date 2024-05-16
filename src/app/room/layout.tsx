// App's Internal Imports
import { room } from "@/constants";

// App's External Imports
import type { Metadata } from "next";

export const metadata: Metadata = room;

const RoomLayout = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default RoomLayout;
