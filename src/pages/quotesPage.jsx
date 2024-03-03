import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Quote from "../components/quote";

const Quotes = () => {
  const [quote, setQuote] = useState({
    Success: { quote: "", author: "" },
    Business: { quote: "", author: "" },
    Life: { quote: "", author: "" },
    Humorous: { quote: "", author: "" },
    Love: { quote: "", author: "" },
    Technology: { quote: "", author: "" },
  });

  useEffect(() => {
    fetchQuote("Success");
    fetchQuote("Business");
    fetchQuote("Life");
    fetchQuote("Humorous");
    fetchQuote("Love");
    fetchQuote("Technology");
  }, []);

  const handleGetQuote = (catag) => {
    fetchQuote(catag);
  };

  const fetchQuote = async (catag) => {
    const response = await axios.get(
      `https://api.quotable.io/random?tags=${catag}`
    );
    setQuote((prevQuotes) => ({
      ...prevQuotes,
      [catag]: {
        quote: response.data.content,
        author: response.data.author,
      },
    }));
  };

  return (
    <div className=" mt-8 w-full h-full p-4 box-border flex flex-col items-center overflow-x-hidden overflow-y-scroll">
      <Quote
        quote={quote.Success.quote}
        author={quote.Success.author}
        handleClick={() => handleGetQuote("Success")}
        catag="Success"
      />

      <Quote
        quote={quote.Business.quote}
        author={quote.Business.author}
        handleClick={() => handleGetQuote("Business")}
        catag="Business"
      />

      <Quote
        quote={quote.Life.quote}
        author={quote.Life.author}
        handleClick={() => handleGetQuote("Life")}
        catag="Life"
      />

      <Quote
        quote={quote.Humorous.quote}
        author={quote.Humorous.author}
        handleClick={() => handleGetQuote("Humorous")}
        catag="Humorous"
      />

      <Quote
        quote={quote.Love.quote}
        author={quote.Love.author}
        handleClick={() => handleGetQuote("Love")}
        catag="Love"
      />

      <Quote
        quote={quote.Technology.quote}
        author={quote.Technology.author}
        handleClick={() => handleGetQuote("Technology")}
        catag="Technology"
      />
    </div>
  );
};

export default Quotes;
