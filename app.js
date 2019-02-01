const TelegramBot = require('node-telegram-bot-api');
const toki = require('./tokin');
const bot = new TelegramBot(toki(), {polling: true});


bot.onText(/\/start/, function (msg, match) {
    let helloMaster = 'Привіт ' + msg.chat.first_name + ' ' + msg.chat.last_name + '!' + '\nОбери свій автомобіль:';
    bot.sendMessage(msg.chat.id, helloMaster, automobile);
});
const automobile = {
    "reply_markup":{
        "keyboard":
            [["Peugeot"],["Fiat"]],
        "one_time_keyboard":true
    }
};


bot.onText(/\Fiat/, function (msg, match) {
    bot.sendMessage(msg.chat.id, 'В автомобілі FIAT у наявності є такі матеріали:', materials);
});
let materials = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'ONU', callback_data: '1'}],
            [{text: 'OpticalBox', callback_data: 'data 2'}],
        ]
    })
};


bot.onText(/\Peugeot/, function (msg, match) {
    bot.sendMessage(msg.chat.id, 'В автомобілі PEUGEOT у наявності є такі матеріали:', materials1);
});
let materials1 = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'ONU', callback_data: '1'}],
            [{text: 'OpticalBox', callback_data: 'data 2'}],
        ]

    })
};

