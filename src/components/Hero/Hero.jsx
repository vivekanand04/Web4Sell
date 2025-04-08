// import React from "react";
// import Book1 from "../../assets/books/book2.jpg";
// import Book2 from "../../assets/books/book1.jpg";
// import Book3 from "../../assets/books/book3.jpg";
// import Vector from "../../assets/website/blue-pattern.png";

// const ImageList = [
//   {
//     id: 1,
//     img: Book1,
//     title: "Bouncy Bird!🐦",
//     description:
//       "Guide your bird through obstacles with perfect timing! Tap to bounce, avoid hurdles, and challenge yourself in this fun and addictive arcade adventure. 🏆🎮",
//   },
//   {
//     id: 2,
//     img: Book2,
//     title: "IndiaTube - A Video Streaming platform ",
//     description:
//       "IndiaTube is a fully responsive YouTube clone offering smooth video streaming, dynamic content fetching, and an intuitive user experience.",
//   },
//   {
//     id: 3,
//     img: Book3,
//     title: "BaatChit - Instant Chat, Anytime!💬",
//     description:
//       "BaatChit is a real-time chat application with one-on-one and group messaging, audio/video calls, and secure payments—bringing seamless communication to your fingertips! 🚀",
//   },
// ];

// const Hero = ({ handleOrderPopup }) => {
//   const [imageId, setImageId] = React.useState(Book1);
//   const [title, setTitle] = React.useState("Bouncy Bird!🐦");
//   const [description, setDescription] = React.useState(
//     "Guide your bird through obstacles with perfect timing! Tap to bounce, avoid hurdles, and challenge yourself in this fun and addictive arcade adventure. 🏆🎮"
//   );

//   const bgImage = {
//     backgroundImage: `url(${Vector})`,
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     // height: "100%",
//     width: "100%",
//   };

//   return (
//     <>
//       <div
//         className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
//         style={bgImage}
//       >
//         <div className="container pb-8 sm:pb-0">
//           <div className="grid grid-cols-1 sm:grid-cols-2">
//             {/* text content section */}
//             <div
//               data-aos-once="true"
//               className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
//             >
//               <h1
//                 data-aos="zoom-out"
//                 data-aos-duration="500"
//                 data-aos-once="true"
//                 className="text-5xl sm:text-6xl lg:text-7xl font-bold"
//               >
//                 {title}
//                 <p class="bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-sm to-secondary">
//                   by Anonymous
//                 </p>{" "}
//               </h1>
//               <p
//                 data-aos="slide-up"
//                 data-aos-duration="500"
//                 data-aos-delay="100"
//                 className="text-sm "
//               >
//                 {description}
//               </p>
//               <div>
//                 <a
//                   href="https://youtube01-project.vercel.app/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-red-500 text-white py-0.5 px-3 rounded-full mt-4 mr-4 text-center transition duration-300 transform hover:scale-105 hover:bg-white hover:text-red-500"
//                 >
//                   Live Preview
//                 </a>

//                 <button
//                   onClick={handleOrderPopup}
//                   className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-3 rounded-full"
//                 >
//                   Order Now
//                 </button>
//               </div>
//             </div>
//             {/* Image section */}
//             <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
//               <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
//                 <img
//                   data-aos="zoom-in"
//                   data-aos-once="true"
//                   src={imageId}
//                   alt="biryani img"
//                   className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
//                 />
//               </div>
//               <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full">
//                 {ImageList.map((item) => (
//                   <img
//                     data-aos="zoom-in"
//                     data-aos-once="true"
//                     src={item.img}
//                     onClick={() => {
//                       setImageId(
//                         item.id === 1 ? Book1 : item.id === 2 ? Book2 : Book3
//                       );
//                       setTitle(item.title);
//                       setDescription(item.description);
//                     }}
//                     alt="biryani img"
//                     className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hero;

import React from "react";
import Book1 from "../../assets/books/book2.jpg";
import Book2 from "../../assets/books/book1.jpg";
import Book3 from "../../assets/books/book3.jpg";
import Vector from "../../assets/website/blue-pattern.png";

const ImageList = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHgKyAxpLiOcTqwSPq2VnOLXX7LwUZqzk83Q&s",
    title: "Bouncy Bird!🐦",
    description:
      "Guide your bird through obstacles with perfect timing! Tap to bounce, avoid hurdles, and challenge yourself in this fun and addictive arcade adventure. 🏆🎮",
    link: "https://bouncy-bird.vercel.app/",
  },
  {
    id: 2,
    img: "https://i.ytimg.com/vi/dVzmt8OYJRI/maxresdefault.jpg",
    title: "IndiaTube - A Video Streaming platform ",
    description:
      "IndiaTube is a fully responsive YouTube clone offering smooth video streaming, dynamic content fetching, and an intuitive user experience.",
    link: "https://youtube01-project.vercel.app/",
  },
  {
    id: 3,
    img: "https://t3.ftcdn.net/jpg/04/40/55/08/360_F_440550842_axpix9gdXQlEM1MvoPFMt7dctHsF2OAd.jpg",
    title: "BaatChit - Instant Chat, Anytime!💬",
    description:
      "BaatChit is a real-time chat application with one-on-one and group messaging, audio/video calls, and secure payments—bringing seamless communication to your fingertips! 🚀",
    link: "https://baatchit-chatapp.vercel.app/",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const [selectedProject, setSelectedProject] = React.useState(ImageList[0]);

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  };

  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <h1
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                {selectedProject.title}
                <p className="bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-sm to-secondary">
                  by Anonymous
                </p>
              </h1>
              <p
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-delay="100"
                className="text-sm "
              >
                {selectedProject.description}
              </p>
              <div>
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-500 text-white py-0.5 px-3 rounded-full mt-4 mr-4 text-center transition duration-300 transform hover:scale-105 hover:bg-white hover:text-red-500"
                >
                  Live Preview
                </a>

                <button
                  onClick={handleOrderPopup}
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-3 rounded-full"
                >
                  Order Now
                </button>
              </div>
            </div>
            {/* Image section */}
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                {/* <img
                  data-aos="zoom-in"
                  data-aos-once="true"
                  src={selectedProject.img}
                  alt="project preview"
                  className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                /> */}
                <img
                  data-aos="zoom-in"
                  data-aos-once="true"
                  src={selectedProject.img}
                  alt="project preview"
                  className="w-[350px] h-[250px] sm:w-[500px] sm:h-[350px] sm:scale-110 object-cover rounded-[50%] shadow-xl border-4 border-white mx-auto"
                />
              </div>
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full">
                {ImageList.map((item) => (
                  <img
                    key={item.id}
                    data-aos="zoom-in"
                    data-aos-once="true"
                    src={item.img}
                    onClick={() => setSelectedProject(item)}
                    alt="project thumbnail"
                    className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200 cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
