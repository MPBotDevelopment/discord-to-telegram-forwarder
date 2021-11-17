const { Telegraf } = require('telegraf');
const bot = new Telegraf('TELEGRAM_TOKEN');
const discord_token = "BOT_TOKEN";
const { Client, MessageAttachment } = require('discord.js');
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });


client.once('ready', () => {
	console.log(`${client.user.tag} is ready!`);
});

client.on('messageCreate', (message) =>{
    if (message.channel.id == 909337797599584257 || 909337807892414515 || 909337826246688819) {
        if (message.content == '') {
            message.attachments.forEach(attachment => {
                const link = attachment.url;
                return bot.telegram.sendMessage('-1001483945543' , link);
            })
        } else if (message.attachments == []) {
            return bot.telegram.sendMessage('-1001483945543' ,message.content);
        } else {
            bot.telegram.sendMessage('-1001483945543' ,message.content);
            message.attachments.forEach(attachment => {
                const link = attachment.url;
                return bot.telegram.sendMessage('-1001483945543' , link);
            })
        }
    }
})

bot.launch()
client.login(discord_token)
