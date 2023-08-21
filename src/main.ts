import {app} from "./app";
import ngrok from 'ngrok'
import {NodeEnvEnum} from "./enums";
import {options} from "./options";
import {bot} from "./bot";


const startApp = async () => {
    if(process.env.NODE_ENV !== NodeEnvEnum.PRODUCTION) {
        options.telegramBotWebhookDomain = await ngrok.connect(options.port)
    }

    app.listen(options.port, () => {
        console.log(`App started at ${options.port} port`)
    })

    await bot.api.setWebhook(options.telegramBotWebhookDomain + options.telegramBotWebhookPath)

}

startApp()

