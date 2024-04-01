/* eslint-disable @next/next/no-img-element */
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
const AllPostTable = () => {
  return (
    <>
      <tr className="text-black">
        <td>
          <img src="/loginlogo.png" className="h-10" alt="" />
        </td>
        <td className="text-xs">45857255</td>
        <td className="text-xs">Mobile</td>
        <td className="text-xs">Dhaka</td>
        <td className="text-xs">Sell</td>
        <td className="text-xs">Samsung</td>
        <td className="text-xs">29500</td>
        <td className="text-xs">85475</td>
        <td className="text-xs">Post Pro</td>
        <td className="text-xs">
          <div className="flex gap-1">
            <div>
              <div className="w-full h-2 bg-red-600"></div> Fail
            </div>
            <div>
              <div className="w-full h-2 bg-green-600"></div> Ok
            </div>
            <div>
              <div className="w-full h-2 bg-yellow-600"></div> Over
            </div>
          </div>
        </td>
        <td className="text-xs">Mob</td>
        <td>
          <select className="select select-bordered w-full max-w-xs">
            <option selected>Active</option>
            <option>Notification</option>
            <option>Pause</option>
            <option>Review</option>
            <option>Delete (Reason)</option>
            <option>Product Atv+Msg</option>
            <option>Product Unatv+Msg</option>
          </select>
        </td>
        <td></td>
        <td className="flex gap-1">
          <button className="flex items-center border border-blue-700 rounded p-1 text-xs">
            Hide
          </button>
          <button className="rounded text-white bg-red-600 p-1">
            <FaRegEdit />
          </button>
          <button className="rounded text-white bg-red-600 p-1">
            <RiDeleteBin6Line />
          </button>
        </td>
      </tr>
    </>
  );
};

export default AllPostTable;
