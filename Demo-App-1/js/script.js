// Theme toggle logic
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});

// Clears the editor for new typing
document.getElementById('newBtn').addEventListener('click', () => {
    document.getElementById('editor').value = '';
});

// Electron APIs
const { ipcRenderer } = require('electron');

// Open file
document.getElementById('openBtn').addEventListener('click', async () => {
    // Ask main process to open file dialog
    const content = await ipcRenderer.invoke('open-file');
    if (content !== undefined) {
    document.getElementById('editor').value = content;
    }
});

// Save file
document.getElementById('saveBtn').addEventListener('click', async () => {
    const text = document.getElementById('editor').value;
    await ipcRenderer.invoke('save-file', text);
});
