import { LucideIcon } from "lucide-react";

import { IconBadge } from "@/components/icon-badge"
import { ReactNode } from "react";

interface BannerCardProps {
  variant?: "default" | "success";
  label: string;
  description: string | ReactNode;
  icon: LucideIcon;
}


export const BannerCard = ({
  variant,
  icon: Icon,
  description,
  label,
}: BannerCardProps) => {
  return (
    <div className="border rounded-lg flex items-center gap-x-2 p-3 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-slate-800 dark:to-slate-700 border-purple-200 dark:border-purple-900/50 shadow-sm hover:shadow-md transition">
      <IconBadge
        variant={variant}
        icon={Icon}
      />
      <div>
        <p className="font-medium text-slate-900 dark:text-slate-100">
          {label}
        </p>
        <p className="text-slate-700 dark:text-slate-300 text-sm">
          { description }
        </p>
      </div>
    </div>
  )
}