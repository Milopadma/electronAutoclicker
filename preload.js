// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})


//contextBridge is used to communicate between the main and renderer processes
const { contextBridge } = require('electron')
const robot = require("@jitsi/robotjs");

contextBridge.exposeInMainWorld('robot', {
  moveMouse: () => {
    robot.moveMouse(100,100);
  },
  leftClick: (amount) => {
    robot.mouseClick('left', false);
  },
  rightClick: () => {
    robot.mouseClick('right', false);
  },
  wait: (time) => {
    robot.setMouseDelay(time);
  }
})

