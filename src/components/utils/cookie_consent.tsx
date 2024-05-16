"use client";

// React's Hook Imports
import { useState } from "react";

// App's Internal Imports
import { MotionDiv } from "..";

// App's External Imports
import Link from "next/link";
import { setCookie } from "cookies-next";
import { BiCookie } from "react-icons/bi";

const CookieConsent = () => {
  const [is_visible, set_is_visible] = useState(true);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const transition = {
    delay: 0.25,
    duration: 0.5,
    ease: "easeInOut",
  };

  return (
    <MotionDiv
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={transition}
      viewport={{ amount: 0 }}
      className={`${
        is_visible ? "" : "hidden"
      } fixed bottom-[4.25%] left-[2%] max-w-[345px] w-full bg-white dark:bg-dark rounded-2xl shadow-lg p-5 z-50 transition-transform duration-300`}
    >
      <div className="flex items-center gap-x-[12.5px]">
        <BiCookie className="text-primary dark:text-primary-dark text-2xl" />
        <h2 className="text-primary dark:text-primary-dark text-lg font-medium">
          Cookie Consent
        </h2>
      </div>

      <p className="text-body-color dark:text-white text-base my-4">
        We use cookies to enhance your browsing experience and provide
        personalized content tailored to your interests. By continuing to use
        our website, you consent to the use of cookies as described in our{" "}
        <Link href="/cookies" className="text-primary dark:text-primary-dark">
          Cookie Policy
        </Link>
        .
      </p>

      <div className="w-full flex items-center justify-between">
        <button
          className="border-none text-white py-2 mr-2 rounded bg-primary hover:bg-primary-hover cursor-pointer w-1/2 md:w-1/2 lg:w-1/2 transition-all duration-200 ease-in-out"
          onClick={(event) => {
            event.preventDefault();
            set_is_visible(false);
            setCookie("cookie_consent", "true", {
              path: "/",
              maxAge: 365 * 24 * 60 * 60,
            });
          }}
        >
          Accept
        </button>

        <button
          className="border-none text-white py-2 ml-2 rounded bg-primary hover:bg-primary-hover cursor-pointer w-1/2 md:w-1/2 lg:w-1/2 transition-all duration-200 ease-in-out"
          onClick={(event) => {
            event.preventDefault();
            set_is_visible(false);
          }}
        >
          Decline
        </button>
      </div>
    </MotionDiv>
  );
};

export default CookieConsent;
