import Navbar from "@/components/navbar/Navbar";
import getCurrentUser from "../action/getCurrentUser"
import Footer from "@/components/footer/Footer";
import TopBar from "@/components/navbar/TopBar";


export default async function BookLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const currentUser = await getCurrentUser();
    return (
        <div>
            <div className="hidden md:block">
                <TopBar />
            </div>

            {children}
            <Footer />
        </div>
    )
}
