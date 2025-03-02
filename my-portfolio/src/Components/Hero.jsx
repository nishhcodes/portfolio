function Hero() {
  const title = "</fullstack developer>";
  return (
    <>
      <div className="flex justify-between px-4 h-56">
        <div className="flex flex-col justify-center w-64">
          <p className="text-xl font-bold">Hello there, I'm Manish ✌️</p>
          <p className="text-amber-500 font-bold text-xl">{title}</p>
          <div className=" flex flex-wrap my-4">
            <p className="text-lg text-gray-700">
              "Crafting seamless web experiences with React and Node.js."
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src="nishhh.jpeg" className="h-32 w-32 rounded-full" />
        </div>
      </div>
    </>
  );
}

export default Hero;
