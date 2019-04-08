//ruequest.body进行解析
function listen(ctx) {
    let str = "";
    return new Promise((resolve, reject) => {
        ctx.req.addListener('data', (data) => {
            str += data
        });
        ctx.req.addListener('end', () => {
            const res = jsonBodyparse(str);
            resolve(res);
        })
    })
}

function jsonBodyparse(str) {
    let parseBody = {};
    let strArr = str.split('&');
    for (let [index, item] of strArr.entries()) {
        const itemArr = item.split("=");
        parseBody[itemArr[0]] = itemArr[1];
    }
    return parseBody
}

module.exports = () => {
    async function parse(ctx, next) {
        bodyParser = await listen(ctx);
        ctx.request.body = bodyParser;
        await next();
    }
    return parse
}


// { method: 'POST',
//   url: '/',
//   header:
//    { 'content-type': 'application/x-www-form-urlencoded',
//      'cache-control': 'no-cache',
//      'postman-token': '877669a8-dd39-49ae-8944-42b91ba4ec2a',
//      'user-agent': 'PostmanRuntime/7.6.0',
//      accept: '*/*',
//      host: '127.0.0.1:8080',
//      cookie: 'name=huangwanbo; view=8',
//      'accept-encoding': 'gzip, deflate',
//      'content-length': '31',
//      connection: 'keep-alive' } }