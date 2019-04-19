const { article: ArticleModel, tag: TagModel, category: CategoryModel, comment: CommentModel, replay: ReplayModel, sequelize } = require('../models')
const { checkAuth } = require('../configs/token')

module.exports = {
    async CreateArticle(ctx) {
        // const isAuth = checkAuth(ctx)
        let { title, content, id, categorys, tags } = ctx.request.body
        let response
        // if (isAuth) {
        console.log(tags, categorys)
        if (!title && !content) {
            response = { code: '0', content: '请提交完整信息' }
        } else {
            tags = tags.split(',');
            categorys = categorys.split(',')
            const tagList = tags.map(tag => ({
                name: tag
            }))

            const categoryList = categorys.map(cate => ({
                name: cate
            }))
            console.log(tagList, categorys)
            await ArticleModel.create({
                title,
                content,
                userid: id,
                tags: tagList,
                categories: categoryList

            }, { include: [TagModel, CategoryModel] })
            response = { code: '200', message: '添加成功' }
        }
        // } else {
        //     response = { code: '0', message: '您还未登录' }
        // }
        ctx.body = response
    },
    async getArticleDetial(ctx) {
        let response;
        let { Id } = ctx.query
        const articleDetial = await ArticleModel.findOne({
            where: { id: Id },
            include: [{
                model: CommentModel,
                attributes: ['id', 'content', 'createAt']
            }]


        })

        if (articleDetial) {
            response = { code: '200', articleDetial }
        } else {
            response = { code: '0', message: '内容已丢失' }
        }
        ctx.body = response;
    },

    async getAllArticle(ctx) {
        let response
        let { page = 1, pageSize = 10, title } = ctx.query
        const offset = (page - 1) * pageSize
        const param = title ? { title: { $like: `%${title}%` } } : {}

        const allArticle = await ArticleModel.findAll({
            attributes: ['id', 'title', 'content', 'updatedAt'],
            where: { ...param },
            offset,
            limit: pageSize,
            row: true,
            distinct: true,
            order: [
                ['createdAt', 'DESC']
            ]
        })
        response = { code: '200', ...allArticle }

        ctx.body = response
    },

    async delete(ctx) {
        const isAuth = true;
        const { articleId } = ctx.request.body
        console.log(articleId)
        if (isAuth && articleId) {

            await ArticleModel.destroy({
                where: { id: articleId }
            })
            // await TagModel.destroy({
            //     where: { id: articleId }
            // })
            // await CategoryModel.destroy({
            //     where: { id: articleId }
            // })
            //可以修改外键 on delete 为 cascade
            ctx.body = { code: '200', message: '删除成功' }
        }
    },
    async update(ctx) {
        const isAuth = true;
        if (isAuth) {
            let { articleId, title, content, tags, categorys } = ctx.request.body
            tags = tags.split(',');
            categorys = categorys.split(',');
            const tagList = tags.map(tag => ({
                name: tag,
                articleId
            }));

            const categoryList = categorys.map(cate => ({
                name: cate,
                articleId
            }));
            if (articleId) {
                await ArticleModel.update({
                    title,
                    content
                }, { where: { id: articleId } });
                await TagModel.destroy({
                    where: { id: articleId }
                });
                await CategoryModel.destroy({
                    where: { id: articleId }
                });
                await TagModel.bulkCreate(tagList);
                await CategoryModel.bulkCreate(categoryList);
                ctx.body = { code: '200', message: '文章修改成功' };
            } else {
                ctx.body = { code: '0', message: '文章id不能为空' };
            }
        }
    },
    async getArticlesByCate(ctx) {
        let { page = 1, pageSize = 15, name } = ctx.query;
        offset = (page - 1) * pageSize;

        const data = await ArticleModel.findAndCountAll({
            attributes: ['id', 'title', 'createdAt'],
            include: [{ model: CategoryModel, attributes: ['name'], where: { name } }],
            offset,
            limit: pageSize,
            order: [
                ['createdAt', 'DESC']
            ],
            distinct: true
        })
        //         SELECT count(DISTINCT(`article`.`id`)) AS `count` FROM `art
        // icle` AS `article` INNER JOIN `category` AS `categories` ON `article`.`id` = `ca
        // tegories`.`articleId` AND `categories`.`name` = 'aa';
        // Executing (default): SELECT `article`.*, `categories`.`id` AS `categories.id`, `
        // categories`.`name` AS `categories.name` FROM (SELECT `article`.`id`, `article`.`
        // title`, `article`.`createdAt` FROM `article` AS `article` WHERE ( SELECT `articl
        // eId` FROM `category` AS `categories` WHERE (`categories`.`name` = 'aa' AND `cate
        // gories`.`articleId` = `article`.`id`) LIMIT 1 ) IS NOT NULL ORDER BY `article`.`
        // createdAt` DESC LIMIT 0, 15) AS `article` INNER JOIN `category` AS `categories`
        // ON `article`.`id` = `categories`.`articleId` AND `categories`.`name` = 'aa' ORDE
        // R BY `article`.`createdAt` DESC
        ctx.body = { code: '200', ...data }
    },
    async getArticleByTag(ctx) {
        let { page = 1, pageSize = 10, name } = ctx.query;
        offset = (page - 1) * pageSize;

        const data = await ArticleModel.findAndCountAll({
            attributes: ['id', 'title', 'createdAt'],
            include: [{ model: TagModel, attributes: ['name'], where: { name } }],
            offset,
            order: [
                ['createdAt', 'DESC']
            ],
            distinct: true
        })
        ctx.body = { code: '200', ...data }
    }

}