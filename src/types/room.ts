interface Room {
  room_code: string;
  user: {
    username: string | null | undefined;
    nickname: string | null | undefined;
    profile_image: string | null | undefined;
  };
}

interface Controls {
  toggle_mic: boolean;
  end_call: () => void;
  toggle_video: boolean;
  mute_video: () => void;
  mute_audio: () => void;
}

interface Stream {
  room_code: string;
  user: {
    username: string | null | undefined;
    nickname: string | null | undefined;
    profile_image: string | null | undefined;
  };
}

export type { Room, Stream, Controls };
