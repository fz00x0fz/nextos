"use client";

import { useState, useRef, useEffect } from "react";
import { X, Maximize2, Minimize2 } from "lucide-react";
import type { App } from "./Desktop";
import { SettingsApp } from "./Settings/SettingsApp";

interface AppWindowProps {
  app: App;
  onClose: () => void;
  initialPosition: { x: number; y: number };
}

export function AppWindow({ app, onClose, initialPosition }: AppWindowProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState(initialPosition);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsDragging(true);
      setStartPos({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || isMaximized) return;

    const newX = e.clientX - startPos.x;
    const newY = e.clientY - startPos.y;

    setPosition({
      x: Math.max(0, Math.min(window.innerWidth - 400, newX)),
      y: Math.max(0, Math.min(window.innerHeight - 300, newY))
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const renderContent = () => {
    if (app.component === "Settings") {
      return <SettingsApp />;
    }
    return (
      <iframe
        src={app.url}
        className="w-full h-[calc(100%-3rem)]"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      />
    );
  };

  return (
    <div
      ref={windowRef}
      className={`fixed rounded-lg overflow-hidden shadow-2xl bg-white transition-all duration-200
        ${isMaximized ? 'w-full h-full left-0 top-0' : 'w-[90vw] h-[80vh] max-w-4xl max-h-[600px]'}`}
      style={isMaximized ? undefined : {
        left: position.x,
        top: position.y
      }}
    >
      <div
        className="h-12 bg-gray-100 flex items-center justify-between px-4 cursor-move"
        onMouseDown={handleMouseDown}
      >
        <h2 className="font-medium">{app.name}</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleMaximize}
            className="p-1 hover:bg-gray-200 rounded-full transition-colors"
          >
            {isMaximized ? (
              <Minimize2 className="w-5 h-5" />
            ) : (
              <Maximize2 className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-200 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {renderContent()}
    </div>
  );
}