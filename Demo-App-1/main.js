// Main process to manage application lifecycle and create browser windows
const { app, BrowserWindow } = require('electron');


// Function to create the main application window
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadFile('index.html');
}

// Initialize the app when ready and create the window when ready
app.whenReady().then(createWindow);
