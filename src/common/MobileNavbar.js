import { FaHome } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";



const MobileNavbar = () => {
    return (
        <div>
            <div>
                <div className=" flex gap-4 px-5 border-t-2 rounded-t-xl mb-1">
                    <button className=" flex flex-col justify-center items-center bg-gray-200 px-3 rounded-b-2xl pt-2 pb-1 text-sm font-medium"><FaHome className=" text-2xl"/> HOME</button>
                    <button><IoSearch/> SEARCH</button>
                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default MobileNavbar;