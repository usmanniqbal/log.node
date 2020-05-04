const config = require('config');

async function insert(data) {
    var db = await require('db').get(config.db);
    const Account = await db.model('account', require('account/model'));
    return await new Account({
        projectId: "noprojectid",
        secretKey: "nosecret",
        ...data
    }).save();
}

module.exports = {
    insert,
}