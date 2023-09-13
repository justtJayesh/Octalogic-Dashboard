import Sidebar from "@/components/ui/custom/sidebar";
import "./globals.css";
import { AuthProvider } from "@/context/AuthProvider";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    
    return (
        <AuthProvider>
            <html lang="en">
                <body>
                    {/* <div className="flex"> */}
                        {/* <Sidebar /> */}
                        {/* <div className="overflow-y-auto h-screen w-full bg-[#F4F4F4]"> */}
                            {children}
                        {/* </div> */}
                    {/* </div> */}
                </body>
            </html>
        </AuthProvider>
    );
}
