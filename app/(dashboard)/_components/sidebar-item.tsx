"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const SidebarItem = ({
  icon: Icon,
  label,
  href,
}: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center gap-x-2 text-slate-300 text-sm font-[500] pl-5 transition-all hover:text-white hover:bg-purple-600/20",
        isActive &&
          "text-purple-400 bg-purple-600/20 hover:bg-purple-600/20 hover:text-purple-400"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon size={22} className={cn("text-slate-400", isActive && "text-purple-400")} />
        {label}
      </div>

      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-purple-500 h-full transition-all",
          isActive && "opacity-100"
        )}
      />
    </button>
  );
};
