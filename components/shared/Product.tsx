// "use client"
// import React, { useState } from "react";
// import Cards from "./Cards";

// interface ProductProps {
//   products: {
//     category: string;
//     title: string;
//     price: number;
//     short_details: string;
//     long_details: string;
//     image: string;
//     _id: string;
//   }[];
//   categories: string; // Assuming categories is now a string
// }

// const Products = ({ products, categories }: ProductProps) => {
//   const [searchInput, setSearchInput] = useState("");
//   const [selectCategory, setSelectCategory] = useState("all");
//   const [sortOption, setSortOption] = useState("default");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(8);

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchInput(e.target.value);
//   };

//   const filterItems = (category: string) => {
//     setSelectCategory(category);
//     setCurrentPage(1);
//   };

//   const handleSortChange = (option: string) => {
//     setSortOption(option);
//     setCurrentPage(1);
//   };

//   const paginate = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//   };

//   const filteredItems = products.filter((item) => {
//     if (selectCategory !== "all" && item.category !== selectCategory) {
//       return false;
//     }
//     if (
//       !item.title.toLowerCase().includes(searchInput.toLowerCase()) &&
//       !item.short_details.toLowerCase().includes(searchInput.toLowerCase())
//     ) {
//       return false;
//     }
//     return true;
//   });

//   const sortedItems = [...filteredItems].sort((a, b) => {
//     switch (sortOption) {
//       case "A-Z":
//         return a.title.localeCompare(b.title);
//       case "Z-A":
//         return b.title.localeCompare(a.title);
//       case "low-to-high":
//         return a.price - b.price;
//       case "high-to-low":
//         return b.price - a.price;
//       default:
//         return 0;
//     }
//   });

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);

//   return (
//     <div>
//       {/* Search Input */}
//       <div className="my-4">
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={searchInput}
//           onChange={handleSearchChange}
//           className="rounded-md border p-2 text-black"
//         />
//       </div>

//       {/* Category Filter */}
//       <div className="mb-4">
//         <button
//           onClick={() => filterItems("all")}
//           className={selectCategory === "all" ? "bg-gray-200" : ""}
//         >
//           All
//         </button>
//         {/* Assuming categories is a comma-separated string */}
//         {categories.split(",").map((category) => (
//           <button
//             key={category}
//             onClick={() => filterItems(category)}
//             className={selectCategory === category ? "bg-gray-200" : ""}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Sorting Options */}
//       <div className="mb-4">
//         <select
//           onChange={(e) => handleSortChange(e.target.value)}
//           value={sortOption}
//           className="rounded-md border p-2 text-black"
//         >
//           <option value="default">Default</option>
//           <option value="A-Z">A-Z</option>
//           <option value="Z-A">Z-A</option>
//           <option value="low-to-high">Low to High</option>
//           <option value="high-to-low">High to Low</option>
//         </select>
//       </div>

     

//       {/* Pagination */}
//       <div className="mt-4 flex justify-center">
//         {Array.from({ length: Math.ceil(sortedItems.length / itemsPerPage) }).map(
//           (_, index) => (
//             <button
//               key={index}
//               onClick={() => paginate(index + 1)}
//               className={`mx-1 rounded-full px-3 py-1 ${
//                 currentPage === index + 1 ? "bg-primary text-black" : "bg-gray-200"
//               }`}
//             >
//               {index + 1}
//             </button>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default Products;
