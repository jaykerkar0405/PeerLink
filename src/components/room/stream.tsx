"use client";

// React's Hook Imports
import { useState, useEffect } from "react";

// App's Internal Imports
import Controls from "./controls";
import { Stream as stream_type } from "@/types";
import { is_email, fetch_profile_image } from "@/modules";

// App's External Imports
import {
  useJoin,
  usePublish,
  RemoteUser,
  useRTCClient,
  useRemoteUsers,
  LocalVideoTrack,
  useLocalCameraTrack,
  useRemoteAudioTracks,
  useLocalMicrophoneTrack,
} from "agora-rtc-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AiOutlineAudioMuted } from "react-icons/ai";

const Stream = ({
  room_code,
  user: {
    username: username,
    nickname: nickname,
    profile_image: profile_image,
  },
}: stream_type) => {
  const router = useRouter();
  const client = useRTCClient();

  const remote_users = useRemoteUsers();

  if (remote_users.length > 1) {
    router.push("/room?error=occupied");
  }

  const [is_mounted, set_is_mounted] = useState<boolean>(false);
  const [toggle_mic, set_toggle_mic] = useState<boolean>(false);
  const [toggle_video, set_toggle_video] = useState<boolean>(false);

  const { isLoading: camera_loading, localCameraTrack } = useLocalCameraTrack();
  const { isLoading: mic_loading, localMicrophoneTrack } =
    useLocalMicrophoneTrack();

  const device_loading = mic_loading || camera_loading;
  const { audioTracks } = useRemoteAudioTracks(remote_users);

  // Publish the local media tracks to remote user
  usePublish([localCameraTrack, localMicrophoneTrack]);

  // Join the prescribed channel using room_code
  useJoin({
    token: null,
    channel: room_code,
    appid: String(process.env.NEXT_PUBLIC_AGORA_APP_ID),
  });

  // Play the local audio tracks
  audioTracks.map((track) => track.play());

  const mute_video = () => {
    localCameraTrack?.setEnabled(toggle_video).then(() => {
      set_toggle_video((previous: boolean) => !previous);
    });
  };

  const mute_audio = () => {
    localMicrophoneTrack
      ?.setEnabled(toggle_mic)
      .then(() => set_toggle_mic((previous: boolean) => !previous));
  };

  const end_call = () => {
    client.unpublish().then(() => {
      localCameraTrack?.close();
      localMicrophoneTrack?.close();

      client.leave().then(() => {
        router.push("/");
      });
    });
  };

  useEffect(() => {
    set_is_mounted(true);

    return () => {
      set_is_mounted(false);
    };
  }, []);

  if (device_loading) {
    return (
      <div className="flex w-full h-[52vh] justify-center items-center lg:h-[50vh]">
        <div className="loader" />
      </div>
    );
  }

  return (
    <>
      {is_mounted ? (
        <>
          <div className="flex bg-white dark:bg-[#121212] flex-col gap-8 lg:flex-row">
            <div className="w-full h-[52vh] lg:h-[50vh]">
              <div className="grid flex-1 gap-8 grid-cols-1 lg:grid-cols-2 h-full">
                {remote_users.length <= 1 &&
                  remote_users.map((user) => (
                    <RemoteUser
                      user={user}
                      className="w-full h-auto rounded-xl lg:rounded-2xl"
                    />
                  ))}

                <div className="relative">
                  <span className="z-20 absolute bottom-3 left-3 flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm text-white duration-300 ease-in-out hover:bg-primary-hover">
                    You
                  </span>

                  {toggle_mic && (
                    <span className="z-20 absolute bottom-3 right-3 flex items-center justify-center rounded-full bg-primary p-2 text-sm text-white duration-300 ease-in-out hover:bg-primary-hover">
                      <AiOutlineAudioMuted />
                    </span>
                  )}

                  {toggle_video && (
                    <div className="z-10 w-full h-full absolute rounded-xl lg:rounded-2xl bg-[#F4F7FF] dark:bg-dark-2 flex justify-center items-center transition-all duration-300 ease-in-out">
                      {username && profile_image && (
                        <Image
                          width={100}
                          height={100}
                          quality={100}
                          loading="lazy"
                          alt="Profile Image"
                          src={
                            is_email(username)
                              ? fetch_profile_image(username)
                              : profile_image
                          }
                          className="w-[4.5rem] h-[4.5rem] rounded-full"
                        />
                      )}
                    </div>
                  )}

                  <LocalVideoTrack
                    play={true}
                    track={localCameraTrack}
                    className="overflow-hidden bg-black w-full h-auto rounded-xl lg:rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <Controls
            end_call={end_call}
            mute_audio={mute_audio}
            mute_video={mute_video}
            toggle_mic={toggle_mic}
            toggle_video={toggle_video}
          />
        </>
      ) : (
        <div className="flex w-full h-screen justify-center items-center">
          <div className="loader" />
        </div>
      )}
    </>
  );
};

export default Stream;
