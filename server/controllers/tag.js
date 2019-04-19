const { tag: TagModel, sequelize } = require('../models')

module.exports = {
    async getTages(ctx) {
        const data = await TagModel.findAll({
            attritubies: ['name', [sequelize.fn('COUNT', sequelize.col('name'), 'count')]],
            group: 'name'
        })
        ctx.body = { code: '200', data }
    }
}