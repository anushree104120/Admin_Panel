// import { useNavigate } from 'react-router-dom';
import productsData from '../Data'
import React, { useState,  useEffect  } from 'react';
import './Product.css'

// import productsData from './productsData'; // Importing the mock data

function Product({onAddProduct}) {

  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem('products')) || productsData
  );
  const [addingProduct, setAddingProduct] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);
  // const [editProductc,setEditingProduct]=useState(false);

  useEffect(() => {
    // Save products to local storage whenever products change
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleAddProduct = () => {
    setAddingProduct(true);
  };
  // const handleEditProduct=()=>{
  //   setEditingProduct(true);
  // }
  

  const handleSaveProduct = (newProduct) => {
    if (editingProductId !== null) {
      // If editing an existing product
      const updatedProducts = products.map(product => {
        if (product.id === editingProductId) {
          return { ...product, ...newProduct };
        }
        return product;
      });
      setProducts(updatedProducts);
      setEditingProductId(null);
      
    }else{
      setProducts([...products, newProduct]);
    }
    
    setAddingProduct(false);
    if (typeof onAddProduct === 'function') {
      onAddProduct(); // Notify App.js about the addition of a new product
    }
    // navigate('/dashboard'); // Pass updated product count to dashboard
    // onAddProduct()
  };

  //delete product
  const delProduct = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
    if (typeof onAddProduct === 'function') {
      onAddProduct();
    }
  };

  //edit product
  const editProduct = (productId) => {
    setEditingProductId(productId);
    // setEditingProduct(true);
  
    const productToEdit = products.find(product => product.id === productId);
   
  };

  return (
    <>
    <div className="add-edit-delete">
      <h2>Manage Your Products</h2>
      <button onClick={handleAddProduct} className="add-product">Add Product</button></div>
      <table id="customers" className="centered">
     
        <thead >
          <tr >
            <th style={{textAlign:'center'}}>Name</th>
            <th style={{textAlign:'center'}}>Category </th>
            <th style={{textAlign:'center'}}>Price</th>
            <th style={{textAlign:'center'}}>Stock</th>
            <th style={{textAlign:'center'}}>Edit/Delete</th>
          </tr>
        </thead>
      <tbody>
        {products.map(product => (
          editingProductId===product.id ? <EditProductForm product={product} onSaveProduct={handleSaveProduct}/>:
          <tr key={product.id}>
            <td> {product.name}</td>
            <td> {product.category}</td>
            <td> ${product.price}</td>
            <td> {product.stock}</td>
           <td > <button onClick={()=>editProduct(product.id)} className="edit-del-btn">Edit</button>
          <button onClick={() => delProduct(product.id)} className="edit-del-btn">Delete</button></td> 
          </tr>
        ))}
       
      
     
       </tbody>

     
</table>
{addingProduct && (
        <AddProductForm onSaveProduct={handleSaveProduct} />
      )}
      
    </>
  );
}

function AddProductForm({ onSaveProduct }) {
  const [newProduct, setNewProduct] = useState({
    id: Math.random().toString(36).substr(2, 9), // Generate a unique ID
    name: '',
    category: '',
    price: '',
    stock: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveProduct(newProduct);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={newProduct.name}
        onChange={handleChange}
        placeholder="Product Name"
        required
      />
      <input
        type="text"
        name="category"
        value={newProduct.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <input
        type="number"
        name="price"
        value={newProduct.price}
        onChange={handleChange}
        placeholder="Price"
        required
      />
      <input
        type="number"
        name="stock"
        value={newProduct.stock}
        onChange={handleChange}
        placeholder="Stock"
        required
      />
      <button type="submit">Save</button>
    </form>
  );
}

function EditProductForm({product,onSaveProduct}){
  const [name, setName] = useState(product.name);
  const [category, setCategory] = useState(product.category);
  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(product.stock);
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...product,
      name,
      category,
      price,
      stock
    };
    onSaveProduct(updatedProduct);
  };

  return (
    <div>
     
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
          required
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          required
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          required
        />
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="Stock"
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}


export default Product;

