import { Users2 } from "lucide-react";
import React from "react";

interface CardItem {
    text: string;
    subText: string;
}

const Card = ({ text, subText }: CardItem) => {
    return (
        <div
            id="card"
            className="w-[242px] border p-4 rounded-lg flex flex-col gap-2 bg-white"
        >
            <div className="flex gap-2 items-center">
                <div
                    id="icon"
                    className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] bg-teal-200"
                >
                    <Users2 />
                </div>
                <div>
                    <p className="text-2xl">{text}</p>
                    <p className="text-sm text-gray-400">{subText}</p>
                </div>
            </div>
            <p className="text-right text-sm text-[#912B75]">View</p>
        </div>
    );
};

export default Card;
