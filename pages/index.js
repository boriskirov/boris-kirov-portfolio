import Motion from "../components/motion";
import Metadata from "../components/metadata";

import { useState, useEffect } from "react";
import Header from "../components/header";
import MainWrapper from "../components/mainWrapper";

import ChatMode from "../components/Chatmode.js";
import WebMode from "../components/WebMode.js";
import { useRouter } from "next/router";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [mode, setMode] = useState("portfolio");
  const router = useRouter();

  // restore mode from URL on load
  useEffect(() => {
    if (router.query.mode === "chat") {
      setMode("chat");
    }
  }, [router.query.mode]);

  // existing mobile check
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  function toggleMode() {
    const next = mode === "portfolio" ? "chat" : "portfolio";
    setMode(next);
    router.push(next === "chat" ? "/?mode=chat" : "/", undefined, {
      shallow: true,
    });
  }

  return (
    <Motion>
      <MainWrapper>
        <Metadata
          title="Boris Kirov"
          description="Design Engineer interested in systems, open source and design."
          image="https://www.boriskirov.me/main-meta-tag-image.png"
          name="Boris Kirov"
        />

        {!isMobile && <Header mode={mode} onToggle={toggleMode} />}
        <div
          className="index-body-container"
          style={{ width: mode === "portfolio" ? "672px" : "1080px" }}
        >
          {mode === "chat" ? <ChatMode /> : <WebMode />}
        </div>
      </MainWrapper>
    </Motion>
  );
}
