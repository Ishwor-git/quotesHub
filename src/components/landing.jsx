import bgImg from "../assets/mainBg.jpg";
import Navbar from "./navbar";
const Landing = () => {
  return (
    <>
      <div
        className="w-full h-screen bg-cover bg-center bg-no-repeat bg-fixed relative overflow-hidden"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <Navbar />
        <div
          div
          className="w-full h-full flex flex-row justify-center items-center"
        >
          <div className=" w-full h-2/5 bg-transparent backdrop-blur-sm flex flex-col rounded p-4 items-center justify-around">
            <h2 className=" font-sans font-semibold text-white text-4xl">
              Success is a journey not a destination.
            </h2>
            <h1 className=" text-white boold text-4xl self-end">
              - Ben Sweetland
            </h1>
          </div>
        </div>
        <div>
          <button className="absolute bottom-1 self-center bg-purple-400 px-3 py-2">
            Read more
          </button>
        </div>
      </div>
    </>
  );
};

export default Landing;
