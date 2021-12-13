const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');

const router = require("express").Router();
const User = require("../models/User");
const Category = require("../models/Category");

router.post("/newCategory", verifyTokenAndAdmin, async (req, res) => {
  const newCategory = await new Category(req.body);
  try {
    const saveCategory = await newCategory.save();
    res.status(200).json(saveCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
      const deleteCategory = await Category.findByIdAndDelete(req.params.id);
      res.status(200).json("Category Is Deleted  ");
   
  } catch (error) {
    res.status(500).json(error)
  }
});

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {

      try {
        const updatedCategory = await Category.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedCategory);
   
 
  } catch (err) {
    res.status(500).json(err);
  }
});
// Get One POST
router.get("/:id", async (req, res) => {
  try {
    const getCategory = await Category.findById(req.params.id);
    res.status(200).json(getCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get All POST
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;

  try {
    let posts;
    if (username) {
      Categorys = await Category.find({ username });
    } else if (catName) {
      Categorys = await Category.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      Categorys = await Category.find();
    }
    res.status(200).json(Categorys);
    const getCategory = await Category.find();
    res.status(200).json(getCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;

// const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
// const CryptoJS = require("crypto-js");
// const Product = require('../models/Product')
// const router = require('express').Router();

// router.post('/', verifyTokenAndAuthorization, async(req,res)=>{
//     const newProduct =  new Product(req.body);

//     try{
//         const saveProduct = await newProduct.save();
//         res.status(200).json(saveProduct)
//     }catch(error){
//         res.status(500).json(error)
//     }
// })

// // Start Update 

// router.put('/:id', verifyTokenAndAuthorization, async(req, res)=>{
 
//     try {
//         const updatedProduct = await Product.findByIdAndUpdate( req.params.id,
//           {
//             $set: req.body,
//           },
//           { new: true }
//         );
//         res.status(200).json(updatedProduct);
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     });

// // Delete

//     router.delete('/:id', verifyTokenAndAuthorization,  async (req,res)=>{
// try{
//     await Product.findByIdAndDelete(req.params.id);
//     res.status(200).json('Product Deleted');
// }catch(error){
//     res.status(500).json(error)
// }
// })

// router.get('/:id', async (req,res)=>{
//  try{
//     const Product = await Product.findById(req.params.id);
//      res.status(200).json(Product)
//     }catch(error){
//      res.status(500).json(error)

//  }
//     })



//     router.get('/',verifyTokenAndAdmin, async (req,res)=>{
//         const qNew = req.query.new;
//         const qCategory = req.query.Category;
    
//         try{
//             let Products;
//           if(qNew){
//             Products = await Product.find().sort({createdAt:-1}).limit(5);
//         } else if(qCategory){
//               Products = await Product.find({categories:{
//                   $in:[qCategory],
//               }})

//           }else{
//             Products = await Product.find();
//           }
       
//           res.status(200).json(Products)
//         }catch(error){
//             res.status(500).json(error);
//         }
//            })


// module.exports = router;