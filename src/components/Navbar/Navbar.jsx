import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

const Navbar = ({ open }) => {
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link>Travel Tips</Link>
      </li>
      <li>
        <Link>About Us</Link>
      </li>
      <li>
        <Link>Contact</Link>
      </li>
    </>
  );
  return (
    <div>
      {/* desktop navbar design */}
      <ul className="hidden md:flex gap-3 font-medium">{navLinks}</ul>

      {/* Mobile navbar design*/}

      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute top-10 left-0 w-full h-screen z-20"
          >
            <div
              className="text-xl 
                font-semibold 
                uppercase 
                bg-primary
                text-white 
                py-10 
                mx-3 
                rounded-3xl"
            >
              <ul
                className="
                flex 
                flex-col 
                justify-center 
                items-center 
                gap-10 
                bg-[#023e8a] py-5"
              >
                {navLinks}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
