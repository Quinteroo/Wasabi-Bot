const { bot } = require("../../utils/bot.js")



const postMessage = async (req, res, next) => {
  try {
    const { phoneNumber, message } = req.body

    const linkCode = await bot(phoneNumber, message);

    return res.status(200).json({ linkCode })

  } catch (error) {
    return res.status(400).json(error)
  }

}

module.exports = { postMessage }