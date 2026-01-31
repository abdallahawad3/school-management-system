import Pagination from "@/components/shared/Pagination";
import Table from "@/components/shared/Table";
import TableSearch from "@/components/shared/TableSearch";
import { role, studentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
const columns = [
  { header: "Info", accessor: "info" },
  { header: "Students Id", accessor: "studentId", className: "hidden md:table-cell" },
  { header: "Grade", accessor: "grade", className: "hidden md:table-cell" },
  { header: "Class", accessor: "class", className: "hidden lg:table-cell" },
  { header: "Address", accessor: "address", className: "hidden xl:table-cell" },
  { header: "Actions", accessor: "actions" },
];

type RowType = {
  name: string;
  email: string;
  photo: string;
  phone: string;
  info: string;
  grade: string;
  class: string;
  studentId: string;
  address: string;
};
const page = () => {
  const renderRow = (item: RowType) => {
    return (
      <tr className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-[#F1F0FF]">
        <td className="p-4">
          <div className="flex items-center gap-4">
            <Image
              src={item.photo}
              alt={item.name}
              width={40}
              height={40}
              className="hidden xl:block size-10 rounded-full object-cover"
            />
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-500">{item.email}</p>
            </div>
          </div>
        </td>
        <td className="hidden md:table-cell">{item.studentId}</td>
        <td className="hidden lg:table-cell">{item.grade}</td>
        <td className="hidden xl:table-cell">{item.class}</td>
        <td className="hidden xl:table-cell">{item.address}</td>
        <td className="flex items-center  py-4 gap-2">
          <Link href={`/list/student/${item.studentId}`}>
            <button className="ml-4 size-7 bg-[#C3EBFA] flex items-center justify-center rounded-full overflow-hidden">
              <Image src={"/view.png"} alt="delete teacher" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <button className="ml-4 size-7 bg-[#CFCEFF] flex items-center justify-center rounded-full overflow-hidden">
              <Image src={"/delete.png"} alt="delete teacher" width={16} height={16} />
            </button>
          )}
        </td>
      </tr>
    );
  };

  return (
    <section className="bg-white p-4 rounded-md m-4 mt-0">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Students</h1>
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
      <Table columns={columns} data={studentsData} renderRow={renderRow} />
      {/* Pagination */}
      <Pagination />
    </section>
  );
};

export default page;
