const jwt = require('jsonwebtoken')
const { TOKEN_SECRET, TOKEN_EXPRIRESIN } = require('./config')

jwt.sign({ foo: 'bar' }, 'huangwanbo', function(err, token) {
    if (err) {
        console.log(err)
    } else {
        console.log(token)
    }
})
exports.createToken = info => {
    const token = jwt.sign(info, TOKEN_SECRET, { expiresIn: TOKEN_EXPRIRESIN });
    console.log('generated token', token);
    return token;
}

const decodeToken = ctx => {
    console.log('正在验证')
    const token = ctx.headers['authorization'].split(' ')[1].replace('"', '');
    // console.log(token)
    // const data = jwt.verify(token, TOKEN_SECRET)
    console.log(token);
    const detoken = jwt.decode(token);
    return detoken;

}

exports.checkAuth = ctx => {
    const { auth } = decodeToken(ctx);
    console.log(decodeToken(ctx))
    if (auth === '0') {
        return true;
    } else {
        ctx.body = { code: 0, message: '您无权访问' }
        return false;
    }
}

      