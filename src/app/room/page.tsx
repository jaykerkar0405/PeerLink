"use client";

// React's Hook Imports
import { useState } from "react";

// App's Internal Imports
import { grand_hotel } from "@/app/font";
import { Breadcrumbs } from "@/components";
import { generate_room_code } from "@/modules";

// App's External Imports
import Link from "next/link";
import toast from "react-hot-toast";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter, useSearchParams } from "next/navigation";

const Room: React.FC = () => {
  const router = useRouter();
  const { user, isLoading } = useUser();
  const search_params = useSearchParams();
  const [room_code, set_room_code] = useState<string>("");

  if (search_params.get("error") === "occupied") {
    toast.error("The room is currently occupied.", { id: "room_occupied" });
  }

  if (!isLoading && !user) {
    router.push("/api/auth/login");
  }

  return (
    <>
      <Breadcrumbs page_name="Room" title="Create / Join Room" />
      <section className="py-14 lg:py-20 bg-[#F4F7FF] dark:bg-[#121212]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-8 py-14 text-center dark:bg-dark sm:px-12 md:px-[60px] shadow-2">
                <div className="mb-14 text-center">
                  <Link
                    href="/"
                    className={`mx-auto inline-block text-[2.5rem] text-dark dark:text-white ${grand_hotel.className}`}
                  >
                    Welcome To PeerLink
                  </Link>
                </div>

                <div className="mb-[22px]">
                  <input
                    type="text"
                    placeholder="Room Code"
                    className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-dark-6 focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white dark:focus:border-primary"
                    onChange={(event) => {
                      event.preventDefault();
                      set_room_code(event.target.value);
                    }}
                  />
                </div>

                <div className="mb-9">
                  <Link
                    href={`/room/${room_code}`}
                    className="flex w-full cursor-pointer items-center justify-center rounded-md border border-primary bg-primary px-5 py-3 text-base text-white transition duration-300 ease-in-out hover:bg-primary-hover"
                  >
                    Join Room
                  </Link>
                </div>

                <span className="relative my-8 block text-center">
                  <span className="absolute left-0 top-1/2 block h-px w-full bg-stroke dark:bg-dark-3"></span>
                  <span className="relative z-10 inline-block bg-white px-3 text-base dark:bg-dark">
                    OR
                  </span>
                </span>

                <div className="mb-9">
                  <Link
                    href={`/room/${generate_room_code()}`}
                    className="flex w-full cursor-pointer items-center justify-center rounded-md border border-primary bg-primary px-5 py-3 text-base text-white transition duration-300 ease-in-out hover:bg-primary-hover"
                  >
                    Create Room
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Room;
