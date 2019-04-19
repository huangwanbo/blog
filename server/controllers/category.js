const { category: CategoryModel, article: ArticleModel } = require('../models')
const { sequelize } = require('../models')

module.exports = {
    async getCategories(ctx) {
        // const data = CategoryModel.findAll({
        //     attributes: ['name', [sequelize.fn('COUNT', sequelize.col('name')), 'count']],
        //     group: 'name'
        // })
        const data = await sequelize.query(
            "SELECT name, COUNT(name) AS count FROM category as category GROUP BY name")

        ctx.body = { code: 200, data }
    },
    async articleFromCate(ctx) {
        let { name, page = 1, pageSize = 10 } = ctx.query;
        // const data = await CategoryModel.findOne({
        //     attributes: ['name'],
        //     include: [{ models: ArticleModel, attributes: ['id', 'title', 'createdAt'], where: {}, limit: pageSize, offset: (page - 1) * pageSize }],
        //     where: { name }

        // })
        const data = await sequelize.query(`select * from article where id in (select articleId from category where name='${name}')`)
        ctx.body = { code: '200', data }
    }
}