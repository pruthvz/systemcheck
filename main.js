const electron = require("electron");
const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
const url = require("url");

function createWindow() {
  // Create the browser window.
  const mainWin = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + "./icon1.png",
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWin.webContents.openDevTools();
  mainWin.loadFile("index.html");
}

app.whenReady().then(createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});
