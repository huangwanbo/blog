module.exports = (sequelize, dataTypes) => {
    const Example = sequelize.define('example', {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        article: {
            type: dataTypes.TEXT
        },
        username: {
            type: dataTypes.STRING(20),
            allowNull: false,
            unique: true
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        }
    })
    return Example
}