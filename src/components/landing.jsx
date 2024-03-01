import bgImg from "./../assets/mainBg.jpg";
const Landing = () => {
  return (
    <>
      <div
        className="w-full h-screen bg-cover "
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}${bgImg})`,
        }}
      ></div>
      <img src="./../assets/mainBg.jpg" alt="img" className="h-10 w-10" />
    </>
  );
};

export default Landing;
