


const postMessage = async (req, res, next) => {
  try {

    return res.status(200).json("hola desde postMessage");

  } catch (error) {
    return res.status(400).json(error)
  }

}

module.exports = { postMessage }