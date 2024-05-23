"use client";

// App's External Imports
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";

const Home = () => {
  const { user, isLoading } = useUser();

  return (
    <main className="container bg-white dark:bg-[#121212]">
      <section className="overflow-hidden pb-20 pt-28 md:pt-32 xl:pb-24 xl:pt-40">
        <div className="mx-auto px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32">
            <div className="w-full min-[960px]:w-1/2">
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Elevated by the power of WebRTC and Agora.io
              </h1>

              <p className="text-md text-black dark:text-white">
                Experience seamless one-on-one communication with our video call
                app, designed for quick and effortless connections. Just a click
                lets you dive into a conversation, making it perfect for both
                personal chats and professional meetings. Leveraging advanced
                technology, our app ensures crystal-clear audio and video
                quality.
              </p>

              <div className="mt-10">
                {!isLoading && user ? (
                  <Link
                    href="/room"
                    aria-label="Create / Join Room"
                    className="w-64 flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primary-hover"
                  >
                    Create / Join Room
                  </Link>
                ) : (
                  <a
                    href="/api/auth/login"
                    aria-label="Log In to Create / Join"
                    className="w-64 flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primary-hover"
                  >
                    Log In to Create / Join
                  </a>
                )}
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

export default Home;
