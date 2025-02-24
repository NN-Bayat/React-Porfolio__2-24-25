import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center pt-28 
        transition-all duration-300 ease-in-out md:hidden
        
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }
        `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className=" absolute top-3 right-7 text-white text-4xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-xl font-semibold text-white my-4 transform transition-transform duration-300
                        ${
                          menuOpen
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-5"
                        }
          `}
      >
        Home
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`text-xl font-semibold text-white my-4 transform transition-transform duration-300
                        ${
                          menuOpen
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-5"
                        }
          `}
      >
        About
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className={`text-xl font-semibold text-white my-4 transform transition-transform duration-300
                        ${
                          menuOpen
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-5"
                        }
          `}
      >
        Projects
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`text-xl font-semibold text-white my-4 transform transition-transform duration-300
                        ${
                          menuOpen
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-5"
                        }
          `}
      >
        Contact
      </a>
    </div>
  );
};
