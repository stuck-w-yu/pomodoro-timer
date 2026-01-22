import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Save } from 'lucide-react';

interface Durations {
    focus: number;
    shortBreak: number;
    longBreak: number;
}

interface SettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
    currentDurations: Durations;
    onSave: (newDurations: Durations) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
    isOpen,
    onClose,
    currentDurations,
    onSave
}) => {
    const [values, setValues] = useState(currentDurations);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(values);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-sm bg-[#1a0b12] border-2 border-zinc-500 p-1 shadow-[8px_8px_0px_rgba(0,0,0,0.5)]"
                    >
                        {/* Window Header */}
                        <div className="bg-zinc-800 text-zinc-300 px-3 py-1 flex items-center justify-between mb-4 border-b border-zinc-700">
                            <span className="font-mono uppercase text-sm tracking-wider">Settings.ini</span>
                            <button
                                onClick={onClose}
                                className="hover:bg-red-500 hover:text-white px-1"
                            >
                                <X size={14} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-4 space-y-6">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <label className="text-retro-focus uppercase text-sm text-glow-sm">Focus Time</label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="number"
                                            min="1" max="99"
                                            value={values.focus}
                                            onChange={e => setValues({ ...values, focus: Number(e.target.value) })}
                                            className="w-16 bg-black border border-zinc-700 p-1 text-right text-retro-focus font-mono focus:border-retro-focus focus:outline-none"
                                        />
                                        <span className="text-zinc-500 text-xs">MIN</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <label className="text-retro-short uppercase text-sm text-glow-sm">Short Break</label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="number"
                                            min="1" max="60"
                                            value={values.shortBreak}
                                            onChange={e => setValues({ ...values, shortBreak: Number(e.target.value) })}
                                            className="w-16 bg-black border border-zinc-700 p-1 text-right text-retro-short font-mono focus:border-retro-short focus:outline-none"
                                        />
                                        <span className="text-zinc-500 text-xs">MIN</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <label className="text-retro-long uppercase text-sm text-glow-sm">Long Break</label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="number"
                                            min="1" max="99"
                                            value={values.longBreak}
                                            onChange={e => setValues({ ...values, longBreak: Number(e.target.value) })}
                                            className="w-16 bg-black border border-zinc-700 p-1 text-right text-retro-long font-mono focus:border-retro-long focus:outline-none"
                                        />
                                        <span className="text-zinc-500 text-xs">MIN</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 bg-zinc-800 text-zinc-300 font-bold py-3 border-2 border-zinc-600 hover:bg-zinc-700 hover:border-zinc-400 hover:text-white active:translate-y-1 transition-all uppercase tracking-widest"
                            >
                                <Save size={16} /> Save Changes
                            </button>
                        </form>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
