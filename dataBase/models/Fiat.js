module.exports = (sequalize, DataTypes) => {
    const Fiat = sequalize.define('Fiat', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        ONU: {
            type: DataTypes.INTEGER
        },
        OpticalBox: {
            type: DataTypes.INTEGER
        },

    },{
        tableName: 'fiat',
        timestamps: false
    });
    return Fiat;
};