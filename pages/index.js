import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Page from "../components/Page";
import Header from "../components/Header";
import ChatMode from "../components/ChatMode";
import WebMode from "../components/WebMode";

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
    <Page
      title="Boris Kirov"
      description="Design Engineer interested in systems, open source and design."
      image="https://www.boriskirov.me/main-meta-tag-image.png"
      bare
    >
      {!isMobile && <Header mode={mode} onToggle={toggleMode} />}
      <div className="index-body-container">
        {mode === "chat" ? <ChatMode /> : <WebMode />}
      </div>
    </Page>
  );
}
