const TelegramBot = require('node-telegram-bot-api');
const toki = require('./tokin').token;
const bot = new TelegramBot(toki, {polling: true});

const Sequelize = require('sequelize');
const sequelize = new Sequelize('carsofmegacom', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
});


sequelize.query("SELECT * FROM `fiat`", {type: sequelize.QueryTypes.SELECT})
// Якщо виконання успішне, то працює then
    .then(materials => {
        console.log(materials);
try {
    let materials1 = JSON.parse(materials, function (key, value) {
        if (key === 'ONU') return new id(value);
        return value
    });
}
catch (e) {
        materials1 = materials;
}

console.log(materials1.ONU)


        bot.onText(/\Fiat/, function (msg, match) {
            bot.sendMessage(msg.chat.id, 'В автомобілі FIAT у наявності є такі матеріали:' )
        });
    })
    // Якщо виконання не було успішним, то помила попадає в catch
    .catch(err => {
        console.log(err);
    });


bot.onText(/\/start/, function (msg, match) {
    let helloMaster = 'Привіт ' + msg.chat.first_name + ' ' + msg.chat.last_name + '!' + '\nОбери свій автомобіль:';
    bot.sendMessage(msg.chat.id, helloMaster, automobile);
});
const automobile = {
    "reply_markup": {
        "keyboard":
            [["Peugeot"], ["Fiat"]],
        "one_time_keyboard": true
    }
};


bot.onText(/\Peugeot/, function (msg, match) {
    bot.sendMessage(msg.chat.id, 'В автомобілі PEUGEOT у наявності є такі матеріали:', materials);
});
let materials = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'ONU', callback_data: '1'}],
            [{text: 'OpticalBox', callback_data: 'data 2'}],
        ]
    })
};

