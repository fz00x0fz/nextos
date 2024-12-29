"use client";

import { useState } from "react";
import LockScreen from "@/components/LockScreen";
import Desktop from "@/components/Desktop";

export default function Home() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <main className="w-full h-screen overflow-hidden">
      {!isUnlocked ? (
        <LockScreen onUnlock={() => setIsUnlocked(true)} />
      ) : (
        <Desktop onLock={() => setIsUnlocked(false)} />
      )}
    </main>
  );
}