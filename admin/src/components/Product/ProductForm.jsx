import axios from "axios";
import React, { useState, useEffect } from "react";
// petcom

// const ProductForm = ({ onSubmit }) => {
const ProductForm = ({ isOpen, onClose, onSubmit }) => {
  //   const [isOpen, setIsOpen] = useState(open);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(""); // Store image data (e.g., URL or file object)

  //   const handleOpen = () => setIsOpen(true);
  //   const handleClose = () => setIsOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await uploadImage();
      console.log(
        "----------------------------------------------------------------"
      );
      console.log(name);
      console.log(price);
      console.log(description);
      console.log(category);
      console.log(file);
      console.log(quantity);
      console.log(image);
      console.log("------------------------------------------------");
      onSubmit({ name, price, description, category, quantity, image });
    } catch (error) {
      console.error(error);
    }
    handleClose(); // Close modal after submit
  };
  const handleClose = () => {
    onClose();
    setName("");
    setPrice(0);
    setDescription("");
    setCategory(null);
    setFile(null);
    setQuantity(0);
    setImage("");
  };
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && !e.target.closest(".max-w-sm")) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  const uploadImage = async () => {
    console.log("Uploading image");
    const formm = new FormData();
    formm.append("file", file);
    formm.append("upload_preset", "petcom");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dk28itsov/image/upload",
        formm
      );
      console.log(response.data.secure_url);
      const upload_preset = await response.data.secure_url;
      setImage(upload_preset);
      console.log(response.data.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  return (
    <>
      {/* <button onClick={handleOpen}>Add Product</button> */}
      {isOpen && (
        // <div className="max-w-sm mx-auto">
        //   <div className="bg-white p-6 rounded-lg shadow-md">
        //     <span className="text-gray-700 text-2xl cursor-pointer absolute top-0 right-0" onClick={handleClose}>&times;</span>
        <div className="fixed  inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-teal-400 shadow p-3">
            <div className="bg-white p-5 rounded-lg w-[350px] flex flex-col gap-3">
            <h2 className="text-xl text-gray-800 mb-3 ">Add new product</h2>
            <button
              onClick={handleClose}
              className="absolute top-14 right-14 text-gray-600 hover:text-gray-800 focus:outline-none bg-white rounded-full p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block px-0 w-full text-sm  bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-gray-500 focus:outline-none focus:ring-0 focus:border-teal-400 peer"
                    required
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm text-gray-900 "
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="block px-0 w-full text-sm  bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-gray-500 focus:outline-none focus:ring-0 focus:border-teal-400 peer"
                    //   required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm  text-gray-900 "
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="block px-0 w-full text-sm  bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-gray-500 focus:outline-none focus:ring-0 focus:border-teal-400 peer"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm text-gray-900 "
                  >
                    Category
                  </label>
                  <input
                    type="text"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="block px-0 w-full text-sm  bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-gray-500 focus:outline-none focus:ring-0 focus:border-teal-400 peer"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="quantity"
                    className="block mb-2 text-sm text-gray-900 "
                  >
                    Quantity
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="block px-0 w-full text-sm  bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-gray-500 focus:outline-none focus:ring-0 focus:border-teal-400 peer"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="productImage"
                    className="block mb-2 text-sm  text-gray-900 "
                  >
                    Product Image (optional)
                  </label>
                  <input
                    type="file"
                    id="productImage"
                    onChange={(event) => setFile(event.target.files[0])}
                    className="block px-0 w-full text-sm  bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-gray-500 focus:outline-none focus:ring-0 focus:border-teal-400 peer"
                  />
                </div>
                <button
                  type="submit"
                  className="block w-full p-1 text-white bg-teal-400 hover:bg-teal-500 border border-transparent rounded-lg shadow-sm   "
                >
                  Add Product
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductForm;
