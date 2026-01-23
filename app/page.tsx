"use client";

import React, { useState } from 'react';
import { useTimer } from '@/hooks/useTimer';
import { TimerDisplay } from '@/components/TimerDisplay';
import { TimerControls } from '@/components/TimerControls';
import { ModeSelector } from '@/components/ModeSelector';
import { TaskList } from '@/components/TaskList';
import { SettingsModal } from '@/components/SettingsModal';
import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';

export default function Home() {
  const { minutes, seconds, isActive, toggleTimer, resetTimer, mode, switchMode, modeConfig, updateDuration, durations } = useTimer();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-transparent text-white flex flex-col items-center justify-start md:justify-center p-6 pt-20 pb-36 relative font-retro selection:bg-retro-green selection:text-black">
      {/* CRT Scanline Overlay */}
      <div className="scanlines" />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.6)_100%)] z-40" />

      {/* Header with Settings */}
      <div className="absolute top-6 right-6 z-50">
        <button
          onClick={() => setIsSettingsOpen(true)}
          className="p-3 border-2 border-zinc-700 hover:border-retro-green bg-black hover:bg-zinc-900 transition-colors group"
        >
          <Settings size={20} className="text-zinc-500 group-hover:text-retro-green" />
        </button>
      </div>

      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <ModeSelector currentMode={mode} onSwitch={switchMode} />
        </motion.div>

        <TimerDisplay
          minutes={minutes}
          seconds={seconds}
          color={modeConfig.color}
        />

        <div className="mb-12 mt-8">
          <TimerControls
            isActive={isActive}
            onToggle={toggleTimer}
            onReset={resetTimer}
            color={modeConfig.color}
          />
        </div>

        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <TaskList />
        </motion.div>
      </div>

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        currentDurations={durations}
        onSave={updateDuration}
      />

      {/* Footer / Credits */}
      <div className="fixed bottom-6 text-zinc-700 text-sm font-mono tracking-widest z-50 flex flex-col items-center gap-1">
        <span>SYSTEM.READY...</span>
        <a
          href="https://wahyufirmansyah.my.id"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] opacity-50 text-white hover:opacity-100 hover:text-retro-green transition-all cursor-pointer"
        >
          © 2026 Wahyu Firmansyah
        </a>
      </div>
    </main>
  );
}
