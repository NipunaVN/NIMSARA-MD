cmd(
  {
    pattern: "menu",
    alias: ["getmenu"],
    react: "💯",
    desc: "Get command list",
    category: "main",
    filename: __filename,
  },
  async (robin, mek, m, { from, pushname }) => {
    try {
      let madeMenu = `
╭━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷
      𝐇ɪɪɪɪɪ......🍷 *${pushname || "User"}*
     *𝐍𝐢𝐦𝐬𝐚𝐫𝐚-𝐌𝐝 𝐂ᴏᴍᴍᴀɴᴅ 𝐋ɪꜱᴛ*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

*╭────────────●●►*
*│𝐋ɪꜱᴛ  𝐌ᴇɴᴜ......☘️*
*│⟻⟻⟻⟻⟻⟻⟻*
*│1. 𝐃ᴏᴡɴʟᴏᴀᴅ 𝐌ᴇɴᴜ*
*│2. 𝐒ᴇᴀʀᴄʜ 𝐌ᴇɴᴜ* 
*│3. 𝐀ɪ 𝐌ᴇɴᴜ*
*│4. 𝐎ᴡɴᴇʀ 𝐌ᴇɴᴜ*
*│5. 𝐆ʀᴏᴜᴘ 𝐌ᴇɴᴜ*
*│6. 𝐈ɴꜰᴏ 𝐌ᴇɴᴜ*
*│7. 𝐂ᴏɴᴠᴇʀᴛᴇʀ 𝐌ᴇɴᴜ*
*│8. 𝐑ᴀɴᴅᴏᴍ  𝐌ᴇɴᴜ*
*│9. 𝐖ᴀʟʟᴘᴀᴘᴇʀꜱ  𝐌ᴇɴᴜ*
*│10. 𝐎ᴛʜᴇʀ 𝐌ᴇɴᴜ*
*╰────────────●●►*

𝐑ᴇᴘʟʏ 𝐓ʜᴇ 𝐍ᴜᴍʙᴇʀ 𝐘ᴏᴜ 𝐖ᴀɴᴛ 𝐓ᴏ 𝐒ᴇʟᴇᴄᴛ.......👁️❗`;

      await robin.sendMessage(
        from,
        {
          image: {
            url: "https://raw.githubusercontent.com/nimsara-md64/Bot-helper/refs/heads/main/Menu.jpg",
          },
          caption: madeMenu,
        },
        { quoted: mek }
      );
    } catch (e) {
      console.error(e);
      await reply("Error displaying menu");
    }
  }
);
