const {saveUserForWork} = require('../model')

const saveUserForWorkController = async (req, res) => {
    const {data} = req.body;
    const result = await saveUserForWork(req.user, {data: JSON.parse(data)})
    res.status(201).json({message: 'card saved'})
}

module.exports = {
    saveUserForWorkController
}