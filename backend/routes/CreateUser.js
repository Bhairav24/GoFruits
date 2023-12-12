const express=require('express');

const router=express.Router();

const User=require('../models/User');


const bcrypt=require('bcryptjs');

const jwt=require("jsonwebtoken")

const jwtSecret=process.env.JWT_SECRET;
const {body, validationResult}=require('express-validator')

router.post('/create',
[body('email').isEmail(),
body('password').isLength({min:4}),body('name').notEmpty()]
,async (req,res)=>{

    const errors=validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    try {
    const salt=await bcrypt.genSalt(10);

    let SecurePassword= await bcrypt.hash(req.body.password, salt);

 
   await User.create({
        name: req.body.name,
        password: SecurePassword,
        email:req.body.email,
        location:req.body.location
    }).then(res.json({success:true}));
   } catch (error) {

    console.log(error);
   json.res(error);
    
   }
});
 
router.post('/login',[body('email').isEmail(),
body('password').isLength({min:4})],

async (req,res)=>{
    const errors=validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }


    let email=req.body.email;
    
   try {

  let userData = await User.findOne({email});

  if(!userData){
    return res.status(400).json({errors:" Try Logging With Correct "});

}

const pwdCompare= await bcrypt.compare(req.body.password,userData.password)

if(!pwdCompare){
    return res.status(400).json({errors:" Try Logging With Correct Credentials 2"});
}

//req.body.password!==userData.password

const data={
    user:{
        id:userData.id
    }
}
const authToken=jwt.sign(data,jwtSecret)

//const authToken=jwt.sign(data,jwtSecret)

return res.json({success:true,authToken:authToken})

  } catch (error) {

    console.log(error);
   json.res(error);
    
   }
})
module.exports=router;

