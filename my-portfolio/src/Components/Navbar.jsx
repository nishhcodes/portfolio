function Navbar() {
  return (
    <>
      <div className="p-4 flex justify-between items-center">
        <div>
          <ul>
            <li className="text-xl text-gray-600 font-semibold">
              <a href="#">@nishh.js</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-gray-50 bg-gray-900 border-2 border-gray-50 rounded-lg px-4 text-lg">
            Menu
          </p>
        </div>
      </div>
    </>
  );
}
export default Navbar;
