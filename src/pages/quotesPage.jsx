import React from "react";
import Quote from "../components/quote";

const Quotes = () => {
  return (
    <div className=" mt-8 w-full h-full p-4 box-border flex flex-col items-center overflow-x-hidden overflow-y-scroll">
      <Quote
        quote={"The greatest wealth is to live with little."}
        author={"plato"}
      />
      <Quote
        quote={"Be yourself; everyone is already taken."}
        author={"Oscar Wilde"}
      />
    </div>
  );
};

export default Quotes;
