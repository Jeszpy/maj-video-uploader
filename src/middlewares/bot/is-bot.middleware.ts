import {Context, NextFunction} from "grammy";

export const isBotMiddleware = async (ctx: Context, next: NextFunction) => {
    if (ctx.from?.is_bot) {
        await ctx.reply('Я не работаю с ботами...')
        return
    }
    return next()
}