const { replay: replayModel } = require('../models')

module.exports = {
    async createReplay(ctx) {
        let response;
        const { content, userid, commentid, articleid } = ctx.request.body;
        const data = await replayModel.create({
            content,
            userId: userid,
            commentId: commentid,
            articleId: articleid

        })
        response = { code: '200', data }
        ctx.body = response;

    },
    async getReplay(ctx) {
        let response;
        let query = {};
        const { userid, commentid, articleid } = ctx.query;
        if (userid) {
            query = { userId: userid }
        } else if (commentid) {
            query = { commentId: commentid }
        } else if (articleid) {
            query = { articleId }
        }
        const data = await replayModel.findAll({
            where: query
        })
        response = { code: '200', ...data }
        ctx.body = response
    },
    async delete(ctx) {
        let response;
        const { commentId, replayId } = ctx.query;
        if (relayId) {
            await replayModel.destroy({ where: { id: replayId } })
            response = { code: '200', message: '成功删除该回复' }
        } else {
            response = { code: '0', message: 'id不能为空' }
        }
        ctx.body = response

    }
}