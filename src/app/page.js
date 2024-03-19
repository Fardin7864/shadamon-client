import MainSection from "@/client/MainSection";
import Sidebar from "@/client/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{ maxWidth: "1010px", gap: "50px" }}
      className="mx-auto flex items-start"
    >
      <Sidebar />

      <MainSection />

      <div className="w-[250px] pt-[50px]">
        <img
          src="https://shadamon.vercel.app/assets/left-ad-banner.jpg"
          alt="sidebar ad"
        />
      </div>
    </main>
  );
}
