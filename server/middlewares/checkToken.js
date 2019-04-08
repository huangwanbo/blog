// // const {TOKEN_SECRET}=require('../configs')
// // const koaJwt=require('koa-jwt')
// const { encodeToken } = require('../configs/token')
// const router = require('koa-router')()

// module.exports = () => {

//     async function checktoken(ctx, next) {
//         const token = await encodeToken(ctx);
//         if (token == null) {
//             router.redirect('/login')
//         } else {
//             next()
//         }
//     }
//     return checktoken

// }

const {TOKEN_SECRET}=require('../configs/config');
const koaJwt=require('koa-jwt')

module.exports=koaJwt({secret:TOKEN_SECRET}).unless({
	custom:ctx=>{
		const requireList=[/article\/(create|update|delet)/,/user/]

		return !requireList.find(reg=>{
			reg.test(ctx.require.url)
		})
	}
})