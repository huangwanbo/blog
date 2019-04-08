const moment = require('moment')

module.exports = (sequelize, dataTypes) => {
    const Comment = sequelize.define('comment', {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        articleId: dataTypes.INTEGER(11),
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
    Comment.associate = models => {
        Comment.belongsTo(models.article, {
            as: 'article',
            foreignKey: 'articleId',
            targetKey: 'id',
            constraints: false
        })
        Comment.belongsTo(models.user, {
            foreignKey: 'userId',
            targetKey: 'id',
            constraints: false
        })
        Comment.hasMany(models.reply, {
            foreignKey: 'commentId',
            sourceKey: 'id',
            constraints: false
        })

    }
    return Comment
}