function NavBar({ isBack }) {
  console.log("isBack", isBack);
  return (
    <>
      <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-black text-white hover:text-gray-700 focus:text-gray-700 shadow-lg">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <div className="container-fluid w-full flex justify-between">
            {isBack && (
              <a className="text-xl  font-bold text-white text-left" href="/">
                {"< Back"}
              </a>
            )}
            <a className="text-xl text-white" href="#">
              Home
            </a>
            <a>

            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
