const axios = require('axios');

const getAllUsers = async() => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    return data
}

module.exports = {
    getAllUsers
}