const css = `ol > [class^='groupStart_'] { display: none; }`
const style = document.createElement('style'); style.innerHTML = css;
document.body.appendChild(style);
