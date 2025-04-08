// import React from "react";
// import Img1 from "../../assets/books/book2.jpg";
// import Img2 from "../../assets/books/book1.jpg";
// import Img3 from "../../assets/books/book3.jpg";
// import { FaStar } from "react-icons/fa";

// const ServicesData = [
//   {
//     id: 1,
//     img: Img1,
//     title: "Alien Attack: The Invasion Begins! 👽",
//     description:
//       "Earth is under siege as extraterrestrial invaders launch a full-scale attack! With advanced weaponry and unknown technology, these aliens threaten humanity’s existence. Brace yourself for an intense battle where survival is the only option! 🚀🔥",
//   },
//   {
//     id: 2,
//     img: Img2,
//     title: "Tic-Tac-Toe: Win with Strategy! ❌⭕",
//     description:
//       "Tic-Tac-Toe is a classic two-player game of strategy and skill, where players take turns marking Xs and Os on a 3x3 grid. The goal is simple—align three of your symbols in a row, column, or diagonal before your opponent does. Think ahead, block moves, and claim victory in this timeless battle of wits! 🎯🔥",
//   },
//   {
//     id: 3,
//     img: Img3,
//     title: "Classic Snake Game 🐍",
//     description:
//       "Guide your snake to eat food, grow longer, and avoid crashing! Challenge yourself with increasing speed and strategic movements in this timeless arcade classic. 🚀🔥",
//   },
// ];

// const Services = ({ handleOrderPopup }) => {
//   return (
//     <>
//       <span id="services"></span>
//       <div className="py-10">
//         <div className="container">
//           <div className="text-center mb-20 max-w-[400px] mx-auto">
//             <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
//               Trending Games
//             </p>
//             <h1 className="text-3xl font-bold">Best Games</h1>
//             <p className="text-xs text-gray-400">
//               🔥 Explore the latest trending games and play the most popular
//               hits! 🎮 From action-packed adventures to strategic challenges,
//               find your next favorite game here! 🚀
//             </p>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
//             {ServicesData.map((service) => (
//               <div
//                 data-aos="zoom-in"
//                 className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
//               >
//                 <div className="h-[100px]">
//                   <img
//                     src={service.img}
//                     alt=""
//                     className="max-w-[100px] block mx-auto transform -translate-y-14
//                   group-hover:scale-105  duration-300 shadow-md"
//                   />
//                 </div>
//                 <div className="p-4 text-center">
//                   <div className="w-full flex items-center justify-center gap-1">
//                     <FaStar className="text-yellow-500" />
//                     <FaStar className="text-yellow-500" />
//                     <FaStar className="text-yellow-500" />
//                     <FaStar className="text-yellow-500" />
//                   </div>
//                   <h1 className="text-xl font-bold">{service.title}</h1>
//                   <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
//                     {service.description}
//                   </p>
//                   <a
//                     href="https://youtube01-project.vercel.app/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-slate-700 text-white py-1 px-3 rounded-full mt-4 mr-4 text-center transition duration-300 transform hover:scale-105 hover:bg-white hover:text-red-500"
//                   >
//                     Live Preview
//                   </a>
//                   <button
//                     className="bg-primary hover:scale-105 duration-300 text-white py-0.5 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
//                     onClick={handleOrderPopup}
//                   >
//                     Order Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services;

import React from "react";
import Img1 from "../../assets/books/book2.jpg";
import Img2 from "../../assets/books/book1.jpg";
import Img3 from "../../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa";

const ServicesData = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl9cYnpo936ynWo54jAkxGFqP1oR-hGWAvBw&s",
    title: "Alien Attack: The Invasion Begins! 👽",
    description:
      "Earth is under siege as extraterrestrial invaders launch a full-scale attack! With advanced weaponry and unknown technology, these aliens threaten humanity’s existence. Brace yourself for an intense battle where survival is the only option! 🚀🔥",
    livePreview: "https://allianinvade.vercel.app/",
  },            
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1jtsOBjn3oT25H6UAzLniFpmi3zCt9M60-Q&s",
    title: "Tic-Tac-Toe: Win with Strategy! ❌⭕",
    description:
      "Tic-Tac-Toe is a classic two-player game of strategy and skill, where players take turns marking Xs and Os on a 3x3 grid. The goal is simple—align three of your symbols in a row, column, or diagonal before your opponent does. Think ahead, block moves, and claim victory in this timeless battle of wits! 🎯🔥",
    livePreview: "https://tic-snowy.vercel.app/",
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_qf1gmTf9ZtG74yQdPyvICGHW-viD-zRCdw&s",
    title: "Classic Snake Game 🐍",
    description:
      "Guide your snake to eat food, grow longer, and avoid crashing! Challenge yourself with increasing speed and strategic movements in this timeless arcade classic. 🚀🔥",
    livePreview: "https://snake-and-game.vercel.app/",
  },
];

const Services = ({ handleOrderPopup }) => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Trending Games
            </p>
            <h1 className="text-3xl font-bold">Best Games</h1>
            <p className="text-xs text-gray-400">
              🔥 Explore the latest trending games and play the most popular
              hits! 🎮 From action-packed adventures to strategic challenges,
              find your next favorite game here! 🚀
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="zoom-in"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105  duration-300 shadow-md"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold">{service.title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                  <a
                    href={service.livePreview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-700 text-white py-1 px-3 rounded-full mt-4 mr-4 text-center transition duration-300 transform hover:scale-105 hover:bg-white hover:text-red-500"
                  >
                    Live Preview
                  </a>
                  <button
                    className="bg-primary hover:scale-105 duration-300 text-white py-0.5 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                    onClick={handleOrderPopup}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
