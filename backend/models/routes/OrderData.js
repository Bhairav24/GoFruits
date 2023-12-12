// const express=require('express');

// const router=express.Router();

// const Order=require('../Orders')

// router.post('/orderData',async(req,res)=>
// {
//     let data=req.body.order_data

//     await data.splice(0,0,{Order_date:req.body.order_date})

//     let eID=await Order.findOne({'email':req.body.email})

//     console.log(eID)
//     if(eID===null){
//         try{
//             await Order.create({
//                 email:req.body.email,
//                 order_data:[data]
//             }).then(()=>{
//                 res.json({success:true})
//             })
//         }
//         catch(error){
//             console.log(error.message)
//             res.send("Server Error",error.message)
//         }
//     }
// else{
//     try{
//         await Order.findOneAndUpdate({ email:req.body.email},
//             {
//                 $push:{order_data:data}}).then(()=>{
//                     res.json({success:true})
//                 })
//             }
//                 catch (error){
//                     res.status(500).send(error.message)
//                 }
//             }
   
// })

// module.exports=router;

const express = require('express');
const router = express.Router();
const Order = require('../Orders');

router.post('/orderData', async (req, res) => {
  let data = req.body.order_data;
  //data.unshift({ Order_date: req.body.order_date });
  await data.splice(0,0,{Order_date:req.body.order_date})
 

  try {
    let eID = await Order.findOne({ email: req.body.email });
    if (eID === null) {
      await Order.create({
        email: req.body.email,
        order_data: [data]
      }).then(() => {
        res.json({ success: true });
      });
    } else {
      await Order.findOneAndUpdate(
        { email: req.body.email },
        { $push: { order_data: data } }
      ).then(() => {
        res.json({ success: true });
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});


router.post('/myorderData', async (req, res) => {
try{
let eID=await Order.findOne({'email':req.body.email})
res.json({orderData:eID})

}catch(error){
res.send("Server Error",error.message)
}

})



module.exports = router;
