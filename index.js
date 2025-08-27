const express = require("express");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 2800;

app.listen(PORT, () => {
    console.log(`Server Is Running Port Number:${PORT}`);
    
});