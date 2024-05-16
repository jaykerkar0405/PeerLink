// App's Internal Imports
import { root } from "@/constants";

// App's External Imports
import Link from "next/link";
import Image from "next/image";
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

const Root: React.FC = () => {
  return (
    <main className="container bg-white dark:bg-[#121212]">
      <section className="overflow-hidden pb-20 pt-28 md:pt-32 xl:pb-24 xl:pt-40">
        <div className="mx-auto px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32">
            <div className="w-full min-[960px]:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                🎦 PeerLink | Seamless Video Chat App
              </h4>

              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Elevated by the power of WebRTC and Agora.io
              </h1>

              <p>
                Experience seamless one-on-one communication with our video call
                app, designed for quick and effortless connections. Just a click
                lets you dive into a conversation, making it perfect for both
                personal chats and professional meetings. Leveraging advanced
                technology, our app ensures crystal-clear audio and video
                quality. Start your calls faster and stay connected
                easier—because every moment counts.
              </p>

              <div className="mt-10">
                <Link
                  href="/room"
                  aria-label="Create / Join Room"
                  className="w-64 flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primary-hover"
                >
                  Create / Join Room
                </Link>

                <p className="mt-5 text-black dark:text-white">
                  Start calling now—free to try.
                </p>
              </div>
            </div>

            <div className="hidden w-1/2 lg:block">
              <div className="relative aspect-[600/475] w-full">
                <Image
                  fill
                  priority
                  alt="Home Image"
                  src="https://res.cloudinary.com/bytewise0405/image/upload/v1715156218/PeerLink/Home/home_t3augc.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Root;
