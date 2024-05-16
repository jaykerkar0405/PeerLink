// App's Internal Imports
import { error } from "@/constants";
import { Breadcrumbs } from "@/components";

// App's External Imports
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { IoChevronForward } from "react-icons/io5";

export const metadata: Metadata = error;

const NotFound = () => {
  return (
    <>
      <Breadcrumbs page_name="404" title="Page Unavailable" />

      <section className="overflow-hidden pb-25 pt-45 lg:pb-32.5 lg:pt-50 xl:pb-37.5 xl:pt-55">
        <div className="mx-auto max-w-[518px] text-center">
          <Image
            priority
            width={300}
            height={300}
            alt="404 Image"
            className="h-auto mx-auto mt-16 mb-10"
            src="https://res.cloudinary.com/bytewise0405/image/upload/v1715065324/PeerLink/Utils/404_atnjpk.svg"
          />

          <h2 className="mb-5 text-2xl font-semibold text-black dark:text-white md:text-4xl">
            This Page Does Not Exist
          </h2>
          <p className="mb-10 mx-2">
            The page you were looking for appears to have been moved, deleted or
            does not exist.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-primary mb-16 px-7 py-3 text-center text-base font-medium text-white transition duration-300 hover:bg-primary-hover"
          >
            Return to Home <IoChevronForward className="w-4 h-4 fill-current" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
