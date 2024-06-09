"use client";

// App's Internal Imports
import { Room } from "@/components";
import { validate_room_code } from "@/modules";

// App's External Imports
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import AgoraRTC, { AgoraRTCProvider, useRTCClient } from "agora-rtc-react";

const RoomCode = ({
  params: { room_code },
}: {
  params: { room_code: string };
}) => {
  const router = useRouter();
  const { user, isLoading } = useUser();

  const client = useRTCClient(
    AgoraRTC.createClient({ mode: "rtc", codec: "vp8" })
  );

  if (!isLoading && !user) {
    router.push("/api/auth/login");
  }

  if (!validate_room_code(room_code)) {
    router.push("/room?error=invalid_room_code");
  }

  return (
    <AgoraRTCProvider client={client}>
      <Room
        room_code={room_code}
        user={{
          username: user?.name,
          nickname: user?.nickname,
          profile_image: user?.picture,
        }}
      />
    </AgoraRTCProvider>
  );
};

export default RoomCode;
