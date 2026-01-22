import React from 'react';
import { TimerMode } from '@/hooks/useTimer';
import { cn } from '@/lib/utils';

interface ModeSelectorProps {
    currentMode: TimerMode;
    onSwitch: (mode: TimerMode) => void;
}

export const ModeSelector: React.FC<ModeSelectorProps> = ({ currentMode, onSwitch }) => {
    return (
        <div className="flex gap-4 p-2">
            <button
                onClick={() => onSwitch('focus')}
                className={cn(
                    "flex items-center gap-2 px-6 py-2 border-2 text-sm font-bold uppercase transition-all retro-box",
                    currentMode === 'focus'
                        ? "border-retro-focus text-retro-focus bg-retro-focus/10 text-glow"
                        : "border-zinc-700 text-zinc-600 hover:border-zinc-500 hover:text-zinc-400"
                )}
            >
                [ FOCUS ]
            </button>
            <button
                onClick={() => onSwitch('shortBreak')}
                className={cn(
                    "flex items-center gap-2 px-6 py-2 border-2 text-sm font-bold uppercase transition-all retro-box",
                    currentMode === 'shortBreak'
                        ? "border-retro-short text-retro-short bg-retro-short/10 text-glow"
                        : "border-zinc-700 text-zinc-600 hover:border-zinc-500 hover:text-zinc-400"
                )}
            >
                [ SHORT ]
            </button>
            <button
                onClick={() => onSwitch('longBreak')}
                className={cn(
                    "flex items-center gap-2 px-6 py-2 border-2 text-sm font-bold uppercase transition-all retro-box",
                    currentMode === 'longBreak'
                        ? "border-retro-long text-retro-long bg-retro-long/10 text-glow"
                        : "border-zinc-700 text-zinc-600 hover:border-zinc-500 hover:text-zinc-400"
                )}
            >
                [ LONG ]
            </button>
        </div>
    );
};
