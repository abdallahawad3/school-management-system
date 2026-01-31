import Image from "next/image";

interface IProps {
  type: "student" | "teacher" | "admin" | "parent";
}
const Card = ({ type }: IProps) => {
  return (
    <div className="rounded-2xl odd:bg-purple even:bg-yellow p-4 flex-1">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">2025/01</span>
        <Image className="cursor-pointer" src={`/more.png`} alt={type} width={20} height={20} />
      </div>
      <div className="text-2xl font-semibold my-4 text-gray-700">5605</div>
      <p className="text-sm font-medium text-gray-500">
        {type.toUpperCase().charAt(0) + type.slice(1)}s
      </p>
    </div>
  );
};

export default Card;
