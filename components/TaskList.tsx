import React, { useState } from 'react';
import { Plus, Check, Trash2, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface Task {
    id: string;
    text: string;
    completed: boolean;
}

export const TaskList = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [inputValue, setInputValue] = useState("");

    const addTask = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        setTasks([...tasks, { id: Date.now().toString(), text: inputValue, completed: false }]);
        setInputValue("");
    };

    const toggleTask = (id: string) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    const removeTask = (id: string) => {
        setTasks(tasks.filter(t => t.id !== id));
    };

    return (
        <div className="w-full max-w-md mt-16 border-2 border-zinc-700 p-4 bg-black">
            <div className="flex items-center gap-2 mb-4 border-b-2 border-zinc-800 pb-2">
                <Terminal size={16} className="text-zinc-500" />
                <h3 className="text-zinc-500 uppercase text-sm font-bold tracking-widest">TASKS.EXE</h3>
            </div>

            <form onSubmit={addTask} className="relative mb-6">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-retro-green">{'>'}</span>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Input command..."
                    className="w-full bg-black border-2 border-zinc-800 p-3 pl-8 focus:outline-none focus:border-retro-green text-retro-green placeholder:text-zinc-700 font-mono uppercase"
                />
            </form>

            <div className="space-y-2">
                <AnimatePresence>
                    {tasks.map(task => (
                        <motion.div
                            key={task.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, height: 0 }}
                            className={cn(
                                "group flex items-center gap-3 p-2 bg-zinc-900/50 border border-transparent hover:border-zinc-700 cursor-pointer",
                                task.completed && "opacity-50"
                            )}
                            onClick={() => toggleTask(task.id)}
                        >
                            <div className={cn(
                                "w-4 h-4 border border-zinc-500 flex items-center justify-center",
                                task.completed && "bg-retro-green border-retro-green"
                            )}>
                                {task.completed && <Check size={12} className="text-black" strokeWidth={4} />}
                            </div>
                            <span className={cn("flex-1 uppercase font-mono text-sm", task.completed ? "text-zinc-600 line-through" : "text-zinc-300")}>
                                {task.text}
                            </span>
                            <button
                                onClick={(e) => { e.stopPropagation(); removeTask(task.id); }}
                                className="opacity-0 group-hover:opacity-100 text-zinc-500 hover:text-red-500"
                            >
                                <Trash2 size={14} />
                            </button>
                        </motion.div>
                    ))}
                </AnimatePresence>
                {tasks.length === 0 && (
                    <div className="text-zinc-800 text-xs py-4 font-mono">_ No active processes running.</div>
                )}
            </div>
        </div>
    );
};
