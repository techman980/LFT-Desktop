const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win;

var iconPath = path.join(__dirname, 'images/logo.png');

function createWindow()
{
win = new BrowserWindow({
    width:1280, 
    height:720,
icon: iconPath
});

win.loadURL(url.format({
  pathname: path.join(__dirname, 'index.html'),
  protocol: 'file',
  slashes: 'true'

}));

win.on('closed', () => {
    win = null;
});
}

//Run create window function
app.on('ready', createWindow);

//Quit when all windows are closed.
app.on('window-all-closed', () => {

if(process.platform !== 'darwin')
{
app.quit();
}

});