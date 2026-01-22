import React from 'react';
import { motion } from 'framer-motion';

interface TimerDisplayProps {
    minutes: number;
    seconds: number;
    color: string;
}

export const TimerDisplay: React.FC<TimerDisplayProps> = ({ minutes, seconds, color }) => {
    return (
        <div className="relative flex items-center justify-center my-12 p-8 border-4 border-current rounded-lg retro-box bg-black/50 backdrop-blur-sm">
            <motion.div
                key={color}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`text-9xl md:text-[12rem] font-bold tracking-widest ${color} text-glow crt-flicker`}
            >
                {String(minutes).padStart(2, '0')}
                <span className="animate-pulse">:</span>
                {String(seconds).padStart(2, '0')}
            </motion.div>
        </div>
    );
};
