const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const CryptoJS = require("crypto-js");
const User = require('../models/User')
const router = require('express').Router();


router.put('/:id', verifyTokenAndAuthorization, async(req, res)=>{
    if (req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
    }
    try {
        const updatedUser = await User.findByIdAndUpdate( req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedUser);
      } catch (err) {
        res.status(500).json(err);
      }
    });
router.delete('/:id', verifyTokenAndAuthorization,  async (req,res)=>{
try{
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json('user Deleted');
}catch(error){
    res.status(500).json(error)
}
})

router.get('/:id',verifyTokenAndAdmin, async (req,res)=>{
 try{
    const Admin = await User.findById(req.params.id);

     const { password , ...others } = Admin._doc
     res.status(200).json(others)
    }catch(error){
     res.status(500).json(error)

 }
    })



    router.get('/', async (req,res)=>{
        const query = req.query.new;
    
        try{
           const Users = query ? await User.find().sort({_id:-1}).limit(5): await  User.find();
           const noOfUsers = await User.find().countDocuments(); 
                   res.status(200).json({Users,allUserNo: noOfUsers})
           }catch(error){
            res.status(500).json(error)
       
        }
           })

           //State 

router.get('/state', verifyTokenAndAdmin, async (req,res)=>{
    const date = new Date();
    const lastYear  = new Date(date.setFullYear(date.getFullYear() - 1));

    try{
       const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data)

    }catch(error){
        res.status(500).json(error);
    }
})
module.exports = router;