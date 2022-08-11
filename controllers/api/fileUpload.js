const router = require('express').Router();
const { appendFile } = require('fs'); // to save file

router.post('/signup', function(req,res) { // using path '/signup' since that's where the upload is
    console.log(req.files.foo); //this console log isn't coming up
});
// foo is what we use for the input form in the html

module.exports = router;