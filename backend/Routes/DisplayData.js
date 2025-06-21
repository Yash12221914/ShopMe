const express = require('express')
const router = express.Router()

router.post('/clothData',(req,res)=>{
    try {
        console.log(global.cloth_items)
        res.send([global.cloth_items])
    } catch (error) {
        console.error(error.message);
        res.send("Server Error") 
    }
})

module.exports = router;