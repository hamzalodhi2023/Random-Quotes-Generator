"use client";
import axios from "axios";
import React, { useState } from "react";

const page = () => {
  const [Quotes, setQuotes] = useState([]);
  const getQuotes = async () => {
    try {
      const response = await axios.get("https://api.quotable.io/random");
      const data = response.data;
      setQuotes(data);
    } catch (error) {
      console.error("Error Fetching Images");
    }
  };
  return (
    <>
      <div className="p-10 w-dvw h-dvh bg-green-950 flex flex-col items-center justify-center">
        <button
          onClick={getQuotes}
          className="px-5 py-3 bg-green-800 text-white font-bold rounded shadow-xl "
        >
          Get Random Quote
        </button>
        <div className="py-10 text-white text-3xl text-center">
          {Quotes.content}
        </div>
      </div>
    </>
  );
};

export default page;
// <>
//   <button
//     onClick={getQuotes}
//     className="px-5 py-3 bg-green-800 text-white font-bold"
//   >
//     Get Random Quote
//   </button>
//   <div className="py-10">{Quotes.content}</div>
// </>
