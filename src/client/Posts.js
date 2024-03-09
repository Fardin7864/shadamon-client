"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Posts = () => {
    const pathName = usePathname()
    // console.log(pathName)
  return (
      <div className=" flex gap-5 h-full items-end">
        <div className={`${pathName === '/' ? 'border-b-4 border-b-[#fb6320] font-semibold' : 'border-none pb-4'} pb-3`}>
            <Link href={"/"} className={`text-lg`}>
          All Post
        </Link> 
        </div>
        <div className={`${pathName === '/my-post' ? 'border-b-4 border-b-[#fb6320] font-semibold' : ' border-none pb-4'} pb-3`}>
        <Link href={"/my-post"}  className={`text-lg`}>My Post</Link>
        </div>
    </div>
  );
};

export default Posts;
