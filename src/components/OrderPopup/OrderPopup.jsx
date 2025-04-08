// import React from "react";
// import { IoCloseOutline } from "react-icons/io5";

// const OrderPopup = ({ orderPopup, setOrderPopup }) => {
//   return (
//     <>
//       {orderPopup && (
//         <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
//           <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
//             {" "}
//             {/* Header */}
//             <div className="flex items-center justify-between">
//               <div>
//                 <h1>Order Your Book</h1>
//               </div>
//               <div>
//                 <IoCloseOutline
//                   className="text-2xl cursor-pointer "
//                   onClick={() => setOrderPopup(false)}
//                 />
//               </div>
//             </div>
//             {/* Body */}
//             <div className="mt-4">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
//               />
//               <input
//                 type="email"
//                 placeholder="email"
//                 className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
//               />
//               <input
//                 type="text"
//                 placeholder="Address"
//                 className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
//               />
//               <div className="flex justify-center">
//                 <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full ">
//                   Order Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default OrderPopup;

import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm flex justify-center items-center">
          <div className="p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[320px] max-h-[80vh] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-2 border-b pb-2">
              <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                📚 Order Your Games
              </h1>
              <IoCloseOutline
                className="text-2xl cursor-pointer text-gray-600 dark:text-gray-300"
                onClick={() => setOrderPopup(false)}
              />
            </div>

            {/* Scrollable Content */}
            <div
              className="overflow-y-auto flex-1 pr-2"
              style={{ maxHeight: "60vh" }}
            >
              {/* Payment Section */}
              <div
                className="relative text-white p-4 rounded-md text-center"
                style={{
                  backgroundImage: "url('/payment-bg.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="bg-black/60 p-4 rounded-md">
                  <h2 className="text-lg font-semibold">💰 Payment Details</h2>
                  <p className="text-sm mb-2">
                    Scan QR code and pay <strong>$ 1.5</strong>{" "}
                  </p>
                  <img
                    src="/phone.jpg"
                    alt="QR Code"
                    className="mx-auto w-32 h-32 mb-2 bg-white p-2 rounded shadow-lg"
                  />
                  <hr />
                  <p className="text-sm">
                    After payment, email <strong>vivek235x@gmail.com</strong>{" "}
                    with relevent datails to receive your Game code.
                  </p>
                </div>
              </div>

              {/* Book Details */}
              <div className="mt-4 text-sm text-justify">
                <h2 className="text-lg font-semibold text-green-600 dark:text-green-400 flex items-center">
                  📖 About the Games
                </h2>

                <p className="mt-2">
                  This game provides deep insights into essential skills and
                  their application.
                </p>

                <h2 className="text-lg font-semibold text-purple-600 dark:text-purple-400 flex items-center mt-4">
                  🚀 How to Use
                </h2>

                <p className="mt-2">
                  Follow the Live Preview to gain a step-by-step understanding
                  and enhance your knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;
