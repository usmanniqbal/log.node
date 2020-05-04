
const authenticate = async (req, res, next) => {
    const projectId = req.headers[''];
    const secretKey = req.headers[''];
    console.log(projectId);
    console.log(secretKey);
    next();
}

module.exports = authenticate;