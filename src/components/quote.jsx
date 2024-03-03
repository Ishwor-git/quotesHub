// import bgImg from "../assets/motivation1.jpg";
const Quote = ({
  quote,
  author,
  catag = "unknown",
  handleClick = () => {
    console.log("action not defined for this component");
  },
}) => {
  // const bgImg = require(`./../assets/${catag}.jpg`);
  const bgImg = require(`./../assets/${catag}.jpg`);

  return (
    <>
      <div
        className="md:hidden box-border h-72 w-full bg-cover bg-center bg-no-repeat overflow-x-hidden overflow-y-auto my-4 mx-2 rounded-xl"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className=" w-full h-full flex flex-col justify-between items-center box-border  bg-black bg-opacity-50 rounded-xl">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <h2 className="text-white font-medium text-xl p-4">{quote}</h2>
            <h1 className="text-white font-medium text-lg p-4">- {author}</h1>
          </div>
          <div className="flex flex-row justify-center w-full mb-10">
            <button
              className=" text-purple-600 py-1 px-4 border border-purple-600 rounded-full bg-white hover:bg-purple-600 hover:text-white transition-all duration-300"
              onClick={handleClick}
            >
              get another quote
            </button>
          </div>
        </div>
      </div>
      <div className=" max-md:hidden w-8/12 h-80  flex flex-row justify-center items-center my-8">
        <div
          className=" h-full w-2/5 bg-cover bg-center bg-no-repeat rounded-l-3xl"
          style={{
            backgroundImage: `url(${bgImg})`,
          }}
        ></div>
        <div className=" h-full w-3/5 flex flex-col justify-center items-center bg-gradient-to-r from-purple-100 to-purple-600 rounded-r-3xl">
          <h2 className="text-white font-semibold text-2xl p-4">{quote}</h2>
          <h1 className="text-white font-semibold text-xl p-4">- {author}</h1>
          <button
            className=" mt-4 mb-4 text-purple-600 py-2 px-8 border border-purple-600 rounded-xl bg-white hover:bg-purple-600 hover:text-white transition-all duration-300"
            onClick={handleClick}
          >
            get another quote
          </button>
        </div>
      </div>
    </>
  );
};

export default Quote;
