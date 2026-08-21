import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonText , setButtonText] = useState("Home")

  const navItems = ["Home", "Skills", "Projects", "About Me", "Contact Me"];

  return (
    <nav className="w-full bg-white">
      <div className="flex items-center justify-between sm:px-15 ps-6 py-4">

        {/* Left Side */}
        <div className="flex items-center gap-3">

          {/* Hamburger - only below lg */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer text-2xl lg:hidden"
          >
            ☰
          </button>

          <h1 className="sm:text-3xl text-xl font-semibold">
            Zeeshan Sainch
          </h1>
        </div>

        {/* Desktop Navigation - lg and above */}
        <div className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
           <a href={"#"+ item} key={item}>  <button
              key={item}
              className={buttonText === item ? "transition duration-300 cursor-pointer rounded-md px-4 py-2 bg-black text-white" : "transition duration-300   cursor-pointer rounded-md px-4 py-2 hover:bg-gray-200"}
              onClick={() => setButtonText(item)}
            >
              {item}
            </button></a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      
        <div className={isOpen === true ? "absolute z-10 transition duration-1000  w-50 border-t opacity-100 bg-white p-2 shadow-2xl lg:hidden" : "absolute z-10 transition opacity-0 duration-300  w-50 border-t bg-white p-2 shadow-2xl lg:hidden" }>
          {navItems.map((item) => (
            <a key={item} href={"#" + item}>
              <button
              
              onClick={() => {setButtonText(item) ; setIsOpen(false)}}
              className={buttonText === item ? "w-full transition duration-300 cursor-pointer rounded-md px-4 py-2 bg-black text-white" : "transition duration-300 w-full   cursor-pointer rounded-md px-4 py-2 hover:bg-gray-200"}
            >
              {item}
            </button>
            </a>
          ))}
        </div>
      
    </nav>
  );
}

export default Navbar;