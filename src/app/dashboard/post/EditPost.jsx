import React from "react";
import { TiHome } from "react-icons/ti";
const EditPost = () => {
  return (
    <div className="bg-gray-100 m-10 p-2 rounded-md">
      <div className="flex gap-2 items-center">
        <span>
          <TiHome />
        </span>
        / <span className="text-gray-500"> Add Post</span> /{" "}
        <span>Edit Post</span>
      </div>

      <div className="bg-white  gap-5 justify-betweens">
        <form action="" className="grid grid-cols-2">
          <div>
            <input type="text" placeholder="Heading" />
          </div>
          <div>
            <input type="text" placeholder="Heading" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
