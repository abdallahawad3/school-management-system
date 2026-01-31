import { Fragment } from "react";

interface TableProps {
  columns: Array<{
    header: string;
    accessor: string;
    className?: string;
  }>;
  data: any[];
  renderRow: (item: any) => React.ReactNode;
}

const Table = ({ columns, data, renderRow }: TableProps) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left text-gray-500 text-sm">
          {columns.map((column) => (
            <th
              key={column.accessor}
              className={`text-left px-4 py-2 font-medium text-sm text-gray-600 ${column.className || ""}`}
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => (
          <Fragment key={index}>{renderRow(item)}</Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
