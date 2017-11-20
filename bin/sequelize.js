const moment = require('moment');

const Sequelize = require('sequelize');

const sequelize = new Sequelize('joexp', 'root', 'jojojoan123', {
    host: 'localhost',
    dialect: 'mysql',
    charset: 'utf8',
    dialectOptions: {
        charset: 'utf8_general_ci',
    },

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const Blog = sequelize.define('blog', {
    title: {
        type: Sequelize.STRING,
    },
    content: {
        type: Sequelize.STRING,
    },
    publishTime: {
        type: Sequelize.STRING,
    },
});

// force: true will drop the table if it already exists
Blog.sync({ force: false }).then(() => {
    // Table created
    return Blog.create({
        title: 'Hello World',
        content: '数据库-博客中的第一个内容',
        publishTime: moment().format('YYYY-MM-DD HH:mm:ss'),
    });
});

Blog.findAll().then(blog => {
    console.log(blog);
});
