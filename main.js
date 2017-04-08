const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win;


function createWindow()
{
win = new BrowserWindow({
    width:1280, 
    height:720 //,
//icon:__dirname+'/img/icon.png'


});

win.loadURL(url.format({
  pathname: path.join(__dirname, 'src/index.html'),
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