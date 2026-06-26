const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

ipcMain.on('close-app', () => {
  app.quit();
});

let mainWindow;

function createChatWindow() {
  mainWindow = new BrowserWindow({
    width: 420,
    height: 600,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    skipTaskbar: true,       // [STEALTH] Hides the app from the Windows taskbar
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // --- STEALTH & INVISIBILITY CONFIGURATIONS ---

  // 1. Core Invisibility: Prevents the window from being captured by screen sharing/recording tools.
  // This is the "magic" that makes you invisible during full-screen shares.
  mainWindow.setContentProtection(true);

  // 2. Process Masquerading: Changes how the app appears in Task Manager / Activity Monitor.
  // This makes it look like a harmless system utility rather than an AI tool.
  process.title = 'Terminal';
  mainWindow.setTitle('Terminal'); // Changes the window title if it ever gets exposed in the UI

  // 3. macOS Specific Stealth:
  if (process.platform === 'darwin') {
    // Hides the app icon from the macOS Dock
    app.dock.hide();

    // Keeps the window visible even when you enter Full-Screen mode for your presentation
    mainWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
  }

  // ---------------------------------------------

  // Load the frontend interface file
  mainWindow.loadFile('index.html');

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createChatWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createChatWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
