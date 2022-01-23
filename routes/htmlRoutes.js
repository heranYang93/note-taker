//import expreess
// import path

const { path } = require("express/lib/application");
const res = require("express/lib/response");



//router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})





module.exports = router