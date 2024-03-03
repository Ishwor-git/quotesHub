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

  const theme = {
    success: {
      bgHover: "hover:bg-green-600",
      text: "text-green-600",
      gradient: {
        from: "from-green-200",
        to: "to-green-600",
      },
      border: "border-green-600",
    },
    business: {
      bgHover: "hover:bg-blue-600",
      text: "text-blue-600",
      gradient: {
        from: "from-blue-200",
        to: "to-blue-600",
      },
      border: "border-blue-600",
    },
    competition: {
      bgHover: "hover:bg-yellow-600",
      text: "text-yellow-600",
      gradient: {
        from: "from-yellow-200",
        to: "to-yellow-600",
      },
      border: "border-yellow-600",
    },
    life: {
      bgHover: "hover:bg-red-600",
      text: "text-red-600",
      gradient: {
        from: "from-red-200",
        to: "to-red-600",
      },
      border: "border-red-600",
    },
    humorous: {
      bgHover: "hover:bg-purple-600",
      text: "text-purple-600",
      gradient: {
        from: "from-purple-200",
        to: "to-purple-600",
      },
      border: "border-purple-600",
    },
    love: {
      bgHover: "hover:bg-pink-600",
      text: "text-pink-600",
      gradient: {
        from: "from-pink-200",
        to: "to-pink-600",
      },
      border: "border-pink-600",
    },
    technology: {
      bgHover: "hover:bg-indigo-600",
      text: "text-indigo-600",
      gradient: {
        from: "from-indigo-200",
        to: "to-indigo-600",
      },
      border: "border-indigo-600",
    },
    politics: {
      bgHover: "hover:bg-gray-600",
      text: "text-gray-600",
      gradient: {
        from: "from-gray-200",
        to: "to-gray-600",
      },
      border: "border-gray-600",
    },
    education: {
      bgHover: "hover:bg-blue-600",
      text: "text-blue-600",
      gradient: {
        from: "from-blue-200",
        to: "to-blue-600",
      },
      border: "border-blue-600",
    },
    unknown: {
      bgHover: "hover:bg-gray-600",
      text: "text-gray-600",
      gradient: {
        from: "from-gray-200",
        to: "to-gray-600",
      },
      border: "border-gray-600",
    },
  };

  const test = "education";

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
              className={` text-purple-600 py-1 px-4 border border-purple-600 rounded-full bg-white ${theme.competition.bgHover} transition-all duration-300`}
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
        <div
          className={` h-full w-3/5 flex flex-col justify-center items-center bg-gradient-to-r ${theme[test].gradient.from} to-purple-600 rounded-r-3xl`}
        >
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
