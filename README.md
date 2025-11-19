# Demo-Electron-App
Basic demo on using electron.js

Electron JS tutorial
1.	Initialize your project
Run npm init -y in your project folder to create a package.json.
npm init -y 



2.	Install Electron
Run npm install electron --save-dev to add Electron as a dev dependency.
npm install electron --save-dev
npm i electron -D




3.	Create main files
Create a main.js file (main process).
Create an index.html file (renderer process).




4.	Update package.json
Add start electron to script in the package.json file

{
  "main": "main.js",
  "devDependencies": {
    "electron": "^39.2.2"
  },
  "scripts": {
    "start": "electron ."
  }
}



5.	Write the Electron code to launch a window in main.js
In the main.js file write the following code to launch a window.
Every Electron App only has 1 main process running to manage the life cycle.

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




6.	Create Simple index.html code

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Demo Electron App</title>

    <!-- Access Node.js Globals in HTML code Directly ! -->
    <script>
        console.log(__dirname);
        console.log(__filename);

    </script>

</head>

<body>
  <h1>Hello Electron ⚡!</h1>
</body>
</html>





7.	Start App
npm start
