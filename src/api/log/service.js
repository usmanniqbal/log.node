async function insert(projectId, collection, data) {
    try {
        if (!projectId) {
            throw new Error('Invalid ProjectId');
        }
        const dbName = projectId;
        var db = await require('api/db').get(dbName);
        const AuditLog = db.model(collection, require('./model'));
        return await new AuditLog({
            projectId,
            key: data.id,
            data
        }).save();
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getByKey(projectId, collection, key) {
    try {
        if (!projectId) {
            throw new Error('Invalid ProjectId');
        }
        const dbName = projectId;
        const db = await require('api/db').get(dbName);
        const AuditLog = db.model(collection, require('./model'));
        return await AuditLog.find({ key });
    } catch (error) {
        console.log(error);
        throw error;
    }
}


async function find(projectId, collection, searchExp) {
    try {
        if (!projectId) {
            throw new Error('Invalid ProjectId');
        }
        const dbName = projectId;
        const db = await require('api/db').get(dbName);
        const AuditLog = db.model(collection, require('./model'));
        // return await AuditLog.find({ data: { $elemMatch: searchExp } });
        return await AuditLog.find(searchExp);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    insert,
    getByKey,
    find
}