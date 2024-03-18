"use client";
import { useContext, useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoMail } from "react-icons/io5";
import { AuthContext } from "./AuthanticationContext";
// import { AuthContext } from "./AuthenticationContext";

const SocialLogin = () => {
  const [loggedInUser, setLoggedInUser] = useState();
  const { loginWithProvider, google, successToast, failToast, user } = useContext(AuthContext);

  const handlePopup = (provider) => {
    loginWithProvider(provider)
      .then(() => {
        const newUser = {
          username: user?.displayName,
          email: user?.email,
          category: "User",
          location: "Dhaka",
          createdDate: new Date().toDateString(),
          status: "Pending",
          rating: "0",
          editBy: "",
        };

        fetch("https://shadamon-m-server.vercel.app/api/v1/users/add", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        })
        .then(response => response.json())
        .then(data => setLoggedInUser(data))
        .then(successToast())
        .catch(() => {
          failToast();
        });
      })
      .catch(() => {
        failToast();
      });
  };

  return (
    <div className="px-10">
      <button
        style={{ backgroundColor: "#4267a6" }}
        className="flex items-center gap-2 rounded-md py-2 px-5 w-full text-white hover:opacity-65 active:opacity-30"
      >
        <FaFacebookSquare className="text-white text-xl" /> Continue with Facebook
      </button>

      <button
        onClick={() => handlePopup(google)}
        style={{ backgroundColor: "white", marginTop: "8px" }}
        className="flex items-center gap-2 rounded-md py-2 px-5 w-full border hover:opacity-65 active:opacity-30"
      >
        <FcGoogle className="text-white text-xl" /> Continue with Google
      </button>

      <button
        style={{ backgroundColor: "white", marginTop: "8px" }}
        className="flex items-center gap-2 rounded-md py-2 px-5 w-full hover:opacity-65 active:opacity-30"
      >
        <IoMail className="text-xl" /> Continue with Email
      </button>
    </div>
  );
};

export default SocialLogin;
