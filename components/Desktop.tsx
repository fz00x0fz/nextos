"use client";

import { useState } from "react";
import { AppIcon } from "@/components/AppIcon";
import { AppWindow } from "@/components/AppWindow";
import { LockButton } from "@/components/LockButton";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { presetApps } from "@/lib/preset-apps";

export interface App {
  id: string;
  name: string;
  url: string;
}

interface DesktopProps {
  onLock: () => void;
}

export default function Desktop({ onLock }: DesktopProps) {
  const [apps, setApps] = useState<App[]>(presetApps);
  const [activeApps, setActiveApps] = useState<App[]>([]);

  const addApp = () => {
    const name = prompt("Enter app name:");
    const url = prompt("Enter app URL:");
    
    if (name && url) {
      setApps([...apps, {
        id: Date.now().toString(),
        name,
        url
      }]);
    }
  };

  const openApp = (app: App) => {
    if (!activeApps.find(a => a.id === app.id)) {
      setActiveApps([...activeApps, app]);
    }
  };

  const closeApp = (appId: string) => {
    setActiveApps(activeApps.filter(app => app.id !== appId));
  };

  return (
    <div 
      className="relative w-full h-screen bg-cover bg-center p-8 overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1579546929518-9e396f3cc809")'
      }}
    >
      <LockButton onLock={onLock} />
      
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        {apps.map(app => (
          <AppIcon
            key={app.id}
            app={app}
            onClick={() => openApp(app)}
          />
        ))}
        
        <Button
          variant="ghost"
          className="aspect-square p-4 rounded-2xl bg-white/10 backdrop-blur-sm 
            hover:bg-white/20 transition-all duration-300"
          onClick={addApp}
        >
          <Plus className="w-8 h-8 text-white" />
          <span className="sr-only">Add App</span>
        </Button>
      </div>

      {activeApps.map((app, index) => (
        <AppWindow
          key={app.id}
          app={app}
          onClose={() => closeApp(app.id)}
          initialPosition={{
            x: 50 + (index * 30),
            y: 50 + (index * 30)
          }}
        />
      ))}
    </div>
  );
}