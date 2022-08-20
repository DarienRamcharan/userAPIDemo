const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
   googleAuthId: String,
   firstName: String,
   lastName: String,
   email: String,
   phoneNumber: Number,
   shippingAddrestokenId: String,
   paymentInstrumentTokenId: String    
})

module.exports = mongoose.model('User', UserSchema)