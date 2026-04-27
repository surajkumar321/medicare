import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

export default function VideoCallPage() {
  const { roomId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (!roomId) return;

    // ❌ Agar Jitsi script load nahi hua
    if (!window.JitsiMeetExternalAPI) {
      alert("Jitsi not loaded");
      return;
    }

    const domain = "meet.jit.si";

    const params = new URLSearchParams(location.search);
    const role = params.get("role");
    const isDoctor = role === "doctor";

    const container = document.getElementById("jitsi-container");

    const api = new window.JitsiMeetExternalAPI(domain, {
      roomName: roomId,
      parentNode: container,
      width: "100%",
      height: "100%",

      userInfo: {
        displayName: isDoctor ? "Doctor 👨‍⚕️" : "Patient 👤",
      },

      configOverwrite: {
        prejoinPageEnabled: false,
        enableWelcomePage: false,

        startWithAudioMuted: false,
        startWithVideoMuted: false,

        enableLobby: false,
        enableClosePage: false,

        disableModeratorIndicator: false,
      },

      interfaceConfigOverwrite: {
        DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
      },
    });

    // 🔥 MOST IMPORTANT FIX
    // Jab doctor moderator banega tab lobby OFF karega
    api.addEventListener("participantRoleChanged", (event) => {
      if (event.role === "moderator") {
        console.log("Doctor is moderator");

        api.executeCommand("toggleLobby", false);
      }
    });

    // 🔥 Optional (mic/camera ON after join)
    api.addEventListener("videoConferenceJoined", () => {
      console.log("Joined:", roomId);

      api.executeCommand("toggleAudio");
      api.executeCommand("toggleVideo");
    });

    return () => {
      api.dispose();
    };
  }, [roomId, location]);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <div
        id="jitsi-container"
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
}