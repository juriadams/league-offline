const electron = require('electron');
const {ipcRenderer} = electron;


// Button for closing the program
const exit_app = document.getElementById('exit_app')

exit_app.addEventListener('click', function(){
  console.log('Exit button pressed!')
  ipcRenderer.send('exit_app');
});


// Button for minimizing the program
const minimize_app = document.getElementById('minimize_app')

minimize_app.addEventListener('click', function(){
  console.log('Exit button pressed!')
  ipcRenderer.send('minimize_app');
});


// Button for closing the program
const toggle = document.getElementById('toggle')

toggle.addEventListener('click', function(){
  console.log('Exit button pressed!')
  ipcRenderer.send('exit_app');
});
