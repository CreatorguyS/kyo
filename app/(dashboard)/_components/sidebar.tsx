import { Logo } from "./logo"
import { SidebarRoutes } from "./sidebar-routes"

export const Sidebar = () => {
    return (
        <>
        <div className="h-full border-r flex flex-col overflow-y-auto bg-slate-900 dark:bg-slate-950 border-purple-900/50 shadow-lg">
            <div className="p-6 flex items-center">
                <Logo />
                <div className="self-center ml-2 text-lg md:text-xl font-extrabold tracking-wide font-[Poppins] bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-transparent bg-clip-text drop-shadow-sm">KYO</div>
            </div>
            <div className="flex flex-col w-full">
            <SidebarRoutes />
        </div>
        </div>
        
        </>
        
    )
}