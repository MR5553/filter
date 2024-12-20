// const express = require('express');
// const router = express.Router();
// const Product = require('../models/Product'); // Product model

// router.post('/add-product', async (req, res) => {
//     try {
//         const { name, category, brand, price, stock, description, specifications } = req.body;

//         // Validate based on category
//         let categorySpecifications;
//         if (category === "Electronics") {
//             categorySpecifications = {
//                 processor: specifications.processor,
//                 ram: specifications.ram,
//                 storage: specifications.storage,
//                 screenSize: specifications.screenSize,
//                 battery: specifications.battery,
//                 operatingSystem: specifications.operatingSystem,
//             };
//         } else if (category === "Clothing") {
//             categorySpecifications = {
//                 material: specifications.material,
//                 size: specifications.size,
//                 color: specifications.color,
//                 gender: specifications.gender,
//             };
//         } else if (category === "Furniture") {
//             categorySpecifications = {
//                 dimensions: specifications.dimensions,
//                 material: specifications.material,
//                 color: specifications.color,
//                 weightCapacity: specifications.weightCapacity,
//             };
//         } else {
//             return res.status(400).json({ message: "Unsupported category" });
//         }

//         // Create product
//         const newProduct = new Product({
//             name,
//             category,
//             brand,
//             price,
//             stock,
//             description,
//             specifications: categorySpecifications,
//         });

//         await newProduct.save();
//         res.status(201).json({ message: "Product added successfully", product: newProduct });
//     } catch (error) {
//         res.status(500).json({ message: "Error adding product", error: error });
//     }
// });

// module.exports = router;

// import React, { useState } from 'react';
// import axios from 'axios';

// const AddProduct = () => {
//     const [category, setCategory] = useState('');
//     const [productData, setProductData] = useState({
//         name: '',
//         brand: '',
//         price: 0,
//         stock: 0,
//         description: '',
//         specifications: {},
//     });

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setProductData((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleSpecificationChange = (e) => {
//         const { name, value } = e.target;
//         setProductData((prev) => ({
//             ...prev,
//             specifications: { ...prev.specifications, [name]: value },
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('/api/products/add-product', productData);
//             alert('Product added successfully');
//             console.log(response.data);
//         } catch (error) {
//             console.error(error);
//             alert('Error adding product');
//         }
//     };

//     return (
//         <form onSubmit= { handleSubmit } >
//         <input name="name" placeholder = "Name" onChange = { handleInputChange } />
//             <select name="category" onChange = {(e) => setCategory(e.target.value)}>
//                 <option value="" > Select Category </option>
//                     < option value = "Electronics" > Electronics </>
//                         < option value = "Clothing" > Clothing </>
//                             < option value = "Furniture" > Furniture </>
//                                 </select>
//                                 < input name = "brand" placeholder = "Brand" onChange = { handleInputChange } />
//                                     <input name="price" type = "number" placeholder = "Price" onChange = { handleInputChange } />
//                                         <input name="stock" type = "number" placeholder = "Stock" onChange = { handleInputChange } />
//                                             <textarea name="description" placeholder = "Description" onChange = { handleInputChange } > </textarea>

// {/* Dynamic Specifications */ }
// {
//     category === 'Electronics' && (
//         <>
//         <input name="processor" placeholder = "Processor" onChange = { handleSpecificationChange } />
//             <input name="ram" type = "number" placeholder = "RAM (GB)" onChange = { handleSpecificationChange } />
//                 <input name="storage" type = "number" placeholder = "Storage (GB)" onChange = { handleSpecificationChange } />
//                     <input name="screenSize" type = "number" placeholder = "Screen Size (inches)" onChange = { handleSpecificationChange } />
//                         </>
//       )
// }
// {
//     category === 'Clothing' && (
//         <>
//         <input name="material" placeholder = "Material" onChange = { handleSpecificationChange } />
//             <input name="size" placeholder = "Size" onChange = { handleSpecificationChange } />
//                 <input name="color" placeholder = "Color" onChange = { handleSpecificationChange } />
//                     </>
//       )
// }
// {
//     category === 'Furniture' && (
//         <>
//         <input name="dimensions" placeholder = "Dimensions (LxWxH)" onChange = { handleSpecificationChange } />
//             <input name="material" placeholder = "Material" onChange = { handleSpecificationChange } />
//                 <input name="color" placeholder = "Color" onChange = { handleSpecificationChange } />
//                     </>
//       )
// }

// <button type="submit" > Add Product </button>
//     </form>
//   );
// };

// export default AddProduct;
