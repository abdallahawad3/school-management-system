import TableSearch from "@/components/shared/TableSearch";
import Image from "next/image";

const page = () => {
  return (
    <section className="bg-white p-4 rounded-md m-4 mt-0">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        {/* Search And Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex py-2 items-center gap-4 self-end">
            {/* Buttons */}
            <button className="size-8 flex items-center justify-center bg-yellow rounded-full">
              <Image src={"/filter.png"} alt="filter" width={14} height={14} />
            </button>
            <button className="size-8 flex items-center justify-center bg-yellow rounded-full">
              <Image src={"/sort.png"} alt="sort" width={14} height={14} />
            </button>
            <button className="size-8 flex items-center justify-center bg-yellow rounded-full">
              <Image src={"/plus.png"} alt="plus" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>
      {/* List */}
      {/* Pagination */}
    </section>
  );
};

export default page;
