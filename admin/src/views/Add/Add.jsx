import React, { useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios"
import { toast } from "react-toastify";


const Add = ({ url }) => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: ""
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!image) {
      toast.error("Please upload an image.");
      return;
    }

     if (data.price <= 0) {
      toast.error("Please enter a valid price.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", Number(data.price));
      formData.append("category", data.category);
      formData.append("image", image);

      console.log("using URL:", url)
      const response = await axios.post(`${url}/api/food/add`, formData);

      if (response.data.success) {
        toast.success(response.data.message);
        setData({ name: "", description: "", price: "", category: "" });
        setImage(null);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="upload-preview"
            />
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            hidden
            required
          />
        </div>

        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            type="text"
            name="name"
            placeholder="Type here"
            value={data.name}
            onChange={onChangeHandler}
            required
          />
        </div>

        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea
            name="description"
            rows="6"
            placeholder="Type content here"
            value={data.description}
            onChange={onChangeHandler}
            required
          />
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select
              name="category"
              value={data.category}
              onChange={onChangeHandler}
              required
            >
              <option value="" disabled>Select category</option>
              <option value="Starters">Starters</option>
              <option value="Mains">Mains</option>
              <option value="Dessert">Dessert</option>
              <option value="Drinks">Drinks</option>
            </select>
          </div>

          <div className="add-price flex-col">
            <p>Product Price</p>
            <input
              type="number"
              name="price"
              placeholder="$20"
              value={data.price}
              onChange={onChangeHandler}
              required
            />
          </div>
        </div>

        <button type="submit" className="add-btn">ADD</button>
      </form>
    </div>
  );
};




// const Add = ({url}) => {

//     const [image,setImage] = useState(false);
//     const [data,setData] = useState({
//         name:"",
//         description:"",
//         price:"",
//         category:""

//     })

//     const onChangeHandler = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setData(data=>({...data,[name]:value}))
//     }

//     const onSubmitHandler = async (event) => {
//         event.preventDefault();
//         const formData = new FormData();
//         formData.append("name",data.name)
//         formData.append("description",data.description)
//         formData.append("price",Number(data.price))
//         formData.append("category",data.category)
//         formData.append("image",image)
//         const response = await axios.post(`${url}/api/food/add`,formData);
//         if (response.data.success) {
//             setData({
//                 name:"",
//                 description:"",
//                 price:"",
//                 category:""
        
//             })
//             setImage(false)
//             toast.success(response.data.message)
//         }
//         else {
//             toast.error(response.data.message)
//         }
        
//     }

//   return (
//     <div className="add">
//       <form className="flex-col" onSubmit={onSubmitHandler}>
//         <div className="add-img-upload flex-col">
//           <p>upload image</p>
//           <label htmlFor="image">
//             {" "}
//             <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
//           </label>
//           <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />
//         </div>
//         <div className="add-product-name flex-col">
//           <p>Product Name</p>
//           <input onChange={onChangeHandler} value={data.name}  type="text" name="name" placeholder="Type here" required />
//         </div>
//         <div className="add-product-description flex-col">
//           <p>Product description</p>
//           <textarea onChange={onChangeHandler} value={data.description}
//             name="description"
//             rows="6"
//             placeholder="Type Content Here"
//             required
//           ></textarea>
//         </div>
//         <div className="add-category-price">
//           <div className="add-category flex-col">
//             <p>product category</p>
//             <select onChange={onChangeHandler} name="category" required>
//               <option value="" disabled selected>
//                 Select category
//               </option>
//               <option value="Starters">Starters</option>
//               <option value="Mains">Mains</option>
//               <option value="Dessert">Dessert</option>
//               <option value="Drinks">Drinks</option>
             
//             </select>
//           </div>
//           <div className="add-price flex-col">
//             <p>Product Price</p>
//             <input onChange={onChangeHandler} value={data.price} type="number" name="price" placeholder="$20" />
//           </div>
//         </div>
//         <button type="submit" className="add-btn">
//           ADD
//         </button>
//       </form>
//     </div>
//   );
// };

export default Add;
