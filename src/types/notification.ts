// App's External Imports
import { Toast } from "react-hot-toast";

interface Notification {
  toast: Toast;
  username: string;
  profile_image: string;
  type: "entry" | "exit";
}

export default Notification;
