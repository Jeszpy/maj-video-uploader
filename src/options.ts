import {config} from "dotenv";
config()



export const options = {
    port: parseInt(process.env.PORT as string, 10),
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN as string,
    telegramBotWebhookDomain: process.env.TELEGRAM_BOT_WEBHOOK_DOMAIN as string,
    telegramBotWebhookPath: process.env.TELEGRAM_BOT_WEBHOOK_PATH as string,
}