const moment = require('moment')

module.exports = (sequelize, dataTypes) => {
    const Reply = sequelize.define(
        'reply', {

            id: {
                type: dataTypes.INTEGER(11),
                primaryKey: true,
                autoIncrement: true
            },

            content: {
                type: dataTypes.TEXT,
                allowNull: false
            },
            createAt: {
                type: dataTypes.DATE,
                defaultValue: dataTypes.NOW,
                get() {
                    return moment(this.getDataValue('createAt')).format('YYYY-MM-DD HH:MM:SS')
                }
            },
            updateAt: {
                type: dataTypes.DATE,
                defaultValue: dataTypes.NOW,
                get() {
                    return moment(this.getDataValue('updateAt')).format('YYYY-MM-DD HH:MM:SS')
                }
            }
        }, {
            timestamps: false
        })
    Reply.associate = models => {
        Reply.belongsTo(models.user, {
            foreignKey: 'userId',
            targetKey: 'id',
            constraints: false
        })
    }
    return Reply
}