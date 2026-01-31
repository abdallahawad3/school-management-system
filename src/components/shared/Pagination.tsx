const Pagination = () => {
  return (
    <div className="p-4 flex justify-between items-center text-gray-500">
      {/* Prev Button */}
      <button
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        disabled
      >
        Prev
      </button>
      {/* Pagination List */}
      <div className="flex ">
        <button className="py-2 px-4 rounded-md bg-sky text-xs font-semibold">1</button>
        <button className="py-2 px-4 rounded-md hover:bg-slate-200 transition-colors text-xs font-semibold cursor-pointer">
          2
        </button>
        <button className="py-2 px-4 rounded-md hover:bg-slate-200 transition-colors text-xs font-semibold cursor-pointer">
          3
        </button>
        <button className="py-2 px-4 rounded-md hover:bg-slate-200 transition-colors text-xs font-semibold cursor-pointer">
          ...
        </button>
        <button className="py-2 px-4 rounded-md hover:bg-slate-200 transition-colors text-xs font-semibold cursor-pointer">
          10
        </button>
      </div>
      <button className="py-2 px-4 rounded-md bg-slate-200 hover:bg-slate-300 transition-colors  text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
        Next
      </button>
      {/* Next Button */}
    </div>
  );
};

export default Pagination;
