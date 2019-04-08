// const isDev=process.env.NODE_ENV==='development';

const config = {
    database: 'blogdev',
    user: 'root',
    password: 'root',
    options: {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        define: {
            timestamps: false,
            freezeTableName: true
        },
        timezone: '+8:00'
    }
}

module.exports = config;