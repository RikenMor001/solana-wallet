
const mongoose = requrie("mongoose")
mongoose.connect();

const UserSchema = mongoose.Schema({
    username: String,
    password: String,
    publicKey: String,
    privateKey: String  
})

const userModel = mongoose.Model("user", UserSchema);

module.exports = {
    userModel
}
