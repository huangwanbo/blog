const router = require('koa-router')()
const fs = require('fs-promise')
const UserController = require('../controllers/user')
const ArticleController = require('../controllers/article')
const CommentController = require('../controllers/comment')
const CategoryController = require('../controllers/category')
const ReplayController = require('../controllers/replay')
// router.get('/', async ctx => {
//     console.log('执行')
//     ctx.response.type = 'html'
//     ctx.response.body = await fs.readFile('../views/index.html', 'utf-8')
//     console.log('完成')
// })

// router.post('/', async ctx => {
//     ctx.req.addListener('data', (data) => {
//         console.log('服务器接收到的数据' + decodeURIComponent(data));
//     })
//     console.log(ctx.request.body)
//     // console.log(body)
//     // ctx.response.body = 'hello'
//     // if (!body.name) ctx.throw(400, '.name require')
//     // ctx.body = { name: body.name };
//     console.log('post')
// })
router.post('/user/register', UserController.register)
router.post('/user/login', UserController.login)
router.post('/user/index', UserController.index)
router.get('/user/getUserList', UserController.getUserList)
router.get('/user/delete', UserController.delete)


router.post('/article/create', ArticleController.CreateArticle)
router.get('/article/getArticle', ArticleController.getAllArticle)
router.post('/article/update', ArticleController.update)
router.post('/article/delete', ArticleController.delete)
router.get('/article/detail', ArticleController.getArticleDetial)
router.get('/article/bycate', ArticleController.getArticlesByCate)



router.post('/comment/create', CommentController.createComment)
router.get('/comment/delete', CommentController.delete)

router.post('/replay/create', ReplayController.createReplay)
router.get('replay/delete', ReplayController.delete)
router.get('replay/getReplay', ReplayController.getReplay)

router.get('/category/getCate', CategoryController.getCategories)
router.get('/category/getArticleFromCate', CategoryController.articleFromCate)
module.exports = router