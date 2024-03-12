"use client"
import { useContext } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoMail } from "react-icons/io5";
import { AuthContext } from "./AuthanticationContext";


const SocialLogin = () => {
    const {loginWithProvider, google, successToast, faildToast, user} = useContext(AuthContext);
    const handlePopup = (provider) => { 
        loginWithProvider(provider)
        .then(() => { 
            navigate(location?.state ? location.state : "/")
            successToast()
            console.log(user)
         })
        .catch(() => {
            faildToast()})
     }
     console.log(user)
    return (
        <div className=" px-10">
            <button style={{backgroundColor: "#4267a6"}} className=" flex items-center gap-2 rounded-md py-2 px-5 w-full text-white hover:opacity-65 active:opacity-30"><FaFacebookSquare className=" text-white text-xl"/> Continue with Facebook</button>
            {/* google */}
            <button onClick={() => handlePopup(google)} style={{backgroundColor: "white", marginTop: '8px'}}  className=" flex items-center gap-2 rounded-md py-2 px-5 w-full border hover:opacity-65 active:opacity-30"><FcGoogle className=" text-white text-xl"/> Continue with Google</button>
            <button style={{backgroundColor: "white", marginTop: '8px'}} className=" flex items-center gap-2 rounded-md py-2 px-5 w-full hover:opacity-65 active:opacity-30"><IoMail className=" text-xl"/> Continue with email</button>
        </div>
    );
};

export default SocialLogin;