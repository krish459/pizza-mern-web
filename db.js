const  mongoose  = require("mongoose");

var mongoURL = "mongodb+srv://krishshah123:thejungleking@cluster0.hnajr.mongodb.net/mern-pizza"

mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true})

var db = mongoose.connection

db.on('connected', ()=>{
    console.log(`Mongobd connection successful`);
})

db.on('error', ()=>{

    console.log(`Mongodb connection failed`);
})

module.exports = mongoose