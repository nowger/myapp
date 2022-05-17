let express = require('express')
let router = express.Router()
let mapData = require('../mock/ChinaMap.json')

router.get('/data', (req, res) => {
    res.send({ msg: '我是map的路由地址', chinaData: mapData })
})

module.exports = router;