const register = (req, res) => {
  try {
    const { email, pass } = req.body
    
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

const login = (req, res) => {
  try {
    // if (!book) {
    //   return res.status(404).json({ message: `Book with ${bookId} not found` })
    // }
    // return res.json({ book })
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = { 
  register,
  login
}