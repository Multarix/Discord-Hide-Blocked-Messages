const css = `div[class*="groupStart"]:has(div[class*="blocked"]) { display: none; }`
const style = document.createElement('style'); style.innerHTML = css;
document.body.appendChild(style);
