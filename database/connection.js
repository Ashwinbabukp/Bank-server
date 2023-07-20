const mongoose = require('mongoose')


//get db connection string 
const connectionString = process.env.DATABASE

mongoose.connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("Mongodb Atles connected successfully..🚀");
}).catch((err) => {
    console.log(`Mongodb Atles connection failed...⚠️, ${err} `);
})