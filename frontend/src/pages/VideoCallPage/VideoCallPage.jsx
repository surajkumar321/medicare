import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

export default function VideoCallPage() {
  const { roomId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (!roomId) return;

    const domain = "meet.jit.si";

    // ✅ role detect
    const params = new URLSearchParams(location.search);
    const role = params.get("role");

    const isDoctor = role === "doctor";

    const options = {
      roomName: roomId,
      width: "100%",
      height: "100%",
      parentNode: document.getElementById("jitsi-container"),

      userInfo: {
        displayName: isDoctor ? "Doctor" : "Patient",
      },

      configOverwrite: {
        prejoinPageEnabled: false,
        enableWelcomePage: false,
        startWithAudioMuted: !isDoctor,
        startWithVideoMuted: !isDoctor,
      },

      interfaceConfigOverwrite: {
        DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
      },
    };

    const api = new window.JitsiMeetExternalAPI(domain, options);

    return () => api.dispose();
  }, [roomId, location]);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <div id="jitsi-container" style={{ height: "100%", width: "100%" }} />
    </div>
  );
}