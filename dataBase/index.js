const Sequalize = require('sequelize');
const fs = require('fs');
const {resolve} = require('path');


module.exports = (() => {
    let instance;

    function initConnection() {
        let client = new Sequalize('carsofmegacom', 'root', 'password', {
            host: 'localhost',
            dialect: 'mysql',
            operatorsAliases: false,
        });
        let models = {};

        function getModels() {
            fs.readdir('./dataBase/models', (err, files) => {
                files.forEach(file => {
                    const [modelName] = file.split('.');
                    console.log('*********************************');
                    console.log(modelName);
                    console.log('*********************************');
                    models[modelName] = client.import(resolve(`./dataBase/models/${modelName}`));
                    console.log('0-0-0-0-0-0-0-0-0-0-0-0-0-0-0');
                    console.log(models);
                    console.log('0-0-0-0-0-0-0-0-0-0-0-0-0-0-0');
                });
            });
        }

        return {
            getModel: modelName => models[modelName],
            setModels: () => getModels(),
        };
    }

    return {
        getInstance: () => {
            if (!instance) instance = initConnection();
            return instance;
        }
    }
})();