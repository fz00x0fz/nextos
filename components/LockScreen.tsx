"use client";

import { Clock } from "@/components/Clock";
import { UnlockButton } from "@/components/UnlockButton";

interface LockScreenProps {
  onUnlock: () => void;
}

export default function LockScreen({ onUnlock }: LockScreenProps) {
  return (
    <div 
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1579546929518-9e396f3cc809")'
      }}
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm">
        <div className="flex flex-col items-center justify-between h-full p-8">
          <div className="mt-16">
            <Clock />
          </div>
          
          <div className="mb-8">
            <UnlockButton onClick={onUnlock} />
          </div>
        </div>
      </div>
    </div>
  );
}