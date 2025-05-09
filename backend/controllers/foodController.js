import foodModel from "../models/FoodModel.js";
import cloudinary from "../config/cloudinary.js";
import fs from 'fs'


const addfood = async (req,res) => {

    try {
    const { name, description, price, category } = req.body;

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "successgrub/foods", 
    });

 
    const food = new foodModel({
      name,
      description,
      price,
      category,
      image: result.secure_url, 
    });

    await food.save();


    fs.unlink(req.file.path, () => {});

    res.json({ success: true, message: "Food Added", food: food });
  } catch (error) {
    console.error("Error in addfood:", error);
    res.json({ success: false, message: "Error adding food" });
  }   
   
   
   
   
    // let image_filename = `${req.file.filename}`;

    // const food = new foodModel({
    //     name:req.body.name,
    //     description:req.body.description,
    //     price:req.body.price,
    //     category: req.body.category,
    //     image:image_filename
    // })
    // try {
    //     await food.save();
    //     res.json({success:true,message:"Food Added"})
    // } catch (error) {
    //     console.log(error)
    //     res.json({success:false,message:"Error"})
    // }


};

const listFood = async(req,res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})
    }
}

const removeFood = async (req,res) => {


      try {
    const food = await foodModel.findById(req.body.id);
    if (!food) return res.json({ success: false, message: "Food not found" });

    // Optional: Delete from Cloudinary if you stored public_id
    // Not implemented here because public_id is not saved, only the URL

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error removing food" });
  } 
  
  // try {
    //     const food = await foodModel.findById(req.body.id);
    //     fs.unlink(`uploads/${food.image}`,()=>{})

    //     await foodModel.findByIdAndDelete(req.body.id);
    //     res.json({success:true,message:"Food Removed"})
    // } catch (error) {
    //     console.log(error);
    //     res.json({success:false,message:"Error"})
    // }
};

   


export {addfood,listFood,removeFood}