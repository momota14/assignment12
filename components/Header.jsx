'use client'

import { Button } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
import Img from "@/assets/images/business-5840871_1280.webp";
import useWindowDimensions from "@/hook/getWindowDimensions";

export default function Header() {
  const { height, width } = useWindowDimensions();

  return (
    <>
      <div
        className={`grid lg:grid-cols-12 grid-col-2 overflow-hidden ${
          height > 694 && width > 992 && "h-[calc(100vh-100px)]"
        }`}
      >
        <div className="lg:col-span-7 flex items-center lg:w-[460px] text-center lg:text-left mb-4">
          <div className="flex items-center lg:items-start flex-col">
            <div className="text-[30px] font-medium">
              Welcome to our Rising News
            </div>
            <p className="py-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              reprehenderit ut laudantium quia qui nam quasi, tenetur corporis
              deserunt eos suscipit exercitationem, quas nobis. Ullam impedit
              quisquam sed voluptatum id.
            </p>

            <Button className="flex items-center gap-3 bg-green-500 px-5">
              Learn more
            </Button>
          </div>
        </div>
        <div className="lg:col-span-5 flex items-center my-9 lg:my-0">
          <Image src={Img} alt="sad" width={0} height={0} className="w-auto" />
        </div>
      </div>
    </>
  );
}
