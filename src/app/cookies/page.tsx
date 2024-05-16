// App's Internal Imports
import { cookies } from "@/constants";
import { Breadcrumbs } from "@/components";

// App's External Imports
import type { Metadata } from "next";

export const metadata: Metadata = cookies;

const Cookies: React.FC = () => {
  return (
    <>
      <Breadcrumbs page_name="Cookies" title="Cookies Policy" />

      <div className="max-w-3xl mx-auto py-8 px-4 bg-white dark:bg-[#121212]">
        <p className="mb-4">Last updated: April 06, 2024</p>

        <p className="font-bold mt-4">What Are Cookies</p>
        <p>
          As is common practice with almost all professional websites this site
          uses cookies, which are tiny files that are downloaded to your
          computer, to improve your experience. This page describes what
          information they gather, how we use it and why we sometimes need to
          store these cookies. We will also share how you can prevent these
          cookies from being stored however this may downgrade or 'break'
          certain elements of the sites functionality.
        </p>

        <p className="font-bold mt-4">How We Use Cookies</p>
        <p>
          We use cookies for a variety of reasons detailed below. Unfortunately
          in most cases there are no industry standard options for disabling
          cookies without completely disabling the functionality and features
          they add to this site. It is recommended that you leave on all cookies
          if you are not sure whether you need them or not in case they are used
          to provide a service that you use.
        </p>

        <p className="font-bold mt-4">Disabling Cookies</p>
        <p>
          You can prevent the setting of cookies by adjusting the settings on
          your browser (see your browser Help for how to do this). Be aware that
          disabling cookies will affect the functionality of this and many other
          websites that you visit. Disabling cookies will usually result in also
          disabling certain functionality and features of the this site.
          Therefore it is recommended that you do not disable cookies.
        </p>

        <p className="font-bold mt-4">The Cookies We Set</p>
        <ul className="list-none list-inside">
          <li>
            <p>Site preferences cookies</p>
            <p>
              In order to provide you with a great experience on this site we
              provide the functionality to set your preferences for how this
              site runs when you use it. In order to remember your preferences
              we need to set cookies so that this information can be called
              whenever you interact with a page is affected by your preferences.
            </p>
          </li>
        </ul>

        <p className="font-bold mt-4">Third Party Cookies</p>
        <ul className="list-none list-inside">
          <li>
            <p>
              This site uses Google Analytics which is one of the most
              widespread and trusted analytics solution on the web for helping
              us to understand how you use the site and ways that we can improve
              your experience. These cookies may track things such as how long
              you spend on the site and the pages that you visit so we can
              continue to produce engaging content.
            </p>
            <p>
              For more information on Google Analytics cookies, see the official
              Google Analytics page.
            </p>
          </li>
          <li>
            <p>
              Third party analytics are used to track and measure usage of this
              site so that we can continue to produce engaging content. These
              cookies may track things such as how long you spend on the site or
              pages you visit which helps us to understand how we can improve
              the site for you.
            </p>
          </li>
          <li>
            <p>
              From time to time we test new features and make subtle changes to
              the way that the site is delivered. When we are still testing new
              features these cookies may be used to ensure that you receive a
              consistent experience whilst on the site whilst ensuring we
              understand which optimizations our users appreciate the most.
            </p>
          </li>
        </ul>

        <p className="font-bold mt-4">More Information</p>
        <p>
          Hopefully that has clarified things for you and as was previously
          mentioned if there is something that you aren't sure whether you need
          or not it's usually safer to leave cookies enabled in case it does
          interact with one of the features you use on our site.
        </p>

        <h2 className="text-lg font-semibold my-2">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Cookies Policy, You can contact
          us:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>
            By email:{" "}
            <a href="mailto:jaykerkar0405@gmail.com">jaykerkar0405@gmail.com</a>
          </li>
          <li>
            By visiting this page on our website:{" "}
            <a
              target="_blank"
              className="text-primary dark:text-primary-dark"
              rel="noopener noreferrer"
              href="https://jaykerkar.vercel.app/#contact"
            >
              Contact Page
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Cookies;
