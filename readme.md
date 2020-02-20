# Hide Blocked Messages
This repository is for those looking to hide the "1 blocked message - show message" messages from discord. If reading this far into the future, please note that this may not work, so don't complain to me if it stops working.

**The script will need to re-pasted in every time you start discord. As such if you somehow fuck something up, restarting discord should fix whatever you broke.**
_**I hold no responsibility for you breaking your discord or other things happening**_

To use these, while discord is open, press *Ctrl + Shift + I*. You will be presented with a giant console.
First and foremost you'll be greeted with a giant message telling you that pasting anything inside the console has a high chance of being a scam.
If you are unsure about the legitmacy of this script. Stop and don't continue. If you're a risk taker/ can actually read javascript and can verify the legitimacy of the script ignore the message.

Copy and paste the script into the console and hit enter.

Some things to note:
- The "new message" banner will still appear.
- Closing or updating discord will stop the script, requiring you to re-enable it.
- Blocked messages will not disappear instantly, but within half a second of them being posted.
- This does not delete them from the channel, server or any such action. It simply hides the message client side. Other people can still see the messages.
- If you wish to unblock the person, the sidebar or your block list in the friends area is the best option.

```js
function hideBlocked(){
    const blocked = document.querySelectorAll('[class^="groupStart"]'); // Find all "Blocked Messages"
    blocked.forEach(blokMsg => {
        if(blokMsg.style.display !== "none") blokMsg.style.display = "none"; // Hide the message if it's not already hidden. Hey presto, no more blocked person.
    });
};
setInterval(hideBlocked, 500); // Repeat every half second. Recommended to keep at 500, but raise/ lower if you wish.

```
