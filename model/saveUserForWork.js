const {
    CardsModel
} = require('../db/cardsModel')

const saveUserForWork = async (userData, cardInfo) => {
    const userInfo = await CardsModel.findOne({
        owner: userData._id
    })
    if (!userInfo) {
        const newCard = new CardsModel({
            savedUsers: [cardInfo],
            owner: userData._id
        })
        await newCard.save()
        return newCard
    }
    const addOrNot = await userInfo.savedUsers.filter(el => el.data.email === cardInfo.data.email)
    if(addOrNot.length > 0) return
    await CardsModel.findOneAndUpdate({owner: userData._id}, {
        savedUsers: [...userInfo.savedUsers, cardInfo]
    })

}

module.exports = {
    saveUserForWork
}