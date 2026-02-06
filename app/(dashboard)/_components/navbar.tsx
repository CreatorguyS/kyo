import { NavbarRoutes } from "@/components/navbar-routes"
import { MobileSidebar } from "./mobile-sidebar"

export const Navbar = () => {
    return (
        <div className="p-4 border-b h-full flex items-center bg-white dark:bg-slate-900 shadow-md dark:shadow-lg border-purple-200 dark:border-purple-900/50 transition-colors duration-200">
            <MobileSidebar />
            <NavbarRoutes />
        </div>
    )
}