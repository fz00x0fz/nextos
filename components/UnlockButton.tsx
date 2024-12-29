"use client";

import { MouseEventHandler } from "react";
import { Lock, Unlock } from "lucide-react";

interface UnlockButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export function UnlockButton({ onClick }: UnlockButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-md 
        hover:bg-white/20 transition-all duration-300 hover:scale-105"
    >
      <div className="relative w-12 h-12">
        <Lock className="w-12 h-12 text-white absolute transition-opacity group-hover:opacity-0" />
        <Unlock className="w-12 h-12 text-white absolute opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <p className="text-white/90 text-lg font-medium">
        Click to unlock
      </p>
    </button>
  );
}