"use client";

// React's Hook Imports
import { useState, useEffect } from "react";

// App's Internal Imports
import { Header, Footer, ScrollToTop, CookieConsent } from "@/components";

// App's External Imports
import { hasCookie } from "cookies-next";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";
import { useUser } from "@auth0/nextjs-auth0/client";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = useUser();

  const [is_visible, set_is_visible] = useState<boolean>(true);
  const [is_mounted, set_is_mounted] = useState<boolean>(false);

  useEffect(() => {
    set_is_mounted(true);

    set_is_visible(
      !hasCookie("cookie_consent", { path: "/", maxAge: 365 * 24 * 60 * 60 })
    );

    return () => {
      set_is_visible(true);
      set_is_mounted(false);
    };
  }, []);

  return (
    <>
      {!isLoading && is_mounted ? (
        <>
          <NextTopLoader color="#7E22CE" showSpinner={false} />
          <Header />
          <Toaster reverseOrder={false} position="top-center" />
          {children}
          {is_visible && <CookieConsent />}
          <Footer />
          <ScrollToTop />
        </>
      ) : (
        <div className="flex w-full h-screen justify-center items-center">
          <div className="loader" />
        </div>
      )}
    </>
  );
};

export default Layout;
