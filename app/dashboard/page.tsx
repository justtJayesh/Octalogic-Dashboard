/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Card from "@/components/ui/custom/card";
import { AuthContext } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/ui/custom/sidebar";

interface Enrolled {
    enrollmentNumber: string;
    studentName: string;
    courseName: string;
    fees: number;
    enrollmentDate: string;
}

interface BestStudent {
    registrationNumber: string;
    firstName: string;
    lastName: string;
    course: string;
    fees: number;
    registrationDate: string;
}

const cardData = [
    { text: "64", subText: "total number of students" },
    { text: "12", subText: "total number of courses" },
    { text: "$900", subText: "total amount earned" },
    { text: "Guitar", subText: "best performing course" },
    { text: "Flute", subText: "worst performing course" },
];

const page = () => {
    const { isAuth }: any = useContext(AuthContext);
    const [enrollData, setEnrollData] = useState<Enrolled[]>([]);
    const [bestStudent, setBestStudent] = useState<BestStudent[]>([]);
    const router = useRouter();

    useEffect(() => {
        isAuth ? router.push("/dashboard") : router.push("/login");
    }, [isAuth]);

    const getData = async () => {
        try {
            const res = await axios.get(
                "https://octalogic-backend.onrender.com/enrollments"
            );
            const data = res.data;
            setEnrollData(data);

            const resp = await axios.get(
                "https://octalogic-backend.onrender.com/registrations"
            );
            const stdData = resp.data;
            setBestStudent(stdData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="flex">
            <Sidebar />
            <div className="overflow-y-auto h-screen w-full bg-[#F4F4F4]">
                <div className="p-7 w-full h-screen">
                    <h1 className="text-3xl font-medium text-gray-400">
                        Overview
                    </h1>
                    <div className="flex  justify-between mt-6">
                        {cardData?.map((el, i) => (
                            <Card key={i} {...el} />
                        ))}
                    </div>

                    {/* Enrolled students */}
                    <div className="w-full">
                        <div className="flex justify-between mt-9">
                            <p className="text-lg font-medium text-gray-400">
                                LATEST ENROLMENT
                            </p>
                            <Link href={"#"} className="text-[#912B75]">
                                View all Courses
                            </Link>
                        </div>

                        {/* Table */}
                        <div className="py-5 px-3 border rounded-lg mt-4 bg-white">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Ern. No.</TableHead>
                                        <TableHead>S.name</TableHead>
                                        <TableHead>C.name</TableHead>
                                        <TableHead>Fees</TableHead>
                                        <TableHead className="text-right">
                                            Ern. Date
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                {enrollData.slice(0, 5).map((el, i) => {
                                    return (
                                        <TableBody key={i}>
                                            <TableRow>
                                                <TableCell>
                                                    {el.enrollmentNumber}
                                                </TableCell>
                                                <TableCell>
                                                    {el.studentName}
                                                </TableCell>
                                                <TableCell>
                                                    {el.courseName}
                                                </TableCell>
                                                <TableCell>
                                                    ${el.fees}
                                                </TableCell>
                                                <TableCell className="text-right border-b">
                                                    {el.enrollmentDate}
                                                </TableCell>
                                            </TableRow>
                                            <hr />
                                        </TableBody>
                                    );
                                })}
                            </Table>
                        </div>
                    </div>

                    {/* Best students */}
                    <div className="w-full">
                        <div className="flex justify-between mt-9">
                            <p className="text-lg font-medium text-gray-400">
                                BEST STUDENTS
                            </p>
                            <Link href={"#"} className="text-[#912B75]">
                                View all Students
                            </Link>
                        </div>

                        {/* Table */}
                        <div className="py-5 px-3 border rounded-lg mt-4 bg-white">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Reg. No.</TableHead>
                                        <TableHead>F.name</TableHead>
                                        <TableHead>L.name</TableHead>
                                        <TableHead>Course #</TableHead>
                                        <TableHead>Total Fees</TableHead>
                                        <TableHead className="text-right">
                                            Reg. Date
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                {bestStudent.slice(0, 5).map((el, i) => {
                                    return (
                                        <TableBody key={i}>
                                            <TableRow>
                                                <TableCell>
                                                    {el.registrationNumber}
                                                </TableCell>
                                                <TableCell>
                                                    {el.firstName}
                                                </TableCell>
                                                <TableCell>
                                                    {el.lastName}
                                                </TableCell>
                                                <TableCell>
                                                    {el.course}
                                                </TableCell>
                                                <TableCell>
                                                    ${el.fees}
                                                </TableCell>
                                                <TableCell className="text-right border-b">
                                                    {el.registrationDate}
                                                </TableCell>
                                            </TableRow>
                                            <hr />
                                        </TableBody>
                                    );
                                })}
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
