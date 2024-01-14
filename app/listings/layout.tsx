import Navbar from "@/components/navbar/Navbar";
import getCurrentUser from "../action/getCurrentUser"


export default async function RoomLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const currentUser = await getCurrentUser();
    return (
        <div>
            <div className="hidden md:block">
                <Navbar currentUser={currentUser} />
            </div>
            <div className="md:pt-[12rem]">
                {children}
            </div>
        </div>
    )
}
