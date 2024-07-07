import  { useState } from 'react';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    rating: '',
    isNewArrival: false,
  });
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('price', product.price);
    formData.append('category', product.category);
    formData.append('rating', product.rating);
    formData.append('isNewArrival', product.isNewArrival);

    for (const file of files) {
      formData.append('files', file);
    }

    try {
      const response = await fetch('http://localhost:3000/api/upload', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      setMessage(result.message);
    } catch (error) {
      console.error('Error uploading product:', error);
      setMessage('Error uploading product');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleInputChange} />
      <input type="text" name="description" placeholder="Description" onChange={handleInputChange} />
      <input type="number" name="price" placeholder="Price" onChange={handleInputChange} />
      <input type="text" name="category" placeholder="Category" onChange={handleInputChange} />
      <input type="number" name="rating" placeholder="Rating" onChange={handleInputChange} />
      <label>
        New Arrival
        <input type="checkbox" name="isNewArrival" onChange={() => setProduct({ ...product, isNewArrival: !product.isNewArrival })} />
      </label>
      <input type="file" multiple onChange={handleFileChange} />
      <button type="submit">Add Product</button>
      <p>{message}</p>
    </form>
  );
};

export default AddProduct;