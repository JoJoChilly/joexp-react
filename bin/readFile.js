const fs = require('fs');
const path = require('path');
const moment = require('moment');
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
