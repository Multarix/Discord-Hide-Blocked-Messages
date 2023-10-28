# Hide Blocked Messages

IMPORTANT INFO - 26/01/2022
Discord seems to have disabled accessing the developer console within the production version.
There are currently 2 work arounds:

1. Re-Enable it in discord settings (Recommended). You can do this by going to %appdata%/discord/settings.json and adding the following line to the bottom:
`"DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING": true` (Remember to add a comma on the previous line)
2. Install and use Discord Canary. You can download canary here: https://canary.discord.com/

Last updated October 28th, 2023<br>
This repository is for those looking to hide the "1 blocked message - show message" messages from discord. If reading this far into the future, please note that this may not work, so don't complain to me if it stops working.<br>

###  **The script will boot on startup if you follow the instructions below within "Startup Run"**
#### _**I hold no responsibility for you breaking your discord or other things happening**_

<br>
To use these, while discord is open, press <i>Ctrl + Shift + I</i>. You will be presented with a giant console.
First and foremost you'll be greeted with a giant message telling you that pasting anything inside the console has a high chance of being a scam.
If you are unsure about the legitmacy of this script. Stop and don't continue. If you're a risk taker/ can actually read javascript and can verify the legitimacy of the script ignore the message.

Copy and paste the script into the console and hit enter.<br>
## New Userscript (tested with ViolentMonkey)
Install Userscript: https://github.com/Multarix/Discord-Hide-Blocked-Messages/raw/master/script.user.js<br>
Some things to note:
- The "new message" banner will still appear.
- Closing or updating discord will stop the script, requiring you to re-enable it.
- Blocked messages will not disappear instantly, but within half a second of them being posted.
- This does not delete them from the channel, server or any such action. It simply hides the message client side. Other people can still see the messages.
- If you wish to unblock the person, the sidebar or your block list in the friends area is the best option.

```js
const css = `ol > [class^='groupStart_'] { display: none; }`
const style = document.createElement('style'); style.innerHTML = css;
document.body.appendChild(style);
```


### Startup Run

WARNING: THIS DOES COUNT AS CLIENT MODIFICATION, Multarix or DinoTheDevOfficial HOLD NO ACCOUNTABILITY IF YOU GET BANNED BY DISCORD

Open up the directory `%localappdata%/DiscordCanary` or where-ever Discord is installed too.

Once in there open the most recent app folder (should look something like `app-1.0.9005`), then navigate to the `modules` directory, then the `discord_krisp-1` directory. Your final path should look something like: `C:\Users\yourusername\AppData\Local\Discord\app-1.0.9005\modules`

edit the file named `index.js` and add to the bottom:
```js
const css = `ol > [class^='groupStart_'] { display: none; }`
const style = document.createElement('style'); style.innerHTML = css;
document.body.appendChild(style);
```

save and press ctrl + r or cmd + r in Discord and Boom! Your done! 

P.S. This may affect your krisps 
