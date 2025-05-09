import express from "express";
import { addfood, listFood, removeFood} from "../controllers/foodController.js";
import multer from "multer";
import path from "path";
import os from "os";

const storage = multer.diskStorage({
  destination: os.tmpdir(), 
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueSuffix);
  }
});

const upload = multer({ storage });

const foodRouter = express.Router();

foodRouter.post("/add", upload.single("image"), addfood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);






// const foodRouter = express.Router();

// // image storage engine

// const storage = multer.diskStorage({
//     destination:"uploads",
//     filename:(req,file,cb)=>{
//         return cb(null, `${Date.now()}${file.originalname}`)
//     }
// })

// const upload = multer({storage:storage})

// foodRouter.post("/add",upload.single("image"),addfood)
// foodRouter.get("/list",listFood)
// foodRouter.post("/remove",removeFood);





export default foodRouter;