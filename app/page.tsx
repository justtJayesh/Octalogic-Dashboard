import { Button } from "@/components/ui/button";
import { Users2 } from "lucide-react";

export default function Home() {
    return (
        <div>
            <div id="card" className="w-1/6 h-20 bg-red-500 p-4 rounded-lg">
                <div
                    id="icon"
                    className="w-[30px] h-[30px] flex justify-center items-center"
                >
                    <Users2 />
                </div>
            </div>
            <Button>Add me</Button>
        </div>
    );
}
