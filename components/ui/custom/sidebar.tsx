"use client";
import React, { useContext } from "react";
import { Hexagon, LayoutPanelLeft, ListMusic, LogOut } from "lucide-react";
import Link from "next/link";
import { AuthContext } from "@/context/AuthProvider";

const Sidebar = () => {
    const { token, isAuth, logout } = useContext(AuthContext);

    return (
        <aside
            id="default-sidebar"
            className="flex flex-col justify-between border-y-0 border w-28 h-screen p-3"
            aria-label="Sidebar"
        >
            <div>
                <div className="flex flex-col w-12/12 items-center  overflow-y-auto mb-8 p-2">
                    <Link href={"#"}>
                        <Hexagon size={"36px"} />
                    </Link>
                </div>

                <Link href={"/dashboard"}>
                    <div className="flex flex-col w-12/12 border-none bg-red-50 hover:bg-red-100 rounded-lg items-center  overflow-y-auto mb-3 p-2">
                        <LayoutPanelLeft color="#912B75" />
                        <span className="text-[#912B75]">Home</span>
                    </div>
                </Link>
                <Link href={"/course"}>
                    <div className="flex flex-col w-12/12 items-center  border-none bg-gray-100 hover:bg-gray-200 rounded-lg overflow-y-auto mb-3 p-2">
                        <ListMusic color="gray" />
                        <span className="text-gray-500">Course</span>
                    </div>
                </Link>
            </div>

            {/* <Link href={"#"}> */}
            <button
                onClick={() => logout()}
                className="flex flex-col w-12/12 items-center overflow-y-auto mb-3 p-2"
            >
                <LogOut />
                <span className="text-gray-500">Logout</span>
            </button>
            {/* </Link> */}
        </aside>
    );
};

export default Sidebar;
