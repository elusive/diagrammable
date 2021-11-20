const path = require("path");
const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");

function createWindow() {
    // create instance of BrowserWindow to contain app
    const win = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // load the index.html of the application
    // win.loadFile("index.html");
    win.loadURL(
        isDev
            ? "http://localhost:3000"
            : `file://${path.join(__dirname, "../build/index.html")}`
    );

    if (isDev) {
        win.webContents.openDevTools({ mode: "detach" });
    }
}

// create window is called when the app is ready to make windows
app.whenReady().then(createWindow);

// quit the app when all windows are closed
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});