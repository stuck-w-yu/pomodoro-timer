# 🌅 Retro Sunset Pomodoro Timer

A minimalist, distraction-free focus timer with a warm retro aesthetic. Built with Next.js 15, Tailwind CSS v4, and React 19.

![Project Preview](https://placehold.co/600x400/2D1B2E/FFD93D?text=Retro+Sunset+Timer)

## ✨ Features

- **Retro Aesthetics**:
  - 🌇 **Sunset Theme**: Warm palette featuring Sunset Orange, Sunshine Yellow, and Hot Pink.
  - 📺 **CRT Effects**: Authentic scanlines, text glow, and screen flicker animations.
  - ⌨️ **Typography**: Uses `VT323` monospace font for that 80s terminal feel.

- **Timer Functionality**:
  - 🎯 **Focus Mode**: Default 25 minutes (Customizable).
  - ☕ **Short Break**: Default 5 minutes.
  - 🌺 **Long Break**: Default 15 minutes.
  - ⚙️ **Custom Settings**: Adjust durations for all modes via the Settings menu.

- **Productivity Tools**:
  - ✅ **Task List**: Integrated "TASKS.EXE" terminal to track your goals.
  - 🔔 **8-bit Alarm**: Retro beep sound effects using the Web Audio API (no external assets).

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Audio**: Native Web Audio API

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/retro-pomodoro.git
   cd retro-pomodoro
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000).

## 🎨 Color Palette

| Mode | Role | Color Code |
|------|------|------------|
| **Focus** | Primary Action | `#FF6B6B` (Orange) |
| **Short Break** | Secondary Action | `#FFD93D` (Yellow) |
| **Long Break** | Tertiary Action | `#FF9FF3` (Pink) |
| **Background** | Canvas | `#2D1B2E` (Deep Purple) |

## 📂 Project Structure

```
├── app/
│   ├── layout.tsx      # Fonts and global layout
│   ├── page.tsx        # Main application view
│   └── globals.css     # Global styles & CRT effects
├── components/
│   ├── TimerDisplay    # The big digital clock
│   ├── TimerControls   # Start/Pause/Reset buttons
│   ├── ModeSelector    # Focus/Break tabs
│   ├── TaskList        # Todo list component
│   └── SettingsModal   # Duration configuration
├── hooks/
│   └── useTimer.ts     # Core timer logic & state
└── lib/
    └── sound.ts        # Audio generator
```

## 📄 License

MIT License. Free to use and modify.
