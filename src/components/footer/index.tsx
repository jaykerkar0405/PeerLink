"use client";

// React's Hook Imports
import { useState, useEffect } from "react";

// App's Internal Imports
import app from "@/app/firebase";
import { fetch_remote_config } from "@/modules";
import { menu, dark_theme_icon } from "@/constants";

// App's External Imports
import Link from "next/link";
import Image from "next/image";
import { Config } from "@/types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getRemoteConfig } from "firebase/remote-config";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

const Footer: React.FC = () => {
  const [config, set_config] = useState<Config | null>(null);

  const fetch_current_year = (): number => {
    const date = new Date();
    return date.getFullYear();
  };

  const validate_config = async (remote_config: any) => {
    const fetch_config = await fetch_remote_config(remote_config);

    if (fetch_config) {
      set_config(fetch_config);
      localStorage.setItem("config", JSON.stringify(fetch_config));
    } else {
      const stored_config = localStorage.getItem("config");

      if (stored_config) {
        set_config(JSON.parse(stored_config as string));
      }
    }
  };

  useEffect(() => {
    const remote_config = getRemoteConfig(app);
    remote_config.settings.minimumFetchIntervalMillis = 3600000;

    validate_config(remote_config);

    return () => {
      set_config(null);
    };
  }, []);

  return (
    <footer className="bg-secondary">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <Link href="/">
          <Image
            priority
            width={0}
            height={0}
            alt="Footer Icon"
            className="w-full"
            src={dark_theme_icon}
          />
        </Link>

        <p className="mx-auto mt-6 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl text-center leading-relaxed text-zinc-400">
          A video calling solution built with WebRTC and Agora.io, powered by
          Next.js, ensures seamless, real-time communication. Perfect for tech
          enthusiasts eager to explore and connect globally!
        </p>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          {menu.map((element, index) => {
            return (
              <li key={index}>
                <Link
                  href={element.path}
                  className="text-white transition hover:text-primary-dark"
                >
                  {element.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li className="text-zinc-400">
            &copy; {fetch_current_year()}{" "}
            <Link href="/" className="hover:text-primary-dark">
              PeerLink
            </Link>
          </li>

          <li>
            <Link
              target="_blank"
              aria-label="GitHub"
              rel="noopener noreferrer"
              href="https://github.com/jaykerkar0405"
            >
              <IoLogoGithub className="h-6 w-6 transition text-white hover:text-primary-dark" />
            </Link>
          </li>

          <li>
            <Link
              target="_blank"
              aria-label="LinkedIn"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/jaykerkar0405"
            >
              <IoLogoLinkedin className="h-6 w-6 transition text-white hover:text-primary-dark" />
            </Link>
          </li>

          <li className="text-zinc-400 flex gap-2 sm:gap-2">
            Version{" "}
            {config ? (
              config.version
            ) : (
              <Skeleton width={30} className="text-gray-500" />
            )}
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
