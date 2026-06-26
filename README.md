# Stealth AI Desktop Assistant

A discreet, transparent, and always-on-top desktop application built with Electron. This app provides a powerful AI chat interface and a Notion-style markdown notes editor, all while remaining completely invisible to screen sharing tools and masquerading as a background system utility.

## ✨ Key Features

### 👻 Stealth & Invisibility
- **Screen Share Protection**: The application utilizes Electron's `setContentProtection` to remain completely invisible during full-screen shares or recordings (e.g., Zoom, Teams, Google Meet).
- **Process Masquerading**: Appears as a standard system process (e.g., "Terminal") in the Activity Monitor or Task Manager to avoid drawing attention.
- **Hidden from Dock/Taskbar**: The app runs in the background and is completely hidden from the macOS Dock and Windows Taskbar.
- **Always-on-Top & Transparent**: The borderless window floats above other applications with customizable transparency, making it easy to reference without blocking your workflow.

### 💬 AI Chat Interface
- Quick and responsive chat interface.
- Beautiful, modern chat bubbles with markdown and code block support.

### 📝 Notion-Style Notes Editor
- **Distraction-Free Environment**: A completely borderless, seamless writing experience.
- **Slash Commands**: Type `/` anywhere in your text to bring up a quick-insert menu for Text, Headers, Code Blocks, and Dropdowns.
- **Click-to-Add**: Click anywhere below your text to seamlessly start a new line.
- **Drag-and-Drop Handles**: Hover over blocks to reveal subtle `⋮⋮` handles for quick deletion or management.

---

## 🚀 Installation Guide

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm (comes with Node.js)

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
cd YOUR_REPOSITORY_NAME
```

### 2. Install Dependencies
Install all required npm packages:
```bash
npm install
```

### 3. Environment Variables (.env)
Since API keys should never be committed to GitHub, create a `.env` file in the root directory of the project:
```bash
touch .env
```
Add your necessary API keys to the `.env` file (e.g., for Gemini, OpenAI, or your custom backend):
```env
API_KEY=your_api_key_here
```

---

## 💻 Usage Instructions

### Running the App (Stealth Mode)
To launch the application completely detached and in the background (recommended for macOS), run:
```bash
npm run start:bg
```

Alternatively, for standard testing or development, you can use:
```bash
npm start
```

*Note: Since the app is designed for stealth, it will not appear in your taskbar or dock. It will launch directly on your screen as a floating window.*

### Controlling the App
- **Switching Tabs**: Use the toggle at the top to seamlessly switch between the **Chat** and **Notes** interfaces.
- **Adjusting Transparency**: Use the slider in the top right corner to make the app more or less transparent.
- **Notes Commands**: Inside the Notes tab, simply type `/` to bring up the block menu. 
- **Closing**: Click the subtle `X` button in the top right corner to kill the application.

---

## 🛠️ Built With
- [Electron.js](https://www.electronjs.org/)
- HTML5 / CSS3 (Glassmorphism UI)
- Vanilla JavaScript

## ⚠️ Disclaimer
This application is intended for personal productivity and educational purposes. Please ensure you comply with your organization's policies regarding screen sharing, monitoring, and software usage.

---
*Feel free to star ⭐ the repository if you found this project helpful!*
