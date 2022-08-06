const fileUplaod = require('express-fileupload');
const { appendFile } = require('fs');

app.post('/upload', function(req,res) {
    console.log(req.files.foo.mv);
});
// foo is what we use for the input form in the html