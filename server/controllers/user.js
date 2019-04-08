const { user: UserModel } = require('../models')
const { createToken, checkAuth } = require('../configs/token')

module.exports = {
    async register(ctx) {
        const { username, password } = ctx.request.body;
        if (username && password) {
            const checkUser = await UserModel.findOne({ where: { username } });
            let response;
            if (checkUser) {
                response = { code: 404, message: '用户名已被注册' };
            } else {
                await UserModel.create({ username, password });
                response = { code: 200, message: '注册成功' };
            }
            ctx.body = response;
        } else {
            ctx.body = { code: 400, message: '用户名或密码不能为空' };
        }
    },

    async login(ctx) {
        const { username, password } = ctx.request.body;
        if (username && password) {
            const checkUser = await UserModel.findOne({ where: { username } });
            let response;
            if (checkUser) {
                if (checkUser.password == password) {
                    const { id, auth } = checkUser
                    const token = createToken({ username, id, auth })
                    response = { code: 200, message: '登陆成功', username, 'auth': auth, token }
                } else {
                    response = { code: 0, message: '密码不正确' }
                }
            } else {
                response = { code: 0, message: '没有此用户' }
            }
            ctx.body = response;

        }
    },

    async index(ctx) {

        const isAuth = checkAuth(ctx);
        if (isAuth) {
            ctx.body = { code: 200, message: '登陆成功' }
        }

    },


    async getUserList(ctx) {
        const isAuth = checkAuth(ctx);
        if (isAuth) {
            let { page = 1, pageSize = 10, username } = ctx.query
            const offset = (page - 1) * pageSize
            pageSize = parseInt(pageSize)

            const params = username ? { username: { $like: `%${username}%` } } : {}

            const data = await UserModel.findAll({
                attributes: ['id', 'username', 'createAt'],
                where: { ...params },
                offset,
                limit: pageSize,
                row: true,
                distinct: true,
                order: [
                    ['createAt', 'DESC']
                ]
            })
            ctx.body = { code: 200, ...data }
        }

    },

    async delete(ctx) {
        const isAuth = checkAuth(ctx);
        if (isAuth) {
            let { userId } = ctx.query
            userId = parseInt(userId)
            await UserModel.destroy({ where: { id: userId } })
            ctx.body = { code: 200, message: '成功删除用户' }
        }
    }



}