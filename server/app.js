const koa = require('koa')
const db = require('./models')
const router = require('./router')
const compose = require('koa-compose')
const koaBody = require('koa-body')
const postBodyParse = require('./middlewares/parseBody')
const cors = require('koa2-cors')
const logger = require('koa-logger')
// const checktoken = require('./middlewares/checkToken');


const app = new koa();


app.use(cors({
    origin: (ctx) => {
        if (ctx.url == '/test') {
            return "*";
        }
        return 'http://localhost:8080';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],

}));
// app.use(checktoken());
app.use(logger());
app.use(koaBody());
app.use(router.routes(), router.allowedMethods());




app.listen(8080, () => {
    console.log('server was running')
    db.sequelize
        .sync({ force: false, logging: false })
        .then(() => {
            console.log('sequelize connect success')
        })
        .catch(err => {
            console.log(err)
        })
})