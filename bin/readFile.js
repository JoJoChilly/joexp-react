const fs = require('fs');
const path = require('path');
const moment = require('moment');
// const Sequelize = require('sequelize');
const { Blog, sequelize } = require('./sequelize');

fs.readFile(path.resolve('./blogs/output.html'), 'utf8', (err, data) => {
    const reg = /^<h1>(.*?)<\/h1>\n([^]*)/;
    const title = data.match(reg)[1];
    const content = data.match(reg)[2];
    const publishTime = moment().format('YYYY-MM-DD HH:mm:ss');

    console.log('---- file info start ----');
    console.log(`title: ${title}`);
    console.log(`content: ${content}`);
    console.log(`publishTime: ${publishTime}`);
    console.log('---- file info end ----');

    // const sequelize = new Sequelize('joexp', 'root', 'jojojoan123', {
    //     host: 'localhost',
    //     dialect: 'mysql',
    //     charset: 'utf8',
    //     dialectOptions: {
    //         charset: 'utf8_general_ci',
    //     },

    //     pool: {
    //         max: 5,
    //         min: 0,
    //         acquire: 30000,
    //         idle: 10000,
    //     },
    // });
    // const Blog = sequelize.define('blog', {
    //     title: {
    //         type: Sequelize.STRING,
    //     },
    //     content: {
    //         type: Sequelize.STRING,
    //     },
    //     publishTime: {
    //         type: Sequelize.STRING,
    //     },
    // });

    // force: true will drop the table if it already exists
    Blog.sync({ force: false })
        .then(() =>
            // Table created
            Blog.create({
                title,
                content,
                publishTime,
            }),
        )
        .then(() => sequelize.close());
});
