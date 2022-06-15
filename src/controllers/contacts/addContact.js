const { Contact } = require('../../../models/contactSchema')

const addContactController = async (req, res) => {
  const { body } = req

  await Contact.create({body})
  .then(data => {
    res.status(201).json({ body: data, code: 201, status: 'success' })
    console.log(body)
  })
  .catch(err => {
    res.status(404).json({ message: err.Error, code: 404, status: 'falure' })
  console.log(`error info: ${err}`)
  console.log('body', body)
  })
}

module.exports = {
  addContactController
}
