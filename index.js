const electron = require('electron');
const {app,BrowserWindow} = electron;
app.on('ready', ()=>{
    let win = new BrowserWindow({width:800,height:700,icon: __dirname + '/icon.ico'});
    win.loadURL(`file://${__dirname}/index.html`);
})
app.on('window-all-closed', ()=>{
    app.quit();
})