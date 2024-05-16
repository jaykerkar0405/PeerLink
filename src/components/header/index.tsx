"use client";

// React's Hook Imports
import { useState, useEffect } from "react";

// App's Internal Imports
import { menu, dark_theme_icon, light_theme_icon } from "@/constants";

// App's External Imports
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { IoMoon, IoSunny } from "react-icons/io5";
import { useUser } from "@auth0/nextjs-auth0/client";

const Header: React.FC = () => {
  const { user, isLoading } = useUser();
  const { theme, setTheme } = useTheme();

  const [is_sticky, set_is_sticky] = useState<boolean>(false);
  const [is_menu_active, set_is_menu_active] = useState<boolean>(false);
  const [is_header_mounted, set_is_header_mounted] = useState<boolean>(false);

  const handle_menu_toggle = () => {
    set_is_menu_active(!is_menu_active);
  };

  const handle_menu_sticky = () => {
    if (window.scrollY >= 80) {
      set_is_sticky(true);
    } else {
      set_is_sticky(false);
    }
  };

  useEffect(() => {
    set_is_header_mounted(true);
    window.addEventListener("scroll", handle_menu_sticky);

    window.addEventListener("click", (event: Event) => {
      const target = event.target;

      if (target instanceof Node) {
        if (!document.getElementById("mobile-menu-toggle")?.contains(target)) {
          set_is_menu_active(false);
        }
      }
    });

    return () => {
      set_is_header_mounted(false);
      window.removeEventListener("scroll", handle_menu_sticky);

      window.removeEventListener("click", (event: Event) => {
        const target = event.target;

        if (target instanceof Node) {
          if (
            !document.getElementById("mobile-menu-toggle")?.contains(target)
          ) {
            set_is_menu_active(false);
          }
        }
      });
    };
  }, []);

  return (
    <header
      className={`left-0 top-0 z-40 flex w-full items-center ${
        is_sticky
          ? "fixed z-[9999] border-b border-stroke bg-white/80 backdrop-blur-[5px] transition dark:border-dark-3/20 dark:bg-dark/10"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <Link
              href="/"
              className={`block w-full ${is_sticky ? "py-2" : "py-5"} `}
            >
              <Image
                priority
                width={0}
                height={0}
                alt="Header Icon"
                className="w-full sm:w-5/6"
                src={
                  is_header_mounted && theme === "light"
                    ? light_theme_icon
                    : dark_theme_icon
                }
              />
            </Link>
          </div>

          <div className="flex w-[75%] items-center justify-between px-4">
            <div>
              <button
                id="mobile-menu-toggle"
                aria-label="Mobile Menu"
                onClick={handle_menu_toggle}
                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 bg-dark dark:bg-white ${
                    is_menu_active ? "top-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 bg-dark dark:bg-white ${
                    is_menu_active ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 bg-dark dark:bg-white ${
                    is_menu_active ? "top-[-8px] -rotate-45" : ""
                  }`}
                />
              </button>

              <nav
                className={`absolute right-5 top-[120%] z-30 w-[250px] rounded border-[0.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark-2 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 lg:dark:bg-transparent ${
                  is_menu_active
                    ? "visibility opacity-100"
                    : "invisible opacity-0"
                }`}
              >
                <ul className="block lg:ml-8 lg:flex lg:gap-x-8 xl:ml-14 xl:gap-x-12">
                  {menu.map((element, index) => {
                    return (
                      <li key={index} className="group relative">
                        <Link
                          href={element.path}
                          className={`flex py-2 text-base group-hover:text-dark-hover dark:group-hover:text-white-hover lg:inline-flex lg:px-0 lg:py-6 text-dark dark:text-white border-b-0 border-primary ${
                            !is_menu_active && is_sticky
                              ? "transition-all hover:border-b-[3px]"
                              : ""
                          }`}
                        >
                          {element.name}
                        </Link>
                      </li>
                    );
                  })}

                  {!isLoading && user ? (
                    <div className="flex border-t-2 border-gray-300 w-full py-3 items-center justify-between min-[960px]:mx-16 min-[960px]:w-44 min-[960px]:border-none">
                      <Link
                        href="/room"
                        className="text-regular font-medium hover:text-primary"
                      >
                        Room
                      </Link>

                      <a
                        href="/api/auth/logout"
                        className="flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primary-hover"
                      >
                        Log Out
                      </a>
                    </div>
                  ) : (
                    <div className="flex border-t-2 border-gray-300 w-full py-3 items-center justify-between min-[960px]:mx-16 min-[960px]:w-44 min-[960px]:border-none">
                      <a
                        href="/api/auth/login"
                        className="flex items-center justify-center rounded-full bg-primary w-full px-5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primary-hover"
                      >
                        Login / Register
                      </a>
                    </div>
                  )}
                </ul>
              </nav>
            </div>

            <div className="flex items-center justify-end pr-16 lg:pr-0">
              <button
                aria-label="Toggle Theme"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="flex h-8 w-8 items-center justify-center text-body-color duration-300 dark:text-white"
              >
                {is_header_mounted && theme === "light" ? (
                  <IoMoon className="h-[30px] w-[30px] fill-current text-dark dark:text-white" />
                ) : (
                  <IoSunny className="h-[30px] w-[30px] fill-current text-dark dark:text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
