// ==UserScript==
// @name        Discord Hide Blocked Messages
// @namespace   https://github.com/Multarix/Discord-Hide-Blocked-Messages
// @match       https://discord.com/*
// @downloadURL https://raw.githubusercontent.com/Multarix/Discord-Hide-Blocked-Messages/master/script.user.js
// @homepageURL https://github.com/Multarix/Discord-Hide-Blocked-Messages
// @supportURL  https://github.com/Multarix/Discord-Hide-Blocked-Messages/issues
// @grant       none
// @version     2.0
// @author      Anonymous
// @description 10/28/2020, 1:37:40 PM
// ==/UserScript==

const sheet = window.document.styleSheets[0];
sheet.insertRule(`ol > [class^='groupStart-'] { display: none; }`, sheet.cssRules.length);