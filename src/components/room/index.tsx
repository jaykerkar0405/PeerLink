// App's Internal Imports
import Stream from "./stream";
import { Room as room_type } from "@/types";

// App's External Imports
import { toast } from "react-hot-toast";
import { LuClipboard } from "react-icons/lu";

const Room = ({
  room_code,
  user: {
    username: username,
    nickname: nickname,
    profile_image: profile_image,
  },
}: room_type) => {
  return (
    <main className="py-28 container">
      <button
        onClick={(event) => {
          event.preventDefault();
          toast.success("Room Code Copied!");
          navigator.clipboard.writeText(room_code);
        }}
        className="flex mb-8 items-center justify-center rounded-full bg-primary px-5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primary-hover"
      >
        <LuClipboard className="mr-2.5" /> Copy Room Code
      </button>

      <Stream
        room_code={room_code}
        user={{
          username: username,
          nickname: nickname,
          profile_image: profile_image,
        }}
      />
    </main>
  );
};

export default Room;
