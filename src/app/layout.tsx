"use client";

// React's Hook Imports
import { useState, useEffect, Suspense } from "react";

// App's Internal Imports
import Loading from "./loading";
import { poppins } from "./font";
import { Layout } from "@/components";
import "../../public/styles/globals.css";

// App's External Imports
import { hasCookie } from "cookies-next";
import { ThemeProvider } from "next-themes";
import { SkeletonTheme } from "react-loading-skeleton";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { GoogleTagManager } from "@next/third-parties/google";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [is_visible, set_is_visible] = useState<boolean>(true);

  useEffect(() => {
    set_is_visible(
      !hasCookie("cookie_consent", { path: "/", maxAge: 365 * 24 * 60 * 60 })
    );

    return () => {
      set_is_visible(true);
    };
  }, []);

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
      <body className={poppins.className}>
        <UserProvider>
          <ThemeProvider
            attribute="class"
            enableSystem={true}
            defaultTheme="light"
          >
            <SkeletonTheme baseColor="#BEBEBE" highlightColor="#666666">
              <Suspense fallback={<Loading />}>
                <Layout children={children} />
              </Suspense>
            </SkeletonTheme>
          </ThemeProvider>
        </UserProvider>

        {!is_visible && process.env.NODE_ENV === "production" && (
          <GoogleTagManager gtmId={String(process.env.NEXT_PUBLIC_GTM_ID)} />
        )}
      </body>
    </html>
  );
};

export default RootLayout;
