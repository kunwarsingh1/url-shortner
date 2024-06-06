const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/url-short')

const schema = mongoose.Schema({
    url: String,
    pointing_to: String
})



const model = mongoose.model('url-short',schema)


module.exports = model