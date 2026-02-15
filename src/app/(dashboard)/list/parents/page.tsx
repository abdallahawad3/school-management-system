import FromModel from "@/components/forms/FromComponent";
import Pagination from "@/components/shared/Pagination";
import Table from "@/components/shared/Table";
import TableSearch from "@/components/shared/TableSearch";
import { parentsData, role, studentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type RowType = {
  id: number;
  name: string;
  email?: string;
  students: string[];
  phone: string;
  address: string;
  parentId: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student Names",
    accessor: "students",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const page = () => {
  const renderRow = (item: RowType) => {
    return (
      <tr className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-[#F1F0FF]">
        <td className="p-4">
          <div className="flex items-center gap-4">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-500">{item.email}</p>
            </div>
          </div>
        </td>
        <td className="hidden md:table-cell">{item.students.join(", ")}</td>
        <td className="hidden lg:table-cell">{item.phone}</td>
        <td className="hidden xl:table-cell">{item.address}</td>
        <td className="flex items-center  py-4 gap-2">
          {role === "admin" && (
            <FromModel id={item.id} requestType="update" table="parent" data={item} />
          )}
          {role === "admin" && <FromModel id={item.id} requestType="delete" table="parent" />}
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
            {role === "admin" && <FromModel requestType="delete" table="parent" />}
          </div>
        </div>
      </div>
      {/* List */}
      <Table columns={columns} data={parentsData} renderRow={renderRow} />
      {/* Pagination */}
      <Pagination />
    </section>
  );
};

export default page;
