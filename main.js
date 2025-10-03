const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev'); 

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    
    width: 550,
    height: 650,
    minWidth: 550, 
    minHeight: 650,
    frame: false,
    
    webPreferences: {
      
      preload: path.join(__dirname, 'preload.js'), 
      contextIsolation: true, 
      nodeIntegration: false  
    }
  });

  const startURL = isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, './build/index.html')}`;

  mainWindow.loadURL(startURL);
  
  if (isDev) {
      mainWindow.webContents.openDevTools({ mode: 'detach' });
  }
}

app.whenReady().then(() => {
    createWindow();
    
  
    ipcMain.on('minimize-window', () => { 
        if (mainWindow) mainWindow.minimize();
    });

    ipcMain.on('close-window', () => { 
        if (mainWindow) mainWindow.close();
    });
});

