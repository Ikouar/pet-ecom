    import axios from "axios";
    import React, { useEffect, useState } from "react";
    import { useDispatch, useSelector } from "react-redux";
    import { fetchCategories } from "../../services/reducer/categorySlice";
import CategoryForm from "./CategoryForm";

    const CategoryList = () => {
    const categories = useSelector((state) => state.category.categories);
    const currentPage = useSelector((state) => state.category.currentPage);
    const totalPages = useSelector((state) => state.category.totalPages);

        const dispatch = useDispatch();

    
    // State variables for search, pagination, sorting, and limit
    const [limit, setLimit] = useState(5);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("name");
    const [sortOrder, setSortOrder] = useState("asc");


    // State variable to control form visibility and mode (add/edit)
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [formMode, setFormMode] = useState("add");
    const [editCategoryData, setEditCategoryData] = useState(null);
    
    useEffect(() => {
        dispatch(fetchCategories({ search: searchQuery, limit, sortBy, sortOrder }));
    }, [dispatch, searchQuery, limit, sortBy, sortOrder]);
    console.log(categories.categories);

    const handlePageChange = (newPage) => {
        dispatch(fetchCategories({ search: searchQuery, limit, sortBy, sortOrder, page: newPage }));
    }
    
    // Function to handle limit change
    const handleLimitChange = (e) => {
        setLimit(parseInt(e.target.value));
    };

    // Function to handle search change
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleAddCategory = () => {
        setFormMode("add");
        setIsFormVisible(true);
    };

    const handleEditCategory = (category) => {
        setFormMode("edit");
        setIsFormVisible(true);
    }
    
    const handleCloseForm = () => {
        setIsFormVisible(false);
        setEditCategoryData(null);
    };

    const handleSubmitForm = (formData) => {
        if (formMode === "add") {
          // Logic to add category using API call
        } else if (formMode === "edit") {
          // Logic to edit category using API call
        }
        handleCloseForm();
    };


    return (
        <div className="bg-teal-400 h-screen">
        <div className="p-3 bg-teal-400 sm:ml-64 overflow-hidden">
            <div className="bg-white p-3 shadow-md sm:rounded-lg">
            <h3 className="text-xl">All Categories</h3>

            <div className="flex justify-end items-center mb-8">
                <div className="flex items-center">
                <div className="mr-5">
                    <span>Items per page:&nbsp;</span>
                    <select
                    className="border border-gray-300 text-gray-500 rounded px-3 py-1"
                    value={limit}
                    onChange={handleLimitChange}
                    >
                    <option>3</option>
                    <option>5</option>
                    <option>7</option>
                    </select>
                </div>
                <input
                    type="text"
                    className="text-sm bg-white bg-opacity-0 block ps-10 p-2.5 border-0 border-b-2 border-grey-dark placeholder-gray-400"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                </div>
                <button
                onClick={handleAddCategory}
                className="p-2 hover:bg-teal-500 rounded-lg bg-teal-400 text-white"
                >
                Add Category
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="text-center w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                    <tr>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => (
                    <tr
                        key={category._id}
                        className="text-gray-900 bg-gray-50 hover:bg-gray-100"
                    >
                        <td className="px-6 py-3">{category.name}</td>
                        <td className="px-6 py-3 flex h-[100px] items-center justify-center gap-3">
                        <button>
                            <img src="view.png" alt="view" className="h-[20px]" />
                        </button>
                        <button>
                            <img src="edit.png" alt="edit" className="h-[20px]" />
                        </button>
                        <button>
                            <img
                            src="delete.png"
                            alt="delete"
                            className="h-[20px]"
                            />
                        </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            <div className="flex justify-center mt-4">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  className={`mx-1 px-3 py-1 rounded-lg ${
                    currentPage === index + 1
                      ? "bg-teal-400 hover:bg-teal-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-600"
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            </div>
        </div>
        {isFormVisible && (
            <CategoryForm
            mode={formMode}
            categoryData={editCategoryData}
            onSubmit={handleSubmitForm}
            onClose={handleCloseForm}
            />
        )}
        </div>
    );
    };

    export default CategoryList;
