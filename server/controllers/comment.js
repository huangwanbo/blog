const { comment: CommentModel } = require('../models')

module.exports = {
    async createComment(ctx) {

        let responst;
        const { userid, content, articleid } = ctx.request.body;
        const data = await CommentModel.create({
            articleId: articleid,
            content,
            userId: userid
        })
        ctx.body = { code: '200', data }

    },

    async delete(ctx) {
        let respones;

        const { commentid, userid } = ctx.query;

        const data = await CommentModel.findOne({
            where: { id: commentid }
        })

        const { userId } = data;

        if (userId == userid) {
            await CommentModel.destroy({
                where: { id: commentid }
            })
            response = { code: '200', message: '删除成功' };

        } else {
            response = { code: '0', message: '您没有权限删除' };
        }
        ctx.body = response;

    }

}