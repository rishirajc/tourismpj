const { POST, GET, UPDATE, DELETE, Otp, imageupoad, forgotpassword } = require('../ControllerPage/AppController')
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
router.post('/postdata',POST)
router.get('/getdata/:id', GET)
router.put('/update/:id',UPDATE)
router.delete('/delete/:id',DELETE)
router.post('/otp',Otp)
router.post('/img',upload.single('Image'), imageupoad)
router.get('/otpverify',forgotpassword)
module.exports=router