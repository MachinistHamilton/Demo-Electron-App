Electron JS tutorial
1.	Initialize your project
Run npm init -y in your project folder to create a package.json.
npm init -y 



2.	Install Electron
Run npm install electron --save-dev to add Electron as a dev dependency.
npm install electron --save-dev





3.	Create main files
Create a main.js file (main process).
Create an index.html file (renderer process).





# Electron JS Tutorial

## 1. Initialize your project
Run `npm init -y` in your project folder to create a package.json.
<br />
`npm init -y`

<br />

## 2. Install Electron
Run `npm install electron --save-dev` to add Electron as a dev dependency.<br />
```sh
npm install electron --save-dev <br />
```
or
```sh
npm i electron -D
```

## 3. Create main files
Create a `main.js` file (main process).
Create an `index.html` file (renderer process).

## 4. Update package.json
Add start electron to script in the `package.json` file:
```json
{
  "main": "main.js",
  "devDependencies": {
    "electron": "^39.2.2"
  },
  "scripts": {
    "start": "electron ."
  }
}
```

## 5. Write the Electron code to launch a window in main.js
In the `main.js` file write the following code to launch a window.
Every Electron App only has 1 main process running to manage the life cycle.
```js
// Main process to manage application lifecycle and create browser windows
const { app, BrowserWindow } = require('electron');

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

app.whenReady().then(createWindow);
```

## 6. Create Simple index.html code
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Demo Electron App</title>
</head>
<body>
  <h1>Hello Electron ⚡!</h1>
</body>
</html>
```

## 7. Start App
```sh
npm start
```

## 8. Create HTML Layout
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Electron Notepad ⚡</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div class="toolbar">
    <button id="newBtn">New</button>
    <button id="openBtn">Open</button>
    <button id="saveBtn">Save</button>
    <button id="themeBtn">Toggle Theme</button>
  </div>
  <textarea id="editor" placeholder="Start typing..."></textarea>
  <script src="js/script.js"></script>
</body>
</html>
```

## 9. Create Folders for css and js with index.html

## 10. Add CSS in css/style.css
```css
body {
    font-family: Arial, sans-serif;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    background: #222;
    color: #eee;
    overflow: hidden;
}
.light-theme {
    background: #fff;
    color: #222;
}
.toolbar {
    display: flex;
    gap: 10px;
    padding: 10px;
    background: #333;
}
.light-theme .toolbar {
    background: #eee;
}
textarea {
    width: 100%;
    height: calc(100vh - 50px);
    resize: none;
    font-size: 1.1em;
    background: inherit;
    color: inherit;
    border: none;
    outline: none;
    padding: 10px;
    overflow: auto;
}
```

## 11. Add Script Logic in js/script.js
```js
// Theme toggle logic
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});

// New button logic: clears the editor for new typing
document.getElementById('newBtn').addEventListener('click', () => {
    document.getElementById('editor').value = '';
});

// Electron APIs
const { ipcRenderer } = require('electron');

// Open file
document.getElementById('openBtn').addEventListener('click', async () => {
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
```

## 12. Start Updated App
```sh
npm start
```
// Save file
