import express from "express";
import {webhookCallback} from "grammy";
import {bot} from "./bot";
import {options} from "./options";


export const app = express();
app.use(express.json())

app.post(options.telegramBotWebhookPath, webhookCallback(bot, 'express'))