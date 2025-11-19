// Main process to manage application lifecycle and create browser windows
const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const fs = require('fs'); // Node.js file system module




// Function to create the main application window
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // Allow Node.js in renderer
      contextIsolation: false // Required for IPC in renderer
    }
  });
  win.loadFile('index.html');
}




// Initialize the app when ready and create the window when ready
app.whenReady().then(createWindow);




// IPC handler: Open file dialog and read file
ipcMain.handle('open-file', async () => {
  // Show open dialog
  const { canceled, filePaths } = await dialog.showOpenDialog({
    properties: ['openFile'],
    filters: [{ name: 'Text Files', extensions: ['txt'] }]
  });
  if (canceled || filePaths.length === 0) return;
  // Read file content and return
  return fs.readFileSync(filePaths[0], 'utf8');
});




// IPC handler: Save file dialog and write file
ipcMain.handle('save-file', async (event, content) => {
  // Show save dialog
  const { canceled, filePath } = await dialog.showSaveDialog({
    filters: [{ name: 'Text Files', extensions: ['txt'] }]
  });
  if (canceled || !filePath) return;
  // Write content to file
  fs.writeFileSync(filePath, content, 'utf8');
});

