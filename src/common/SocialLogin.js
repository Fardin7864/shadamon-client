import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoMail } from "react-icons/io5";


const SocialLogin = () => {
    return (
        <div className=" px-10">
            <button style={{backgroundColor: "#4267a6"}} className=" flex items-center gap-2 rounded-md py-2 px-5 w-full text-white"><FaFacebookSquare className=" text-white text-xl"/> Continue with Facebook</button>
            <button style={{backgroundColor: "white", marginTop: '8px'}}  className=" flex items-center gap-2 rounded-md py-2 px-5 w-full border"><FcGoogle className=" text-white text-xl"/> Continue with Google</button>
            <button style={{backgroundColor: "white", marginTop: '8px'}} className=" flex items-center gap-2 rounded-md py-2 px-5 w-full"><IoMail className=" text-xl"/> Continue with email</button>
        </div>
    );
};

export default SocialLogin;