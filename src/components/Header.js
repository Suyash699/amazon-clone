import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Title = () => (
  <a href="/">
    <img
      alt="logo"
      src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4=w100-rw"
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  //build a hook for useAuth instead of using isLoggedIn.
  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-blue-50 shadow-lg">
      <Title />
      <div>
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contact Us</li>
          </Link>
          <li className="px-2">Cart</li>
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
        </ul>
      </div>

      <h1>{isOnline ? "🟢" : "🔴"}</h1>
      <span className="p-10 text-red-900 font-bold">{user.name}</span>

      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
