var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
require('coffee-script/register');

var window = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  // Create the browser window.
  window = new BrowserWindow({title: 'Cantik', icon: 'static/images/icon.png'});
  global.window = window;
  window.maximize();
  window.setMenu(null);
  window.loadURL('file://' + __dirname + '/../static/index.html');

  // Avoid the window title to change
  window.on('page-title-updated', function(event){
    event.preventDefault();
  });

  // If "dev" in command line args open the dev tools
  if(process.argv.indexOf('dev') > -1){
    window.webContents.openDevTools();
  }

  // Emitted when the window is closed.
  window.on('closed', function() {
    window = null;
  });
});
