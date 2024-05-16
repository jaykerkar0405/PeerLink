// App's Internal Imports
import { Breadcrumbs as breadcrumbs_type } from "@/types";

// App's External Imports
import Link from "next/link";

const Breadcrumbs = ({ title, page_name }: breadcrumbs_type) => {
  return (
    <>
      <div className="dark:bg-dark relative z-10 overflow-hidden pb-[60px] pt-[120px] md:pt-[130px] lg:pt-[160px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="text-center">
                <h1 className="text-dark mb-4 text-3xl font-bold dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                  {title}
                </h1>

                <ul className="flex items-center justify-center gap-[10px]">
                  <Link
                    href="/"
                    className="text-dark flex items-center gap-[10px] text-base font-medium dark:text-white"
                  >
                    Home
                  </Link>

                  <p className="text-body-color flex items-center gap-[10px] text-base font-medium">
                    <span className="text-body-color dark:text-dark-6">
                      {" "}
                      /{" "}
                    </span>

                    {page_name}
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumbs;
