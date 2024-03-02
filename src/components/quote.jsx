import bgImg from "../assets/motivation1.jpg";
const Quote = ({ quote, author, catag = "unknown" }) => {
  return (
    <>
      <div
        className="box-border h-56 w-full bg-cover bg-center bg-no-repeat overflow-hidden my-4 mx-2 rounded-xl"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className=" w-full h-full flex flex-col justify-between items-center box-border  bg-black bg-opacity-50 rounded-xl">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <h2 className="text-white font-bold text-2xl p-4">{quote}</h2>
            <h1 className="text-white font-bold text-2xl p-4">- {author}</h1>
          </div>
          <div className="flex flex-row justify-center w-full mb-10">
            <button className=" text-purple-600 py-1 px-4 border border-purple-600 rounded-full bg-white hover:bg-purple-600 hover:text-white transition-all duration-300">
              get another quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
