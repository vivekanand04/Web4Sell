import React from "react";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa6";

const booksData = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyNy3PGhbfxKINy6J1pfBjx2Z0yQ7nTchcUw&s",
    title: "🧠 Memory Match !",
    rating: "$ 1 ",
    author: "vivekanand",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS68kxb0rJWmazV3MPib2wV1C9dFDEdOptxhg&s",
    title: "Sudoku ",
    rating: " $ 1.5",
    author: "vivekanand",
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS34Sa8xff5Pi_bByIIb898qItm5ptpVMQsIA&s",
    title: "Project in progres",
    rating: "__",
    author: "vivekanand",
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS34Sa8xff5Pi_bByIIb898qItm5ptpVMQsIA&s",
    title: "Project in progres",
    rating: "__",
    author: "vivekanand",
  },
  {
    id: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS34Sa8xff5Pi_bByIIb898qItm5ptpVMQsIA&s",
    title: "Project in progres",
    rating: "__",
    author: "vivekanand",
  },
];

const Books = () => {
  return (
    <>
      <div className="mt-14 mb-12">
        <div className="container">
          {/* header */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Top Games for you
            </p>
            <h1 className="text-3xl font-bold">Top Gaemes</h1>
            <p className="text-xs text-gray-400">
              Explore top games — fun, interactive, and built to showcase
              frontend skills with smooth UI and engaging logic!
            </p>
          </div>

          {/* Body section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {/* Card */}
              {booksData.map(({ id, img, title, rating, author }) => (
                <div key={id} className="div space-y-3">
                  <img
                    src={img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md "
                  />
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-gray-700">{author}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span>{rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button className="text-center mt-10 cursor-pointer  bg-primary text-white py-1 px-5 rounded-md">
                View All Games
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
