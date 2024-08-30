import { useState } from "react";
import { useDispatch } from "react-redux";
import "./admin.css";
import { productsAdd } from "../../slices/productSlice";

const Admin = () => {
  const dispatch = useDispatch();
  const [productImgs, setProductImgs] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isNewArrival, setIsNewArrival] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");

  const handleProductImageUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => TransformFile(file));
  };

  const TransformFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImgs((prevState) => [...prevState, reader.result]);
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = {
      name,
      description,
      price,
      isNewArrival,
      category,
      rating,
      images: productImgs,
    };

    console.log("Product Data: ", productData);

    dispatch(productsAdd(productData));
  };

  return (
    <div className="admin-add-product">
      <h2 className="admin-form-title">Add New Product</h2>
      <form className="admin-product-form" onSubmit={handleSubmit}>
        <div className="admin-form-group">
          <label className="admin-form-label" htmlFor="name">
            Product Name
          </label>
          <input
            className="admin-form-input"
            type="text"
            id="name"
            name="name"
            placeholder="Enter product name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="admin-form-group">
          <label className="admin-form-label" htmlFor="description">
            Description
          </label>
          <textarea
            className="admin-form-textarea"
            id="description"
            name="description"
            placeholder="Enter product description"
            required
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="admin-form-group">
          <label className="admin-form-label" htmlFor="price">
            Price
          </label>
          <input
            className="admin-form-input"
            type="number"
            id="price"
            name="price"
            placeholder="Enter product price"
            required
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="admin-form-group">
          <label className="admin-form-label" htmlFor="category">
            Category
          </label>
          <select
            className="admin-form-input"
            id="category"
            name="category"
            required
            defaultValue=""
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              Select category
            </option>
            <option value="Gaming Consoles">Gaming Consoles</option>
            <option value="PCs">Gaming PCs</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>
        <div className="admin-form-group">
          <label className="admin-form-label" htmlFor="rating">
            Rating
          </label>
          <input
            className="admin-form-input"
            type="number"
            step="0.1"
            id="rating"
            name="rating"
            placeholder="Enter product rating"
            required
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div className="admin-form-group">
          <label className="admin-form-label" htmlFor="isNewArrival">
            New Arrival
          </label>
          <select
            className="admin-form-input"
            id="isNewArrival"
            name="isNewArrival"
            required
            defaultValue=""
            onChange={(e) => setIsNewArrival(e.target.value)}
          >
            <option value="" disabled>
              Is this a new arrival?
            </option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="admin-form-group">
          <label className="admin-form-label" htmlFor="images">
            Images
          </label>
          <input
            className="admin-form-input"
            type="file"
            id="images"
            name="images"
            multiple
            required
            accept="image/*"
            onChange={handleProductImageUpload}
          />
        </div>
        <button className="admin-form-btn" type="submit">
          Add Product
        </button>
      </form>
      <div className="img-preview">
        <h3>Product Image Preview</h3>
        {productImgs.length > 0 ? (
          productImgs.map((img, index) => (
            <img key={index} src={img} alt="product image!" />
          ))
        ) : (
          <p>Image preview</p>
        )}
      </div>
    </div>
  );
};

export default Admin;
