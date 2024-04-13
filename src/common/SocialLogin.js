"use client";
import { useContext, useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoMail } from "react-icons/io5";
import { AuthContext } from "./AuthanticationContext";
import Link from "next/link";
// import { AuthContext } from "./AuthenticationContext";

const SocialLogin = () => {
  const [loggedInUser, setLoggedInUser] = useState();
  const { loginWithProvider, google, successToast, failToast, user } =
    useContext(AuthContext);

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

        fetch("https://shadamon.up.railway.app/api/v1/users/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((response) => response.json())
          .then((data) => setLoggedInUser(data))
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
        style={{ backgroundColor: "white" }}
        className="flex items-center gap-2 rounded-md py-2 px-5 w-full text-black border hover:opacity-80 duration-300  active:opacity-30"
      >
        <FaFacebookSquare className="text-blue-900 text-xl" /> Continue with
        Facebook
      </button>

      <button
        onClick={() => handlePopup(google)}
        style={{ backgroundColor: "white", marginTop: "8px" }}
        className="flex items-center gap-2 rounded-md py-2 px-5 w-full border hover:opacity-80 duration-300   active:opacity-30"
      >
        <FcGoogle className="text-white text-xl" /> Continue with Google
      </button>

      <Link
        href={"/register"}
        style={{ backgroundColor: "white", marginTop: "8px" }}
        className="flex items-center gap-2 rounded-md py-2 px-5 w-full hover:opacity-80 duration-300 border  active:opacity-30"
      >
        <IoMail className="text-xl" /> Continue with Email
      </Link>
    </div>
  );
};

export default SocialLogin;
