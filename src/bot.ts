import {Bot} from "grammy";
import {isBotMiddleware} from "./middlewares/bot/is-bot.middleware";
import {options} from "./options";
export const bot = new Bot(options.telegramBotToken);


bot.use(isBotMiddleware)

bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));

bot.on("message", (ctx) => ctx.reply("Got another message!"));

