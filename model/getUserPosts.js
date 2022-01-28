const axios = require('axios')

const getUserPosts = async (userId) => {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    return data
}

module.exports = {
    getUserPosts
}