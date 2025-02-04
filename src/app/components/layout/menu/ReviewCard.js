import { useState } from "react";

const reviews = [
 { id: 1, text: "Amazing food! The taste was incredible.🍕", author: "Kavya Metha" },
 { id: 2, text: "Quick delivery and fresh ingredients. Loved it!🚀", author: "Neha Sharma" },
 { id: 3, text: "Best pizza in town! Highly recommended.😋", author: "Anand Acharya" },
 { id: 4, text: "Superb flavors and great customer service.👍", author: "Sneha Kapoor" },
 { id: 5, text: "Will definitely order again!🍔", author: "Rajesh Kumar" },
 { id: 6, text: "The pizza was so good, I almost cried tears of joy. 😭🍕 10/10 would recommend!", author: "Amit Verma" },
 { id: 7, text: "Absolutely mind-blowing flavors! Every bite was a party in my mouth. 🎉🍕", author: "Vikram Patel" },
 { id: 8, text: "The pizza arrived hot, fresh, and absolutely delicious. I’m already craving more! 🔥🍕", author: "Shreya Kapoor" },
 { id: 9, text: "Fast delivery, fresh ingredients, and the perfect amount of cheese. What more could you ask for? 🚀🧀", author:"Kanika Singh" },
 { id: 10, text: "I’m officially addicted! This pizza is the real deal. 🍕❤️", author: "Aditya Rao" },
];

export default function ReviewCard() {
 const [active, setActive] = useState(0);

 const nextReview = () => setActive((prev) => (prev + 1) % reviews.length);
 const prevReview = () => setActive((prev) => (prev - 1 + reviews.length) % reviews.length);

 return (
  <div className="flex flex-col items-center justify-center  bg-gradient-to-br from-gray-50 to-gray-100 mt-10  rounded-3xl gap-14 py-10">
   <h2 className="text-4xl font-bold text-gray-800 italic">Customer Reviews</h2>
   <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl shadow-lg">
    <div
     className="flex transition-transform duration-500 ease-in-out"
     style={{ transform: `translateX(-${active * 100}%)` }}
    >
     {reviews.map((review, index) => (
      <div
       key={review.id}
       className="min-w-full flex flex-col items-center bg-white py-14"
      >
       <p className="text-xl text-center italic text-gray-500 leading-relaxed px-24">
        &quot;{review.text}&quot;
       </p>
       <span className="mt-2 text-sm font-semibold text-gray-600">- {review.author}</span>
      </div>
     ))}
    </div>
   </div>
   <div className="flex space-x-6">
    <button
     onClick={prevReview}
     className="button-29"
    >
     ⬅
    </button>
    <button
     onClick={nextReview}
     className="button-29"
    >
     ➡
    </button>
   </div>

   {/* Custom CSS for button-29 */}
   <style jsx>{`
        .button-29 {
          align-items: center;
          appearance: none;
          background-image: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);
          border: 0;
          border-radius: 6px;
          box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
            rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
          box-sizing: border-box;
          color: #fff;
          cursor: pointer;
          display: inline-flex;
          font-family: "JetBrains Mono", monospace;
          height: 30px;
          justify-content: center;
          line-height: 1;
          list-style: none;
          overflow: hidden;
          padding-left: 16px;
          padding-right: 16px;
          position: relative;
          text-align: left;
          text-decoration: none;
          transition: box-shadow 0.15s, transform 0.15s;
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
          white-space: nowrap;
          will-change: box-shadow, transform;
          font-size: 18px;
        }

        .button-29:focus {
          box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
            rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
        }

        .button-29:hover {
          box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
            #3c4fe0 0 -3px 0 inset;
          transform: translateY(-2px);
        }

        .button-29:active {
          box-shadow: #3c4fe0 0 3px 7px inset;
          transform: translateY(2px);
        }
      `}</style>
  </div>
 );
}











// import { useState } from "react";

// const reviews = [
//  { id: 1, text: "Amazing food! The taste was incredible. 🍕", author: "Rohan Patel" },
//  { id: 2, text: "Quick delivery and fresh ingredients. Loved it! 🚀", author: "Neha Sharma" },
//  { id: 3, text: "Best pizza in town! Highly recommended. 😋", author: "Amit Verma" },
//  { id: 4, text: "Superb flavors and great customer service. 👍", author: "Sneha Kapoor" },
//  { id: 5, text: "Will definitely order again! 🍔", author: "Rajesh Kumar" }
// ];

// export default function ReviewCard() {
//  const [active, setActive] = useState(2);

//  const nextReview = () => setActive((prev) => (prev + 1) % reviews.length);
//  const prevReview = () => setActive((prev) => (prev - 1 + reviews.length) % reviews.length);

//  return (
//   <div className="flex flex-col items-center justify-center py-10 bg-gray-100 mt-10 gap-10 ">
//    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Customer Reviews</h2>
//    <div className="relative w-full bg-white max-w-3xl  overflow-hidden">
//     <div className="flex  transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${active * 100}%)` }}>
//      {reviews.map((review, index) => (
//       <div
//        key={review.id}
//        className="min-w-full flex flex-col items-center p-32 rounded-3xl"
//        style={{
//         boxShadow: 'rgba(10, 10, 0, 0.35) 0px 5px 15px' ,
//        }}
//       >
//              <p className="text-3xl text-pretty text-center italic text-yellow-800">&quot;{review.text}&quot;</p>
//        <span className="mt-2 font-semibold text-gray-900">- {review.author}</span>
//       </div>
//      ))}
//     </div>
//    </div>
//    <div className="flex mt-4 space-x-4">
//              <button onClick={prevReview} className="px-4 py-2 bg-yellow-300 text-white rounded-lg hover:bg-gray-900">⬅</button>
//              <button onClick={nextReview} className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-900">➡</button>
//    </div>
//   </div>
//  );
// }
