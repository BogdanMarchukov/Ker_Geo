const {Router} = require('express')
const router = Router()

router.post('/save', async (req, res)=> {
    res.send('<h1>Test</h1>')
})

module.exports = router