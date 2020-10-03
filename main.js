const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');
const fs = require('fs');
const Store = require('electron-store');


const schema = {
  games: {
    type: 'array'
  }
};

const store = new Store({ schema });
console.log(app.getPath('userData'));
console.log(store.size);
// store.reset();
// var testArray = [{name: "sm64", count: 0}, {name: "wow", count: 666}, ];

// store.set(testArray);
// console.log(store.size);
store.clear();

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 400,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile('app/index.html')
  win.webContents.openDevTools()
}

function createStartWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 500,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.webContents.openDevTools()
  win.loadFile('app/js/nogame.html')
}

ipcMain.on('form-submission', function (event, gameName, gameCount) {
  console.log("this is the gameName from the form ->", gameName)
  console.log("this is the gameName from the form ->", gameCount)
});


if (store.size === 0) {
  app.whenReady().then(createStartWindow)
}
else {
  app.whenReady().then(createWindow)
}


// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

  // In this file you can include the rest of your app's specific main process
  // code. You can also put them in separate files and require them here.