import Image from "next/image";

const TableSearch = () => {
  return (
    <div className="flex items-center gap-4 border border-gray-300 focus-within:border-blue-500 px-4 py-2 rounded-full shadow-sm max-w-[300px]">
      <Image src="/search.png" alt="Search" width={14} height={14} />
      <input type="text" placeholder="Search..." className="outline-none w-full bg-transparent" />
    </div>
  );
};

export default TableSearch;
