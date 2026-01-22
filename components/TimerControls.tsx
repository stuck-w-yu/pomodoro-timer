import React from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TimerControlsProps {
    isActive: boolean;
    onToggle: () => void;
    onReset: () => void;
    color: string;
}

export const TimerControls: React.FC<TimerControlsProps> = ({ isActive, onToggle, onReset, color }) => {
    return (
        <div className="flex items-center gap-6">
            <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={onToggle}
                className={cn(
                    "w-48 h-16 border-4 flex items-center justify-center gap-4 text-xl font-bold uppercase retro-box transition-colors",
                    "bg-transparent hover:bg-white/5",
                    color.replace('text-', 'border-').replace('text-', 'text-')
                )}
            >
                {isActive ? (
                    <>
                        <Pause className="w-6 h-6" fill="currentColor" /> PAUSE
                    </>
                ) : (
                    <>
                        <Play className="w-6 h-6" fill="currentColor" /> START
                    </>
                )}
            </motion.button>

            <button
                onClick={onReset}
                className="h-16 w-16 border-4 border-zinc-500 text-zinc-500 flex items-center justify-center retro-box hover:border-white hover:text-white transition-colors"
            >
                <RotateCcw size={24} />
            </button>
        </div>
    );
};
