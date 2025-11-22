# Electron JS Tutorial

## 1. Initialize your project
Run `npm init -y` in your project folder to create a package.json.

npm init -y


## 2. Edit Package Info
```sh
{
  "name": "demo-electron-app",
  "version": "1.0.0",
  "author": "Mark Hamilton",
  "description": "A simple Electron notepad app.",
  "main": "main.js",
  // ...rest of your config...
}
```


## 3. Install Electron
Run `npm install electron --save-dev` to add Electron as a dev dependency.
```sh
npm install electron --save-dev
```
or

```sh
npm i electron -D
```


## 4. Install Electron-Forge-CLI
This ensures Forge works reliably and avoids missing or deprecated dependencies.
```sh
npm install --save-dev @electron-forge/cli
```




## 5. Create main files
Create a `main.js` file (main process).
Create an `index.html` file (renderer process).

## 6. Update package.json
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

## 7. Write the Electron code to launch a window in main.js
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

## 8. Create Simple index.html code
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

## 9. Test Run App, Then stop
```sh
npm start
crtl + c 
```

## 10. Create HTML Layout
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

## 11. Create Folders for css and js with index.html

## 12. Add CSS in css/style.css
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

## 13. Add Script Logic in js/script.js
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

## 14. Start Updated App
```sh
npm start
```


## --------- Package App for Delivery ----------
To package your Electron app with Electron Forge, follow these steps:


## 15. Install Electron Forge
This sets up Forge in your project and adds necessary config and scripts.

```sh
npx electron-forge import
```
Questions: 
? WARNING: We will now attempt to import: "C:\school\Semester 4\Javascript Frameworks\Repos\Demo-Electron-App\Demo-Electron-App\Demo-App-1".  This will involve modifying some files,
 are you sure you want to continue?  -> Yes

? Initialize GitRepo - you can if you havent already.

? Do you want us to change the "main" attribute of your package.json?  If you are currently using babel and pointing to a "build" directory say yes.  -> No

? Do you want us to update the "start" script to instead call the electron-forge task "electron-forge start"  -> Yes

? Do you want us to update the "package" script to instead call the electron-forge task "electron-forge package"  -> Yes

? Do you want us to update the "make" script to instead call the electron-forge task "electron-forge make" -> Yes

## 16. Build and Package the App

Start your app in developmen
```sh
npm start
```

## 17 To package your app for distribution

This creates distributable files in the out folder (e.g., .exe for Windows).
```sh
npm run make
```
## 18. Find Your Installer
After running npm run make, check the out/make directory for your packaged installer.

