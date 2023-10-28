// ==UserScript==
// @name        Discord Hide Blocked Messages
// @namespace   https://github.com/Multarix/Discord-Hide-Blocked-Messages
// @match       https://discord.com/*
// @downloadURL https://raw.githubusercontent.com/Multarix/Discord-Hide-Blocked-Messages/master/script.user.js
// @homepageURL https://github.com/Multarix/Discord-Hide-Blocked-Messages
// @supportURL  https://github.com/Multarix/Discord-Hide-Blocked-Messages/issues
// @grant       none
// @version     2.1
// @author      Multarix
// @description Working as of: 28/10/2022
// ==/UserScript==

const css = `ol > [class^='groupStart_'] { display: none; }`
const style = document.createElement('style'); style.innerHTML = css;
document.body.appendChild(style);