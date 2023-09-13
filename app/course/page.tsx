"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Courses {
    name: string;
    description: string;
    instructor: string;
    instrument: string;
    dayOfWeek: string;
    numberOfStudents: number;
    status: "Active" | "Closed" | "Archived";
    price: number;
}

const Course = () => {
    const [course, setCourses] = useState<Courses[]>([]);

    const getData = async () => {
        try {
            const res = await axios.get(
                "https://octalogic-backend.onrender.com/courses"
            );
            const data = res.data;
            setCourses(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="p-7 w-full h-screen">
            <Dialog>
                <h1 className="text-3xl font-medium text-gray-400">Courses</h1>

                {/* All Courses */}
                <div className="w-full">
                    <div className="flex justify-between mt-5">
                        <p className="text-lg font-medium text-gray-400">
                            COURSE LIST
                        </p>
                        <input
                            type="text"
                            placeholder="Search"
                            className="py-1 px-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black block"
                        />
                    </div>

                    {/* Table */}
                    <div className="py-5 px-3 border rounded-lg mt-4 bg-white">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead className="w-[200px]">
                                        Description
                                    </TableHead>
                                    <TableHead>Instructor</TableHead>
                                    <TableHead>Instrument</TableHead>
                                    <TableHead>Day of week</TableHead>
                                    <TableHead># of Students</TableHead>
                                    <TableHead>Price</TableHead>
                                    <TableHead className="text-center">
                                        Status
                                    </TableHead>
                                    <TableHead className="text-center">
                                        Action
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            {course.slice(0, 10).map((el, i) => {
                                return (
                                    <TableBody key={i}>
                                        <Popover>
                                            <TableRow>
                                                <TableCell>{el.name}</TableCell>
                                                <TableCell className="w-[200px] ">
                                                    {el.description}
                                                </TableCell>
                                                <TableCell>
                                                    {el.instructor}
                                                </TableCell>
                                                <TableCell>
                                                    {el.instrument}
                                                </TableCell>
                                                <TableCell>
                                                    {el.dayOfWeek}
                                                </TableCell>
                                                <TableCell>
                                                    {el.numberOfStudents}
                                                </TableCell>
                                                <TableCell>
                                                    ${el.price}
                                                </TableCell>
                                                <TableCell>
                                                    <div
                                                        className={`border-b ${el.status ===
                                                                "Active"
                                                                ? "bg-green-100"
                                                                : el.status ===
                                                                    "Closed"
                                                                    ? "bg-red-100"
                                                                    : "bg-gray-100"
                                                            } rounded-md text-center p-1 `}
                                                    >
                                                        {el.status}
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <PopoverTrigger>
                                                        <div className="flex justify-center items-center hover:cursor-pointer">
                                                            <MoreVertical
                                                                size={20}
                                                            />
                                                        </div>
                                                    </PopoverTrigger>
                                                    {el.status ===
                                                        "Archived" ? (
                                                        <PopoverContent className="w-[170px]">
                                                            Unarchive Course
                                                        </PopoverContent>
                                                    ) : (
                                                        <PopoverContent className="w-[170px] flex flex-col  items-start">
                                                            <div className="p-1 text-left">
                                                                Edit Course
                                                            </div>
                                                            <div className="p-1">
                                                                Closed Course
                                                            </div>
                                                            <div className="p-1">
                                                                Archived Course
                                                            </div>
                                                        </PopoverContent>
                                                    )}
                                                </TableCell>
                                            </TableRow>
                                        </Popover>
                                        <hr />
                                    </TableBody>
                                );
                            })}
                        </Table>
                    </div>
                </div>

                <DialogTrigger>
                    <Button
                        variant="outline"
                        className="bg-red-200 h-[50px] fixed top-[80%] left-[80%]  text-lg font-light rounded-lg  shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                    >
                        ➕ Add Course
                    </Button>
                </DialogTrigger>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="text-2xl">
                            Add Course
                        </DialogTitle>
                        <DialogDescription className="flex flex-col gap-4">
                            <input
                                className="py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black w-full block"
                                type="text"
                                placeholder="Course Name"
                            />
                            <input
                                className="py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black w-full block"
                                type="text"
                                placeholder="Description"
                            />
                            <input
                                className="py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black w-full block"
                                type="text"
                                placeholder="Instructor"
                            />
                            <input
                                className="py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black w-full block"
                                type="text"
                                placeholder="Instrument"
                            />
                            <input
                                className="py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black w-full block"
                                type="text"
                                placeholder="Day of week"
                            />
                            <input
                                className="py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black w-full block"
                                type="text"
                                placeholder="Price"
                            />
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button type="submit" variant={"ghost"}>
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            className="bg-red-200 text-black hover:bg-red-300"
                        >
                            Add Course
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Course;
