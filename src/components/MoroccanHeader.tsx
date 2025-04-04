
import React from "react";
import { cn } from "@/lib/utils";

interface MoroccanHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const MoroccanHeader: React.FC<MoroccanHeaderProps> = ({
  title,
  subtitle,
  className,
}) => {
  return (
    <div className={cn("text-center mb-6", className)}>
      <h1 className="text-3xl md:text-4xl font-bold text-morocco-blue">{title}</h1>
      {subtitle && (
        <p className="mt-2 text-morocco-teal text-lg">{subtitle}</p>
      )}
      <div className="moroccan-divider w-24 mx-auto mt-3"></div>
    </div>
  );
};

export default MoroccanHeader;
