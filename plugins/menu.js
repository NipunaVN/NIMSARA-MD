const { cmd, commands } = require("../command");
const config = require('../config');

cmd(
  {
    pattern: "menu",
    alias: ["getmenu"],
    react: "💯",  // Default react to show for this command
    desc: "get cmd list",
    category: "main",
    filename: __filename,
  },
  async (
    robin,
    mek,
    m,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
      args,
      q,
      isGroup,
      sender,
      senderNumber,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reply,
    }
  ) => {
    try {
      let menu = {
        main: "",
        download: "",
        group: "",
        owner: "",
        convert: "",
        search: "",
      };

      // Loop through all commands and construct the menu
      for (let cmd of commands) {
        if (cmd.pattern && !cmd.dontAddCommandList && menu[cmd.category] !== undefined) {
          menu[cmd.category] += `${config.PREFIX}${cmd.pattern}\n`;
        }
      }

      let madeMenu = `👋✨ *Hello...🍷  ${pushname || "User"}*\n\n` +
        `| *MAIN COMMANDS* |\n` +
        `    ➥ .alive\n` +
        `    ➥ .menu\n` +
        `    ➥ .owner\n` +
        `| *DOWNLOAD COMMANDS* |\n` +
        `    ➥ .song <text>\n` +
        `    ➥ .video <text>\n` +
        `    ➥ .fb <link>\n` +
        `| *GROUP COMMANDS* |\n` +
        `    ➥ .demote \n` +
        `    ➥ .promote \n` +
        `    ➥ .mute \n` +
        `    ➥ .unmute \n` +
        `    ➥ .kick \n` +
        `    ➥ .add \n` +
        `| *OWNER COMMANDS* |\n` +
        `    ➥ .restart\n` +
        `    ➥ .update\n` +
        `    ➥ .block \n` +
        `    ➥ .unblock \n` +
        `| *CONVERT COMMANDS* |\n` +
        `    ➥ .sticker <reply img>\n` +
        `    ➥ .img <reply sticker>\n` +
        `| *SEARCH COMMANDS* |\n` +
        `${menu.search || "    ➥ No search commands available\n"}\n\n` +
        `🚫 Made By 𝐍_𝐈_𝐌_𝐒_𝐀_𝐑_𝐀 🚫\n\n` +
        `> NIMSARA MENU MSG`;

      // Send presence update
      await robin.sendPresenceUpdate('recording', from);

      // Send audio message (optional)
      await robin.sendMessage(from, {
        audio: {
          url: "https://github.com/nimsara-md64/Bot-helper/raw/refs/heads/main/audio/Bot%20auto%20voice%20.mp3"
        },
        mimetype: 'audio/mpeg',
        ptt: true
      }, { quoted: mek });

      // Send image with the menu
      await robin.sendMessage(from, {
        image: {
          url: "https://raw.githubusercontent.com/nimsara-md64/Bot-helper/refs/heads/main/Menu.jpg"
        },
        caption: madeMenu
      }, { quoted: mek });

      // React to the message with the specified emoji
      const reaction = cmd.react || "💯";  // Use the default reaction or the one defined for the command
      await robin.react(from, reaction);  // React to the message

    } catch (e) {
      console.error("Error in menu command:", e);
      await reply(`❌ Error generating menu: ${e.message}`);
    }
  }
);
