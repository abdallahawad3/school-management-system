"use client";

import type { REQUEST_TYPE, TABLE_TYPE } from "@/utils/types";
import Image from "next/image";

interface IProps {
  table: TABLE_TYPE;
  requestType: REQUEST_TYPE;
  data?: any;
  id?: number;
}
const FromModel = ({ id, requestType, table, data }: IProps) => {
  const size = requestType === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    requestType === "create" ? "bg-yellow" : requestType === "update" ? "bg-sky" : "bg-purple";
  return (
    <>
      <button className={`${size} ${bgColor} flex items-center justify-center rounded-full`}>
        <Image src={`/${requestType}.png`} alt={`${requestType} image`} height={16} width={16} />
      </button>
    </>
  );
};

export default FromModel;
