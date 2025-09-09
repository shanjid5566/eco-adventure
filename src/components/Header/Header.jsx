import Navbar from "../Navbar/Navbar";
import userImg from "../../assets/userImage.png";
import { Link } from "react-router";
import { IoCloseCircleOutline, IoMenuOutline } from "react-icons/io5";

import { useContext, useState } from "react";
import { AuthContext } from "../../provider/ContextProvider";

const Header = () => {
  const { user, logOut, setUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Sign-out successful");
        setUser(null);
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <div className="w-full bg-[#003049]">
      <div className="flex justify-between items-center p-4  text-white container mx-auto">
        <div>
          <h2 className="text-3xl font-bold">Travel Fun</h2>
        </div>
        <Navbar open={open}></Navbar>
        <div className="flex justify-center items-center gap-3">
          <Link to={"/my-profile"}>
            <img
              src={user ? user.photoURL : userImg}
              alt="User Image"
              className="size-9 rounded-full hover:cursor-pointer"
              title={user ? user.displayName : "Guest"}
            />
          </Link>
          {user ? (
            <button onClick={handleLogOut}>
              <span
                className="
                  hidden
                  md:block
                  px-6 
                  py-2 
                  rounded-xl 
                  bg-[#0077b6] 
                  text-lg 
                  font-medium"
              >
                Log-Out
              </span>
            </button>
          ) : (
            <button>
              <Link
                to={"/auth/login"}
                className="
              hidden
              md:block
              px-6 
              py-2 
              rounded-xl 
              bg-[#0077b6] 
              text-lg 
              font-medium"
              >
                Login
              </Link>
            </button>
          )}
          <button
            className="md:hidden px-3 py-1 text-3xl rounded-lg font-bold "
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? (
              <IoCloseCircleOutline />
            ) : (
              <IoMenuOutline className="text-2xl " />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
