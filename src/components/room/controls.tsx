// App's Internal Imports
import Link from "next/link";
import { Controls as controls_type } from "@/types";

// App's External Imports
import { MdOutlineCallEnd } from "react-icons/md";
import { AiOutlineAudio, AiOutlineAudioMuted } from "react-icons/ai";
import { IoVideocamOutline, IoVideocamOffOutline } from "react-icons/io5";

const Controls = ({
  end_call,
  mute_audio,
  mute_video,
  toggle_mic,
  toggle_video,
}: controls_type) => {
  return (
    <div className="flex mt-12 justify-center items-center">
      <div className="flex gap-10">
        <button
          onClick={(event) => {
            event.preventDefault();
            mute_audio();
          }}
          className={`flex items-center justify-center rounded-full p-4 text-sm text-white duration-300 ease-in-out ${
            toggle_mic
              ? "bg-red-600 hover:bg-red-500"
              : "bg-primary hover:bg-primary-hover"
          }`}
        >
          {toggle_mic ? (
            <AiOutlineAudioMuted size={30} />
          ) : (
            <AiOutlineAudio size={30} />
          )}
        </button>

        <button
          onClick={(event) => {
            event.preventDefault();
            mute_video();
          }}
          className={`flex items-center justify-center rounded-full p-4 text-sm text-white duration-300 ease-in-out ${
            toggle_video
              ? "bg-red-600 hover:bg-red-500"
              : "bg-primary hover:bg-primary-hover"
          }`}
        >
          {toggle_video ? (
            <IoVideocamOffOutline size={30} />
          ) : (
            <IoVideocamOutline size={30} />
          )}
        </button>

        <button
          onClick={(event) => {
            event.preventDefault();
            end_call();
          }}
          className="flex items-center justify-center rounded-full bg-red-600 p-4 text-sm text-white duration-300 ease-in-out hover:bg-red-500"
        >
          <MdOutlineCallEnd size={30} />
        </button>
      </div>
    </div>
  );
};

export default Controls;
