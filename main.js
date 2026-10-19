const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 1200, // Capybara o'yini uchun kengroq ekran
    height: 800,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false
    }
  });

  // O'yiningizning HTML fayli nomi qanday bo'lsa, bu yerga aynan shuni yozing:
  win.loadFile('capybaras_with_guns.html'); 
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
