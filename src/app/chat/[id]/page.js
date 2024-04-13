// import Util from "./util";
import Util from "./Util.jsx"


const page = (params) => {

  return (
    <div style={{ maxWidth: "500px" }} className=" mx-auto  ">
      <Util params={params}/>
    </div>
  );
};

export default page;
