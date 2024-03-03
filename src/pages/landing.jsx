import { useEffect, useState } from "react";
import axios from "axios";
import bgImg from "../assets/mainBg.jpg";
import Navbar from "../components/navbar";
const Landing = () => {
  const [quote, setQuote] = useState({ quote: "", author: "" });

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    const response = await axios.get("https://api.quotable.io/random");
    setQuote({
      quote: response.data.content,
      author: response.data.author,
    });
  };

  const handleGetQuote = () => {
    fetchQuote();
  };

  return (
    <>
      <div
        className=" box-border flex flex-col w-screen h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <Navbar />
        <div
          div
          className="w-full h-full flex flex-col md:flex-row justify-center items-center box-border"
        >
          <div className=" w-full md:w-1/2 h-2/5 bg-transparent backdrop-blur-sm flex flex-col rounded p-8 items-center justify-around">
            <h2 className=" font-sans font-semibold text-white text-3xl md:self-start">
              {quote.quote}
            </h2>
            <h1 className=" text-white mt-5 font-semibold text-2xl self-end md:self-start md:font-normal ">
              - {quote.author}
            </h1>
            <button
              className=" md:hidden mt-5 text-purple-600 py-1 px-4 border border-purple-600 rounded-full bg-white hover:bg-purple-600 hover:text-white transition-all duration-300"
              onClick={handleGetQuote}
            >
              get another quote
            </button>
          </div>
          <div className=" flex flex-col justify-center">
            <button
              className=" max-md:hidden lg:rounded-xl lg:px-6 lg:py-2 lg:my-4 text-purple-600 py-1 px-4 border border-purple-600 rounded-full bg-white hover:bg-purple-600 hover:text-white transition-all duration-300"
              onClick={handleGetQuote}
            >
              Get another quote
            </button>
            <button className="lg:text-white lg:bg-purple-600 lg:hover:bg-purple-900 max-md:mt-40 lg:rounded-xl lg:px-6 lg:py-2 lg:my-4 text-purple-600 py-1 px-4 border border-purple-600 rounded-full bg-white hover:bg-purple-600 hover:text-white transition-all duration-300">
              Read more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
