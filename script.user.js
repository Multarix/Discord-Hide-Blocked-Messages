// ==UserScript==
// @name        Discord Hide Blocked Messages
// @namespace   https://github.com/Multarix/Discord-Hide-Blocked-Messages
// @match       https://discord.com/*
// @downloadURL https://raw.githubusercontent.com/Multarix/Discord-Hide-Blocked-Messages/master/script.user.js
// @homepageURL https://github.com/Multarix/Discord-Hide-Blocked-Messages
// @supportURL  https://github.com/Multarix/Discord-Hide-Blocked-Messages/issues
// @grant       none
// @version     2.1.1
// @author      Multarix
// @description Working as of: 22/01/2026
// ==/UserScript==

const css = `ol > [class*='groupStart'] { display: none; }`
const style = document.createElement('style'); style.innerHTML = css;
document.body.appendChild(style);
