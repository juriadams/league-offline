const electron = require('electron');
const url = require('url');
const path = require('path');
const cmd = require('node-cmd');


// Extracting some stuff from electron
const {app, BrowserWindow, Menu, ipcMain} = electron;


// Defining some variables
let mainWindow;
let addWindow;

// Status 0 = Online Mode/Default - Starting with 0 as default
// Status 1 = Offline Mode
var status = 0;


// Listen for the app to be ready
app.on('ready', function(){

  // Creating main window of the app
  mainWindow = new BrowserWindow({
    width: 750,
    height: 300,
    frame: false,
    resizable: false,
    movable: true,
    icon: path.join(__dirname, 'assets/offline_icon.png')
  });

  // Load HTML file into the window
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, './assets/mainWindow.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Building Menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

  // Insert the Menu
  Menu.setApplicationMenu(mainMenu);

});


// Listening to events on the app
ipcMain.on('toggle', function(){
  if (status == 0) {
    status = 1

    cmd.get('netsh advfirewall firewall add rule name="LeagueOffline 5222" protocol=TCP dir=out remoteport=5222 action=block', function(err, data, stderr){
      if (err) {
        console.log('An error has occured creating the firewall rules:\n' + data);
      } else {
        console.log('Successfully added Firewall Rule blocking port 5222');
      }
    });

    cmd.get('netsh advfirewall firewall add rule name="LeagueOffline 5223" protocol=TCP dir=out remoteport=5223 action=block', function(err, data, stderr){
      if (err) {
        console.log('An error has occured creating the firewall rules:\n' + data);
      } else {
        console.log('Successfully added Firewall Rule blocking port 5223');
      }
    });

    console.log('Status has been set to: OFFLINE')

    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, './assets/offline.html'),
      protocol: 'file:',
      slashes: true
    }));

  } else {
    status = 0

    cmd.get('netsh advfirewall firewall delete rule name="LeagueOffline 5223"', function(err, data, stderr){
      if (err) {
        console.log('An error has occured creating the firewall rules:\n' + data);
      } else {
        console.log('Successfully removed Firewall Rule blocking port 5223');
      }
    });

    cmd.get('netsh advfirewall firewall delete rule name="LeagueOffline 5222"', function(err, data, stderr){
      if (err) {
        console.log('An error has occured creating the firewall rules:\n' + data);
      } else {
        console.log('Successfully removed Firewall Rule blocking port 5222');
      }
    });

    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, './assets/mainWindow.html'),
      protocol: 'file:',
      slashes: true
    }));

    console.log('Status has been set to: ONLINE');
  }
});

ipcMain.on('exit_app', function(){
  app.quit();
});

ipcMain.on('minimize_app', function(){
  mainWindow.minimize();
});


// Raw console commands for firewall settings

// netsh advfirewall firewall add rule name="LeagueOffline 5222" protocol=TCP dir=out remoteport=5222 action=block
// netsh advfirewall firewall add rule name="LeagueOffline 5223" protocol=TCP dir=out remoteport=5223 action=block

// netsh advfirewall firewall delete rule name="LeagueOffline 5222"
// netsh advfirewall firewall delete rule name="LeagueOffline 5223"



// Create menu, currently hidden
const mainMenuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Exit App',

        // Adding hotkey for exiting app, checking if program running on mac
        // ? = if
        // : = else
        accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',

        // Exit app if button is pressed
        click(){
          app.quit();
        }
      }
    ]
  }
];
