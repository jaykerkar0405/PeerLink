// App's External Imports
import dynamic from "next/dynamic";

// App's Component Imports
import Home from "./home";
import Header from "./header";
import Footer from "./footer";
import Layout from "./layout";
import MotionDiv from "./utils/motion_div";
import Breadcrumbs from "./utils/breadcrumbs";
import Notification from "./utils/notification";
import CookieConsent from "./utils/cookie_consent";

const Room = dynamic(() => import("./room"), { ssr: false });
const ScrollToTop = dynamic(() => import("./utils/scroll_to_top"));
const Stream = dynamic(() => import("./room/stream"), { ssr: false });
const Controls = dynamic(() => import("./room/controls"), { ssr: false });

// App's Component Exports
export {
  Home,
  Room,
  Stream,
  Header,
  Footer,
  Layout,
  Controls,
  MotionDiv,
  Breadcrumbs,
  ScrollToTop,
  Notification,
  CookieConsent,
};
