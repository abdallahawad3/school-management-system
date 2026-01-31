import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen flex">
      {/* Left sidebar */}
      <section className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link href={"/"} className="flex lg:justify-start items-center gap-1">
          <Image priority={true} src={"/logo.png"} alt="Logo" width={32} height={32} className="" />
          <span className="hidden lg:block font-semibold">SchoolMgmt</span>
        </Link>
        <Menu />
      </section>
      {/* Right sidebar */}
      <section className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-auto">
        <Navbar />
        {children}
      </section>
    </main>
  );
}
