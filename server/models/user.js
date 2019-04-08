const moment = require('moment')

module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define(
        'user', {
            id: {
                type: dataTypes.INTEGER(11),
                primaryKey: true,
                autoIncrement: true
            },
            username: {
                type: dataTypes.STRING(50),
                allowNull: false,
                unique: true
            },
            password: {
                type: dataTypes.STRING,
                allowNull: false,
                comment: '通过bcrypt加密后的密码'
            },
            auth: {
                type: dataTypes.INTEGER(11),
                defaultValue: 1
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
        }
    )
    User.associate = models => {
        User.hasMany(models.comment)
        User.hasMany(models.reply)
    }

    return User

}