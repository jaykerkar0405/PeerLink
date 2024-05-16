// App's Internal Imports
import { toast as Toast } from "react-hot-toast";
import { Notification as notification_type } from "@/types";

const Notification = ({
  type,
  toast,
  username,
  profile_image,
}: notification_type) => {
  return (
    <div
      className={`${
        toast.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-white dark:bg-dark-2 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <img
              className="h-10 w-10 rounded-full"
              src={profile_image}
              alt="Profile Image"
            />
          </div>

          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {username}
            </p>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
              {type === "entry" ? "Joined the room." : "Left the room."}
            </p>
          </div>
        </div>
      </div>

      <div className="flex border-l border-gray-200 dark:border-gray-600">
        <button
          onClick={() => Toast.remove(toast.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-primary dark:text-primary-dark"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Notification;
