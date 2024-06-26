// App's Internal Imports
import { terms } from "@/constants";
import { Breadcrumbs } from "@/components";

// App's External Imports
import type { Metadata } from "next";

export const metadata: Metadata = terms;

const Terms: React.FC = () => {
  return (
    <>
      <Breadcrumbs page_name="Terms" title="Terms & Conditions" />

      <div className="max-w-3xl mx-auto py-8 px-4 bg-white dark:bg-[#121212]">
        <p className="mb-4">Last updated: April 06, 2024</p>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">
            Interpretation and Definitions
          </h2>
          <p>
            <span className="">Interpretation:</span> The words of which the
            initial letter is capitalized have meanings defined under the
            following conditions. The following definitions shall have the same
            meaning regardless of whether they appear in singular or in plural.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Definitions</h2>
          <p>
            <span className="">Affiliate:</span> means an entity that controls,
            is controlled by or is under common control with a party, where
            "control" means ownership of 50% or more of the shares, equity
            interest or other securities entitled to vote for election of
            directors or other managing authority.
          </p>
          <p>
            <span className="">Country:</span> refers to Maharashtra, India
          </p>
          <p>
            <span className="">Company:</span> (referred to as either "the
            Company", "We", "Us" or "Our" in this Agreement) refers to PeerLink.
          </p>
          <p>
            <span className="">Device:</span> means any device that can access
            the Service such as a computer, a cellphone or a digital tablet.
          </p>
          <p>
            <span className="">Service:</span> refers to the Website.
          </p>
          <p>
            <span className="">Terms and Conditions:</span> (also referred as
            "Terms") mean these Terms and Conditions that form the entire
            agreement between You and the Company regarding the use of the
            Service. This Terms and Conditions agreement has been created with
            the help of the Terms and Conditions Generator.
          </p>
          <p>
            <span className="">Third-party Social Media Service:</span> means
            any services or content (including data, information, products or
            services) provided by a third-party that may be displayed, included
            or made available by the Service.
          </p>
          <p>
            <span className="">Website:</span> refers to PeerLink, accessible
            from{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary dark:text-primary-dark"
              href={process.env.NEXT_PUBLIC_BASE_URL}
            >
              {process.env.NEXT_PUBLIC_BASE_URL}
            </a>
          </p>
          <p>
            <span className="">You:</span> means the individual accessing or
            using the Service, or the company, or other legal entity on behalf
            of which such individual is accessing or using the Service, as
            applicable.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Acknowledgment</h2>
          <p>
            These are the Terms and Conditions governing the use of this Service
            and the agreement that operates between You and the Company. These
            Terms and Conditions set out the rights and obligations of all users
            regarding the use of the Service.
          </p>
          <p>
            Your access to and use of the Service is conditioned on Your
            acceptance of and compliance with these Terms and Conditions. These
            Terms and Conditions apply to all visitors, users and others who
            access or use the Service.
          </p>
          <p>
            By accessing or using the Service You agree to be bound by these
            Terms and Conditions. If You disagree with any part of these Terms
            and Conditions then You may not access the Service.
          </p>
          <p>
            You represent that you are over the age of 18. The Company does not
            permit those under 18 to use the Service.
          </p>
          <p>
            Your access to and use of the Service is also conditioned on Your
            acceptance of and compliance with the Privacy Policy of the Company.
            Our Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your personal information when You
            use the Application or the Website and tells You about Your privacy
            rights and how the law protects You. Please read Our Privacy Policy
            carefully before using Our Service.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">
            Links to Other Websites
          </h2>
          <p>
            Our Service may contain links to third-party web sites or services
            that are not owned or controlled by the Company.
          </p>
          <p>
            The Company has no control over, and assumes no responsibility for,
            the content, privacy policies, or practices of any third party web
            sites or services. You further acknowledge and agree that the
            Company shall not be responsible or liable, directly or indirectly,
            for any damage or loss caused or alleged to be caused by or in
            connection with the use of or reliance on any such content, goods or
            services available on or through any such web sites or services.
          </p>
          <p>
            We strongly advise You to read the terms and conditions and privacy
            policies of any third-party web sites or services that You visit.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Termination</h2>
          <p>
            We may terminate or suspend Your access immediately, without prior
            notice or liability, for any reason whatsoever, including without
            limitation if You breach these Terms and Conditions.
          </p>
          <p>
            Upon termination, Your right to use the Service will cease
            immediately.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">
            "AS IS" and "AS AVAILABLE" Disclaimer
          </h2>
          <p>
            The Service is provided to You "AS IS" and "AS AVAILABLE" and with
            all faults and defects without warranty of any kind. To the maximum
            extent permitted under applicable law, the Company, on its own
            behalf and on behalf of its Affiliates and its and their respective
            licensors and service providers, expressly disclaims all warranties,
            whether express, implied, statutory or otherwise, with respect to
            the Service, including all implied warranties of merchantability,
            fitness for a particular purpose, title and non-infringement, and
            warranties that may arise out of course of dealing, course of
            performance, usage or trade practice. Without limitation to the
            foregoing, the Company provides no warranty or undertaking, and
            makes no representation of any kind that the Service will meet Your
            requirements, achieve any intended results, be compatible or work
            with any other software, applications, systems or services, operate
            without interruption, meet any performance or reliability standards
            or be error free or that any errors or defects can or will be
            corrected.
          </p>
          <p>
            Without limiting the foregoing, neither the Company nor any of the
            company's provider makes any representation or warranty of any kind,
            express or implied: (i) as to the operation or availability of the
            Service, or the information, content, and materials or products
            included thereon; (ii) that the Service will be uninterrupted or
            error-free; (iii) as to the accuracy, reliability, or currency of
            any information or content provided through the Service; or (iv)
            that the Service, its servers, the content, or e-mails sent from or
            on behalf of the Company are free of viruses, scripts, trojan
            horses, worms, malware, timebombs or other harmful components.
          </p>
          <p>
            Some jurisdictions do not allow the exclusion of certain types of
            warranties or limitations on applicable statutory rights of a
            consumer, so some or all of the above exclusions and limitations may
            not apply to You. But in such a case the exclusions and limitations
            set forth in this section shall be applied to the greatest extent
            enforceable under applicable law.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Governing Law</h2>
          <p>
            The laws of the Country, excluding its conflicts of law rules, shall
            govern this Terms and Your use of the Service. Your use of the
            Application may also be subject to other local, state, national, or
            international laws.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Disputes Resolution</h2>
          <p>
            If You have any concern or dispute about the Service, You agree to
            first try to resolve the dispute informally by contacting the
            Company.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">
            For European Union (EU) Users
          </h2>
          <p>
            If You are a European Union consumer, you will benefit from any
            mandatory provisions of the law of the country in which You are
            resident.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">
            United States Legal Compliance
          </h2>
          <p>
            You represent and warrant that (i) You are not located in a country
            that is subject to the United States government embargo, or that has
            been designated by the United States government as a "terrorist
            supporting" country, and (ii) You are not listed on any United
            States government list of prohibited or restricted parties.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">
            Severability and Waiver
          </h2>
          <h4 className="">Severability</h4>
          <p>
            If any provision of these Terms is held to be unenforceable or
            invalid, such provision will be changed and interpreted to
            accomplish the objectives of such provision to the greatest extent
            possible under applicable law and the remaining provisions will
            continue in full force and effect.
          </p>
          <h4 className="">Waiver</h4>
          <p>
            Except as provided herein, the failure to exercise a right or to
            require performance of an obligation under these Terms shall not
            affect a party's ability to exercise such right or require such
            performance at any time thereafter nor shall the waiver of a breach
            constitute a waiver of any subsequent breach.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">
            Translation Interpretation
          </h2>
          <p>
            These Terms and Conditions may have been translated if We have made
            them available to You on our Service. You agree that the original
            English text shall prevail in the case of a dispute.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">
            Changes to These Terms and Conditions
          </h2>
          <p>
            We reserve the right, at Our sole discretion, to modify or replace
            these Terms at any time. If a revision is material We will make
            reasonable efforts to provide at least 30 days' notice prior to any
            new terms taking effect. What constitutes a material change will be
            determined at Our sole discretion.
          </p>
          <p>
            By continuing to access or use Our Service after those revisions
            become effective, You agree to be bound by the revised terms. If You
            do not agree to the new terms, in whole or in part, please stop
            using the website and the Service.
          </p>
        </div>

        <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Terms & Conditions, You can
          contact us:
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
              rel="noopener noreferrer"
              className="text-primary dark:text-primary-dark"
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

export default Terms;
