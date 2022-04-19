// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

// const {ipcRenderer} = require('electron')
// //use ipcRenderer to call module from preload
// ipcRenderer.on('asynchronous-message', (event, arg) => {
//     console.log(arg) // prints "ping"
//     robot.typeString(arg)
//     }
// )

//sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//get the number from input field for click-count
function getNumber()
{
    var number = document.getElementById("click-count").value;
    console.log(number);
    return number;
}

// leftClick functionalities
//get button from html
const Lbutton = document.getElementById("L-click-button");
Lbutton.onclick = LbuttonOnClick;

async function LbuttonOnClick()
{
    await sleep(1500);
    window.robot.wait(10);
    var num = getNumber();
    for (var i = 1; i < num; i++)
    {
        window.robot.leftClick();

    }
    console.log("test2")
}

//rightClick functionalities
//get button from HTML
const Rbutton = document.getElementById("R-click-button");
//when button is clicked, run this function
Rbutton.onclick = RbuttonOnClick;

async function RbuttonOnClick()
{
    await sleep(1500);
    window.robot.wait(10);
    var num = getNumber();
    for (var i = 1; i < num; i++)
    {
        window.robot.rightClick();

    }
    console.log("test2")
}

