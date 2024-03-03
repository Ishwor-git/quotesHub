import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Quote from "../components/quote";

const Quotes = () => {
  const [quote, setQuote] = useState({
    Success: { quote: "", author: "" },
    Business: { quote: "", author: "" },
    Competition: { quote: "", author: "" },
    Life: { quote: "", author: "" },
    Humorous: { quote: "", author: "" },
    Love: { quote: "", author: "" },
    Technology: { quote: "", author: "" },
    Politics: { quote: "", author: "" },
    Education: { quote: "", author: "" },
    Sports: { quote: "", author: "" },
    History: { quote: "", author: "" },
  });

  useEffect(() => {
    fetchQuote("Success");
    fetchQuote("Business");
    fetchQuote("Competition");
    fetchQuote("Life");
    fetchQuote("Humorous");
    fetchQuote("Love");
    fetchQuote("Technology");
    fetchQuote("Politics");
    fetchQuote("Education");
    fetchQuote("Sports");
    fetchQuote("History");
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
        catag="success"
      />

      <Quote
        quote={quote.Business.quote}
        author={quote.Business.author}
        handleClick={() => handleGetQuote("Business")}
        catag="business"
      />

      <Quote
        quote={quote.Competition.quote}
        author={quote.Competition.author}
        handleClick={() => handleGetQuote("Competition")}
        catag="competition"
      />

      <Quote
        quote={quote.Life.quote}
        author={quote.Life.author}
        handleClick={() => handleGetQuote("Life")}
        catag="life"
      />

      <Quote
        quote={quote.Humorous.quote}
        author={quote.Humorous.author}
        handleClick={() => handleGetQuote("Humorous")}
        catag="humorous"
      />

      <Quote
        quote={quote.Love.quote}
        author={quote.Love.author}
        handleClick={() => handleGetQuote("Love")}
        catag="love"
      />

      <Quote
        quote={quote.Technology.quote}
        author={quote.Technology.author}
        handleClick={() => handleGetQuote("Technology")}
        catag="technology"
      />

      <Quote
        quote={quote.Politics.quote}
        author={quote.Politics.author}
        handleClick={() => handleGetQuote("Politics")}
        catag="politics"
      />

      <Quote
        quote={quote.Education.quote}
        author={quote.Education.author}
        handleClick={() => handleGetQuote("Education")}
        catag="education"
      />

      <Quote
        quote={quote.Sports.quote}
        author={quote.Sports.author}
        handleClick={() => handleGetQuote("Sports")}
        catag="sports"
      />

      <Quote
        quote={quote.History.quote}
        author={quote.History.author}
        handleClick={() => handleGetQuote("History")}
        catag="history"
      />
    </div>
  );
};

export default Quotes;
