const { POST, GET, UPDATE, DELETE, Otp, imageupoad, forgotpassword, GETOTP } = require('../ControllerPage/AppController')
const verify = require('../VerifyToken')
const multer=require('multer')
const storage1 = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './Image/')
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname)
    }
  })
  
  const upload = multer({ storage: storage1 })


const router=require('express').Router()
router.post('/postdata',verify, POST)
router.get('/getdata/:id',verify, GET)
router.put('/update/:id',verify,UPDATE)
router.delete('/delete/:id',verify,DELETE)
router.post('/otp',verify,Otp)
router.post('/img',upload.single('Image'), imageupoad)
router.get('/otpverify',verify,forgotpassword)
router.get('/otpemail',verify,GETOTP)
module.exports=router