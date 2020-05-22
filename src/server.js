const express = require('express');

const app = express();

require('./database');

app.use(express.json());
app.use('/users',require('./routes/users'));



app.listen(3000, () => {
    console.log("listen on port 3000")
})