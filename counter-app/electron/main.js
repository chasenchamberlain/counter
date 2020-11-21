const { app, BrowserWindow, ipcMain, remote } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const fs = require('fs');
const Store = require('electron-store');

const schema = {
  games: {
    type: 'array'
  }
};

const store = new Store({ schema });
var storeData = [];
// console.log(app.getPath('userData'));
// console.log(store.size);
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
  win.loadURL('http://localhost:3000/')
  // win.webContents.openDevTools()
}

ipcMain.on('form-submission', function (event, gameName, gameCounts, index) {
  console.log("this is the gameName from the form ->", gameName)
  console.log("this is the counts from the form ->", gameCounts)
  console.log("index ->", index)

  // storeData = [{ name: gameName, counts: gameCounts }];
  // store.set(storeData);
  // console.log("storeData - " + { storeData });
  // console.log(store.size)
  // console.log(store.store);

  // store.openInEditor();
  // checkStore();


});

app.whenReady().then(createWindow);

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

function checkStore() {
  createWindow();
}
  // In this file you can include the rest of your app's specific main process
  // code. You can also put them in separate files and require them here.