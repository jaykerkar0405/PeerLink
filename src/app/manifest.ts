// App's External Imports
import { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => {
  return {
    icons: [
      {
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
        src: "https://res.cloudinary.com/bytewise0405/image/upload/v1715086837/PeerLink/App/icon_192x192_k39y2c.png",
      },
      {
        sizes: "384x384",
        type: "image/png",
        src: "https://res.cloudinary.com/bytewise0405/image/upload/v1715086837/PeerLink/App/icon_384x384_vjenkt.png",
      },
      {
        sizes: "512x512",
        type: "image/png",
        src: "https://res.cloudinary.com/bytewise0405/image/upload/v1715086838/PeerLink/App/icon_512x512_o97c5v.png",
      },
      {
        sizes: "1200x630",
        type: "image/png",
        src: "https://res.cloudinary.com/bytewise0405/image/upload/v1715086838/PeerLink/App/open_graph_qx2y09.png",
      },
    ],
    id: "/",
    start_url: "/",
    name: "PeerLink",
    display: "standalone",
    theme_color: "#090E34",
    orientation: "portrait",
    short_name: "PeerLink",
    background_color: "#111928",
    prefer_related_applications: false,
    categories: ["Design", "Integration", "Performance", "Innovation"],
    description:
      "A video calling solution built with WebRTC and Agora.io, powered by Next.js, ensures seamless, real-time communication. Perfect for tech enthusiasts eager to explore and connect globally!",
  };
};

export default manifest;
