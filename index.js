const express = require('express');

const app = express();

app.get('/',(request,response) =>{
    return response
});


app.listen(3333);