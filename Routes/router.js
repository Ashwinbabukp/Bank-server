const express= require('express')
const userController = require('../controllers/userController')
const middleware = require('../middlewares/authMiddleware')
const router = new express.Router()


// register -http://localhost:3000/register
router.post("/register",userController.register)


router.post("/login",userController.login)

router.get("/get-balance/:acno",middleware.jwtMiddleware, userController.getbalance)

// found transfer
router.post("/fund-transfer",middleware.jwtMiddleware,userController.fundtransfer)

//get transactions 
router.get("/get-transaction",middleware.jwtMiddleware, userController.gettransactions)

// delete
router.delete("/delete-account",middleware.jwtMiddleware, userController.deleteAcno)

module.exports = router

