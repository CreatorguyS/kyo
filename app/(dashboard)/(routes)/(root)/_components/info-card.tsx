import { LucideIcon } from "lucide-react";

import { IconBadge } from "@/components/icon-badge"

interface InfoCardProps {
  numberOfItems: number;
  variant?: "default" | "success";
  label: string;
  icon: LucideIcon;
}

export const InfoCard = ({
  variant,
  icon: Icon,
  numberOfItems,
  label,
}: InfoCardProps) => {
  return (
    <div className="border rounded-lg flex items-center gap-x-2 p-3 bg-white dark:bg-slate-800 border-purple-200 dark:border-purple-900/50 shadow-sm hover:shadow-md transition">
      <IconBadge
        variant={variant}
        icon={Icon}
      />
      <div>
        <p className="font-medium text-slate-900 dark:text-slate-100">
          {label}
        </p>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          {numberOfItems} {numberOfItems === 1 ? "Course" : "Courses"}
        </p>
      </div>
    </div>
  )
}