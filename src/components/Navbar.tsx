import Image from "next/image";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-200 bg-white">
      {/* Search bar */}

      <div className="hidden lg:flex items-center gap-4 border border-gray-300 focus-within:border-blue-500 px-4 py-2 rounded-full shadow-sm w-[300px]">
        <Image src="/search.png" alt="Search" width={14} height={14} />
        <input type="text" placeholder="Search..." className="outline-none w-full bg-transparent" />
      </div>

      {/* Icons */}
      <div className="flex w-full justify-end items-center gap-4">
        <div className="bg-white rounded-full p-2 shadow-sm inline-block cursor-pointer">
          <Image src="/message.png" alt="Notifications" width={20} height={20} />
        </div>
        <div className="relative bg-white rounded-full p-2 shadow-sm inline-block cursor-pointer">
          <Image src="/announcement.png" alt="Announcements" width={20} height={20} />
          <div className="absolute -top-2 -right-2 size-5 text-xs flex items-center justify-center bg-purple-500 text-white rounded-full border-2 border-white">
            1
          </div>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <div className="flex flex-col">
            <h3 className="text-gray-600">John Doe</h3>
            <p className="text-gray-400 text-sm">Admin</p>
          </div>
          <div className="rounded-full p-[2px] border-2 border-gray-500 shadow-sm inline-block">
            <Image
              src="/avatar.png"
              alt="Dropdown"
              className="rounded-full"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
