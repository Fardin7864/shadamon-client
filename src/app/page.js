import MainSection from "@/client/MainSection";
import Sidebar from "@/client/Sidebar";
import Footer from "@/common/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main style={{ maxWidth: "1010px", margin: "auto" }}>
        <div className=" flex justify-between gap:2 lg:gap-[50px] w-full">
          <Sidebar />

          <MainSection />

          <div className="w-[160px] pt-[50px] hidden lg:flex justify-center ">
            <Image
              src="/left-banner.jpg"
              alt="sidebar ad"
              width={200}
              height={500}
              className=" max-h-[500px]"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
