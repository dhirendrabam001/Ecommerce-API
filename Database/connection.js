const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("MongooseDB Altas Connection Successfully");
})
.catch((error) => {
    console.log("No MongooseDB Altas Connection", error); 
});