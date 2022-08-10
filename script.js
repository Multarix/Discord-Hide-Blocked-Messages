const sheet = window.document.styleSheets[0];
sheet.insertRule(`ol > [class^='groupStart-'] { display: none; }`, sheet.cssRules.length);
