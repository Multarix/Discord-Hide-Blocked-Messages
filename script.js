const css = `ol > [class*='groupStart'] { display: none; }`
const style = document.createElement('style'); style.innerHTML = css;
document.body.appendChild(style);
