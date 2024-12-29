"use client";

import { ChevronRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const settingsSections = [
  {
    id: "general",
    title: "General",
    items: [
      { id: "about", label: "About", icon: "🔍" },
      { id: "software-update", label: "Software Update", icon: "🔄" },
      { id: "storage", label: "Storage", icon: "💾" },
    ]
  },
  {
    id: "appearance",
    title: "Appearance",
    items: [
      { id: "theme", label: "Theme", icon: "🎨" },
      { id: "background", label: "Background", icon: "🖼️" },
      { id: "text-size", label: "Text Size", icon: "📝" },
    ]
  },
  {
    id: "privacy",
    title: "Privacy & Security",
    items: [
      { id: "privacy", label: "Privacy", icon: "🔒" },
      { id: "security", label: "Security", icon: "🛡️" },
      { id: "passwords", label: "Passwords", icon: "🔑" },
    ]
  }
];

export function SettingsApp() {
  return (
    <ScrollArea className="h-full bg-gray-100">
      <div className="p-4 space-y-6">
        {settingsSections.map((section) => (
          <div key={section.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
            <h2 className="px-4 py-2 text-sm font-medium text-gray-500">
              {section.title}
            </h2>
            <div className="divide-y divide-gray-100">
              {section.items.map((item) => (
                <button
                  key={item.id}
                  className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-base text-gray-900">{item.label}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}