import MainSection from "@/client/MainSection";
import Sidebar from "@/client/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{ maxWidth: "1010px", gap: "50px" }}
      className="mx-auto flex justify-between "
    >
      <Sidebar />

      <MainSection />

      <div className="w-[160px] pt-[30px] flex justify-center">
        <Image
          src="/left-banner.jpg"
          alt="sidebar ad"
          width={200}
          height={500}

          className=" max-h-[500px]"
        />
      </div>
    </main>
  );
}
