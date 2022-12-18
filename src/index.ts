import * as dotenv from 'dotenv';
import {Telegraf} from 'telegraf';
dotenv.config();

const botToken = process.env.BOT_TOKEN ?? '';
const bot = new Telegraf(botToken);

bot.start(async ctx => {
	const sender = ctx.update.message.from;
	console.log(ctx.update.message.chat, ' ini chatt');
	return ctx.reply(`
	Welcome ${sender.first_name ?? 'anonymous'} ${sender.last_name ?? ''}
	id telegram : ${sender.id} 
	username : ${sender.username ?? 'anonymous'}`);
});
bot.help(async ctx => ctx.reply('Send me a sticker'));
bot.on('message', async ctx => ctx.reply('testt'));

await bot.launch();

