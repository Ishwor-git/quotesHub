import bgImg from "../assets/3dcubes.jpg";
import Navbar from "../components/navbar";
const Landing = () => {
  return (
    <>
      <div
        className=" box-border flex flex-col w-screen h-screen bg-cover bg-center bg-no-repeat bg-fixed relative overflow-hidden"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <Navbar />
        <div
          div
          className="w-full h-full flex flex-row justify-center items-center box-border"
        >
          <div className=" w-full h-2/5 bg-transparent backdrop-blur-sm flex flex-col rounded p-8 items-center justify-around">
            <h2 className=" font-sans font-semibold text-white text-4xl">
              Success is a journey not a destination.
            </h2>
            <h1 className=" text-white boold text-4xl self-end">
              - Ben Sweetland
            </h1>
            <button className=" text-purple-600 py-1 px-4 border border-purple-600 rounded-full bg-white hover:bg-purple-600 hover:text-white transition-all duration-300">
              get another quote
            </button>
          </div>
        </div>
        <div className=" flex flex-row justify-center w-full mb-10">
          <button className="text-purple-600 py-1 px-4 border border-purple-600 rounded-full bg-white hover:bg-purple-600 hover:text-white transition-all duration-300">
            Read more
          </button>
        </div>
      </div>
    </>
  );
};

export default Landing;
