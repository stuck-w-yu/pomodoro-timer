import { useState, useEffect, useCallback } from 'react';
import { playAlarm } from '@/lib/sound';

export type TimerMode = 'focus' | 'shortBreak' | 'longBreak';

const DEFAULT_DURATIONS = {
    focus: 25,
    shortBreak: 5,
    longBreak: 15,
};

const MODE_CONFIG = {
    focus: { label: 'Focus', color: 'text-retro-focus' },
    shortBreak: { label: 'Short Break', color: 'text-retro-short' },
    longBreak: { label: 'Long Break', color: 'text-retro-long' },
};

export const useTimer = () => {
    const [mode, setMode] = useState<TimerMode>('focus');
    const [durations, setDurations] = useState(DEFAULT_DURATIONS);
    const [timeLeft, setTimeLeft] = useState(DEFAULT_DURATIONS.focus * 60);
    const [isActive, setIsActive] = useState(false);

    const toggleTimer = useCallback(() => setIsActive((prev) => !prev), []);

    const resetTimer = useCallback(() => {
        setIsActive(false);
        setTimeLeft(durations[mode] * 60);
    }, [mode, durations]);

    const switchMode = useCallback((newMode: TimerMode) => {
        setMode(newMode);
        setIsActive(false);
        setTimeLeft(durations[newMode] * 60);
    }, [durations]);

    const updateDuration = useCallback((newDurations: typeof DEFAULT_DURATIONS) => {
        setDurations(newDurations);
        // If timer is not running, update current time immediately if it matches current mode
        if (!isActive) {
            setTimeLeft(newDurations[mode] * 60);
        }
    }, [isActive, mode]);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
            playAlarm(); // Play the retro beep
        }

        return () => clearInterval(interval);
    }, [isActive, timeLeft]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    // Config object for UI
    const modeConfig = {
        ...MODE_CONFIG[mode],
        minutes: durations[mode]
    };

    return {
        minutes,
        seconds,
        isActive,
        mode,
        toggleTimer,
        resetTimer,
        switchMode,
        updateDuration,
        durations,
        modeConfig,
    };
};
