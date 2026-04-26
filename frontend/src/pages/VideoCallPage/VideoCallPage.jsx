import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function VideoCallPage() {
  const { roomId } = useParams();

  useEffect(() => {
    if (!roomId) return;

    const domain = "meet.jit.si";

    const options = {
      roomName: roomId,
      width: "100%",
      height: "100%",
      parentNode: document.getElementById("jitsi-container"),

      userInfo: {
        displayName: "User",
      },

      // 🔥 MAIN FIX
      configOverwrite: {
        prejoinPageEnabled: false,
        enableWelcomePage: false,
        startWithAudioMuted: true,
        startWithVideoMuted: true,
      },

      // 🔥 IMPORTANT (lobby disable)
      interfaceConfigOverwrite: {
        DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
      },
    };

    const api = new window.JitsiMeetExternalAPI(domain, options);

    return () => api.dispose();
  }, [roomId]);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <div id="jitsi-container" style={{ height: "100%", width: "100%" }} />
    </div>
  );
}