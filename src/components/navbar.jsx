function Navbar() {
  return (
    <nav className="w-full h-12 bg-gray-300 flex justify-between flex-row bg-opacity-10 backdrop-blur">
      <div className="flex flex-row items-center ml-3">
        <h1 className="text-purple-600 font-bold text-xl">Quotes Hub</h1>
      </div>
      <div className="flex flex-row items-center mr-3 justify-center">
        <button className="text-purple-600 py-1 px-4 border border-purple-600 rounded-lg bg-white hover:bg-purple-600 hover:text-white transition-all duration-300 mr-2">
          Source code
        </button>
        <button className="text-purple-600 py-1 px-4 border border-purple-600 rounded-lg bg-white hover:bg-purple-600 hover:text-white transition-all duration-300">
          About us
        </button>
      </div>
    </nav>
  );
}

export default Navbar;