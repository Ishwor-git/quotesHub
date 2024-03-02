import bgImg from "../assets/3dcubes.jpg";
import Navbar from "../components/navbar";
const Landing = () => {
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
            <h2 className=" font-sans font-semibold text-white text-4xl md:self-start">
              Success is a journey not a destination.
            </h2>
            <h1 className=" text-white font-semibold text-4xl self-end md:self-start md:font-normal md:text-2xl">
              - Ben Sweetland
            </h1>
            <button className=" md:hidden mt-5 text-purple-600 py-1 px-4 border border-purple-600 rounded-full bg-white hover:bg-purple-600 hover:text-white transition-all duration-300">
              get another quote
            </button>
          </div>
          <div className=" flex flex-col justify-center">
            <button className=" max-md:hidden lg:rounded-xl lg:px-6 lg:py-2 lg:my-4 text-purple-600 py-1 px-4 border border-purple-600 rounded-full bg-white hover:bg-purple-600 hover:text-white transition-all duration-300">
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
