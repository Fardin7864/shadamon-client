import Sidebar from "@/client/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{ maxWidth: "1010px", gap: "50px" }}
      className="mx-auto flex items-center"
    >
      <Sidebar />
    </main>
  );
}
