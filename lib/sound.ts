export const playAlarm = () => {
    // Only run in browser
    if (typeof window === 'undefined') return;

    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;

    const ctx = new AudioContext();

    const playBeep = (startTime: number, duration: number, frequency: number) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'square'; // Retro 8-bit sound
        osc.frequency.value = frequency;

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);

        // Envelope to avoid clicking
        gain.gain.setValueAtTime(0.1, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

        osc.stop(startTime + duration);
    };

    const now = ctx.currentTime;

    // Pattern: Beep-Beep-Beep-Beep (High pitch retro style)
    playBeep(now, 0.1, 880);       // A5
    playBeep(now + 0.15, 0.1, 880);
    playBeep(now + 0.3, 0.1, 880);
    playBeep(now + 0.45, 0.4, 660); // E5 (Longer ending)
};
