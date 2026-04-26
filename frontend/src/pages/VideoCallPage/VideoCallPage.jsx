import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

export default function VideoCallPage() {
  const { roomId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (!roomId) return;

    const domain = "meet.jit.si";

    // 🔍 role detect
    const params = new URLSearchParams(location.search);
    const role = params.get("role");

    const isDoctor = role === "doctor";

    const options = {
      roomName: roomId,
      width: "100%",
      height: "100%",
      parentNode: document.getElementById("jitsi-container"),

      userInfo: {
        displayName: isDoctor ? "Doctor 👨‍⚕️" : "Patient 👤",
      },

      configOverwrite: {
        prejoinPageEnabled: false,
        enableWelcomePage: false,

        // 🎤 mic/video control
        startWithAudioMuted: !isDoctor,
        startWithVideoMuted: !isDoctor,

        // 🔥 CRITICAL FIX
        enableLobby: false,
      },

      interfaceConfigOverwrite: {
        DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
      },
    };

    const api = new window.JitsiMeetExternalAPI(domain, options);

    // 🔥 FORCE DOCTOR AS HOST
    api.addEventListener("videoConferenceJoined", () => {
      console.log("Joined room:", roomId);

      if (isDoctor) {
        console.log("Doctor joined → disabling lobby");
        api.executeCommand("toggleLobby", false);
      }
    });

    // optional debug
    api.addEventListener("participantJoined", (p) => {
      console.log("Participant joined:", p);
    });

    return () => {
      api.dispose();
    };
  }, [roomId, location]);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <div id="jitsi-container" style={{ height: "100%", width: "100%" }} />
    </div>
  );
}