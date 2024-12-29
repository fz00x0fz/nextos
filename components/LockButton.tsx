"use client";

import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LockButtonProps {
  onLock: () => void;
}

export function LockButton({ onLock }: LockButtonProps) {
  return (
    <Button
      onClick={onLock}
      variant="ghost"
      className="fixed top-4 right-4 p-3 rounded-full bg-white/10 backdrop-blur-sm 
        hover:bg-white/20 transition-all duration-300 hover:scale-105"
    >
      <Lock className="w-6 h-6 text-white" />
      <span className="sr-only">Lock Screen</span>
    </Button>
  );
}