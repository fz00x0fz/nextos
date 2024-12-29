"use client";

interface AppIconProps {
  app: {
    name: string;
    icon?: string;
  };
  onClick: () => void;
}

export function AppIcon({ app, onClick }: AppIconProps) {
  // Get the first letter of each word in the app name
  const initials = app.name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/10 backdrop-blur-sm 
        hover:bg-white/20 transition-all duration-300 group"
    >
      <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br 
        from-white/20 to-white/5 group-hover:from-white/30 group-hover:to-white/10 
        transition-all duration-300 group-hover:scale-105"
      >
        <span className="text-2xl font-bold text-white">
          {initials}
        </span>
      </div>
      <span className="text-sm text-white font-medium">
        {app.name}
      </span>
    </button>
  );
}