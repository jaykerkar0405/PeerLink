// App's Internal Imports
import Stream from "./stream";
import { Room as room_type } from "@/types";

// App's External Imports
import { toast } from "react-hot-toast";
import { FiShare2 } from "react-icons/fi";

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
        onClick={async (event) => {
          event.preventDefault();

          await navigator.clipboard.writeText(room_code);
          toast.success("Room Code Copied!");

          await navigator.share({
            text: `To join the meeting on PeerLink, click this link:\n${process.env.NEXT_PUBLIC_BASE_URL}/room/${room_code}\n\nOr open PeerLink and enter this code: ${room_code}`,
          });
        }}
        className="flex mb-8 items-center justify-center rounded-full bg-primary px-5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primary-hover"
      >
        <FiShare2 className="mr-2.5" /> Share Invite
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
